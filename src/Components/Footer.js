import React from 'react'

export default function Footer() {
  let footerStyle={
    position: "absolute",
    width: "100%",
    backgroudColor: "red",
    border:"5px solid white"
  }
  
  return (
    <div>
    <footer className='bg-dark text-white py-3' style={footerStyle}>
      <p className='text-center'>Copywrite &copy; React Js learn !!!</p>
    </footer>
    </div>
  )
}
