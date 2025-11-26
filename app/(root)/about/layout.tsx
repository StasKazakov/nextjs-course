import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p className='text-4xl'>Navbar</p>
        {children}
    </div>

  )
}

export default layout