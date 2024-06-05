import React from 'react'
import { useAuth } from '../../../hooks/useAuth'

export const AdminHome = () => {
  const {user} =useAuth()
  return (
    <div> <h2>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-blue-500 flex items-center justify-center">
          {user?.photoURL ? (
            <img
              className="w-24 h-24 rounded-full border-4 border-white"
              src={user.photoURL}
              alt="User profile"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-gray-500">
              <span className="text-2xl">No Image</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome {user?.displayName ? user.displayName : 'Anonymous User'}
          </h2>
          <p className="text-center text-gray-600 mt-2">{user?.email}</p>
        </div>
      </div>
    </div>
    
    
    </h2></div>
  )
}
