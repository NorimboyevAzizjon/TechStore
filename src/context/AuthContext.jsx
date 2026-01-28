import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

// Demo foydalanuvchilar
const DEMO_USERS = [
  { email: 'admin@example.com', password: 'Admin123', role: 'admin', name: 'Admin' },
  { email: 'user@example.com', password: 'User123', role: 'user', name: 'User' }
]

// LocalStorage'dan foydalanuvchilarni olish
const getStoredUsers = () => {
  const stored = localStorage.getItem('registered_users')
  return stored ? JSON.parse(stored) : []
}

// Foydalanuvchilarni saqlash
const saveStoredUsers = (users) => {
  localStorage.setItem('registered_users', JSON.stringify(users))
}

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
    
    if (foundUser) {
      const userData = { 
        email: foundUser.email, 
        role: foundUser.role,
        name: foundUser.name,
        isAdmin: foundUser.role === 'admin'
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return userData
    }
    
    // Ro'yxatdan o'tgan foydalanuvchini tekshirish
    const storedUsers = getStoredUsers()
    const registeredUser = storedUsers.find(
      u => u.email === email && u.password === password
    )
    
    if (registeredUser) {
      const userData = { 
        email: registeredUser.email, 
        name: registeredUser.name,
        role: 'user',
        isAdmin: false
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return userData
    }
    
    throw new Error('Email yoki parol noto\'g\'ri')
  }

  const register = async (name, email, password) => {
    // Email mavjudligini tekshirish
    const demoExists = DEMO_USERS.find(u => u.email === email)
    if (demoExists) {
      return { success: false, error: 'Bu email allaqachon ro\'yxatdan o\'tgan' }
    }
    
    const storedUsers = getStoredUsers()
    const userExists = storedUsers.find(u => u.email === email)
    if (userExists) {
      return { success: false, error: 'Bu email allaqachon ro\'yxatdan o\'tgan' }
    }
    
    // Yangi foydalanuvchi qo'shish
    const newUser = { name, email, password, role: 'user' }
    storedUsers.push(newUser)
    saveStoredUsers(storedUsers)
    
    // Avtomatik login
    const userData = { email, name, role: 'user', isAdmin: false }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    
    return { success: true }
  }

  const updateProfile = async (updates) => {
    if (!user) {
      return { success: false, error: 'Foydalanuvchi topilmadi' }
    }
    
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
    
    // Ro'yxatdan o'tgan foydalanuvchilar ro'yxatini yangilash
    const storedUsers = getStoredUsers()
    const userIndex = storedUsers.findIndex(u => u.email === user.email)
    if (userIndex !== -1) {
      storedUsers[userIndex] = { ...storedUsers[userIndex], ...updates }
      saveStoredUsers(storedUsers)
    }
    
    return { success: true }
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const isAdmin = user?.role === 'admin' || user?.email === 'admin@example.com' || user?.isAdmin

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      register,
      updateProfile,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  )
}