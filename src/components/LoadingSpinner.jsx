import React from 'react'

export const LoadingSpinner = ({ className = '', size = 'default' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    default: 'h-10 w-10',
    lg: 'h-16 w-16'
  }
  
  return (
    <div className={`flex flex-col justify-center items-center py-12 ${className}`.trim()}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} rounded-full border-4 border-primary/20`}></div>
        {/* Spinning part */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} rounded-full border-4 border-transparent border-t-primary animate-spin`}></div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground animate-pulse">Yuklanmoqda...</p>
    </div>
  )
}

export default LoadingSpinner
