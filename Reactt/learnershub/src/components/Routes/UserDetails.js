import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const params = useParams()
    const userID = params.userID
  return (
    <div>
        Details about user {userID}
    </div>
  )
}
