import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='flex justify-center bg-orange-300 text-2xl font-bold'>
      User: {userid}
    </div>
  )
}

export default User
