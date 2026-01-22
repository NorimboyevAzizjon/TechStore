import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

// Demo foydalanuvchilar
const DEMO_USERS = [
  { email: 'admin@example.com', password: 'Admin123', role: 'admin' },
  { email: 'user@example.com', password: 'User123', role: 'user' }
]

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // LocalStorage'dan foydalanuvchini yuklash
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error loading user:', error)
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Demo foydalanuvchini tekshirish
    const foundUser = DEMO_USERS.find(
      u => u.email === email && u.password === password
    )
    
    if (!foundUser) {
      throw new Error('Email yoki parol noto\'g\'ri')
    }
    
    const userData = { email: foundUser.email, role: foundUser.role }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    return userData
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const isAdmin = user?.role === 'admin' || user?.email === 'admin@example.com'

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  )
}