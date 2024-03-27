import React from 'react'
import Navbar from '../Navbar'

const AppShell = ({ chidren }: { chidren: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {chidren}
    </div>
  )
}

export default AppShell
