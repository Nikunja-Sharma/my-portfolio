import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    redirect("https://www.reddit.com/user/NikunjaSarma")
  return (
    <div>page</div>
  )
}

export default page