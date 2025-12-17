import { useEffect, useState } from 'react'
import { getUsers, getUserCount } from '../api/auth'

type User = {
  id: number
  username: string
  password: string
  createdAt: string
}

const Stats = () => {
  const [users, setUsers] = useState<User[]>([])
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    try {
      setError(null)
      const [usersData, countData] = await Promise.all([getUsers(), getUserCount()])
      setUsers(usersData)
      setCount(countData.count)
    } catch (err) {
      console.error(err)
      setError('Failed to load stats')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
    const interval = setInterval(loadData, 2000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="p-6 rounded-xl border border-stone-200 bg-white">
        <div className="text-stone-500">Loading stats...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 rounded-xl border border-red-200 bg-red-50">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  if (count === 0) {
    return (
      <div className="p-8 rounded-xl border border-stone-200 bg-stone-50 text-center">
        <div className="text-lg font-semibold text-stone-900 mb-2">No users yet</div>
        <div className="text-sm text-stone-600">Be the first user of your app, try the auth!</div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-stone-900">Users ({count})</h3>
        <button
          onClick={loadData}
          className="text-xs text-stone-500 hover:text-stone-900 transition-colors"
        >
          Refresh
        </button>
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 rounded-lg border border-stone-200 bg-white hover:border-stone-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="font-medium text-stone-900">{user.username}</div>
                <div className="text-xs text-stone-500 mt-1 font-mono">{user.password}</div>
              </div>
              <div className="text-xs text-stone-400">
                {new Date(user.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats

