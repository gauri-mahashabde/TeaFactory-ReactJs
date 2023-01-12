import React from 'react'
import './Button.css'

export default function Button() {
    const handleSubmit = () => {
       console.log("Tea making in Processs")
      };
  return (
   <>
   <button  className= "btn"type='button' onSubmit={handleSubmit}>Tea Making </button>
   </>
    
  )
}
