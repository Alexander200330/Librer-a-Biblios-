import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-600 rounded-md text-white uppercase font-bold text-center my-4 p-3'>
        {children}
    </div>
  )
}

export default Error