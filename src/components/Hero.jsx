import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='border-cyan-900 border-8 m-20 mx-96 p-7 '>
      <div className='text-center py-5'>
      <h1 className='font-bold text-2xl mb-2'>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
       <Button/>
      

      <div className='items-center justify-center flex'>
        <button className='bg-blue-600 text-white px-7 py-2 rounded-lg font-bold'>Roll</button>
      </div>
    </div>
  )
}

export default Hero
