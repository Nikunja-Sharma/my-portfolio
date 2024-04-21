import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    redirect("https://www.twitch.tv/xnikunja")
  return (
    <div>page</div>
  )
}

export default page