import React from 'react'

export const Footer = () => {
  let footerStyle = {
      position: 'fixed',
      textAlign: 'center',
      /* position: sticky; */
      padding: '10px 10px 0px 10px',
      bottom: '0',
      width: '100%',
      height: '7%',
      background: 'black',
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      Copyright &copy; MyTodosList.com
    </footer>
  )
}

