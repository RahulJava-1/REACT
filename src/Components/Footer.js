import React from 'react'

export default function Footer() {
  let footerStyle={
    position: "absolute",
    top:"85vh",
    width: "100%",
    backgroudColor: "red",
    border:"2px solid white"
  }
  
  return (
    <div>
    <footer className='bg-dark text-white py-3 mt-5' style={footerStyle}>
      <p className='text-center'>Copywrite &copy; React Js learn !!!</p>
    </footer>
    </div>
  )
}
