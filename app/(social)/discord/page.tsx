import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    redirect("https://discordapp.com/users/396122165734539265")
  return (
    <div>Redirecting</div>
  )
}

export default page