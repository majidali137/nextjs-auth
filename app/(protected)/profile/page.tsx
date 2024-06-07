import UserProfileFrom from '@/components/user-profile-form'
import React from 'react'

const page = () => {
  return (
    <div className="flex-grow flex flex-col items-center p-4 sm:p-6 lg:p-8">
    <UserProfileFrom />
  </div>
    // <UserProfileFrom/>
  )
}

export default page