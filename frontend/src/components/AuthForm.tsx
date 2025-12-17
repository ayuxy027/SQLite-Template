import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error, success, handleSignup, handleLogin } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      await handleLogin(username, password)
    } else {
      await handleSignup(username, password)
    }
    if (success) {
      setUsername('')
      setPassword('')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 p-1 bg-stone-50 rounded-lg border border-stone-200">
        <button
          type="button"
          onClick={() => {
            setIsLogin(true)
            setError(null)
            setSuccess(null)
          }}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            isLogin
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            setIsLogin(false)
            setError(null)
            setSuccess(null)
          }}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            !isLogin
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-stone-700 mb-1.5">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1.5">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
            placeholder="Enter password"
          />
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-sm text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-sm text-green-600">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

export default AuthForm

