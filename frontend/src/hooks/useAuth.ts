import { useState } from 'react'
import { signup, login } from '../api/auth'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSignup = async (username: string, password: string) => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      await signup(username, password)
      setSuccess('Account created successfully!')
      return true
    } catch (err: any) {
      setError(err.message || 'Failed to sign up')
      return false
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (username: string, password: string) => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      await login(username, password)
      setSuccess('Logged in successfully!')
      return true
    } catch (err: any) {
      setError(err.message || 'Failed to login')
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    success,
    handleSignup,
    handleLogin
  }
}

