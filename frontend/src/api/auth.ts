const API_BASE = '/api'

export async function signup(username: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Failed to sign up')
  }
  return res.json()
}

export async function login(username: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Failed to login')
  }
  return res.json()
}

export async function getUsers() {
  const res = await fetch(`${API_BASE}/users`)
  if (!res.ok) throw new Error('Failed to load users')
  return res.json()
}

export async function getUserCount() {
  const res = await fetch(`${API_BASE}/users/count`)
  if (!res.ok) throw new Error('Failed to load user count')
  return res.json()
}

