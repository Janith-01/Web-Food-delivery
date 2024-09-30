import React from 'react'
import './Header.css' 

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite foods here</h2>
            <p>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header