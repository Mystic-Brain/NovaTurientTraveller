import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import "./Contact.css"
import Recommended from '../../components/Recommended/Recommended'

function Contact() {
  return (
    <div>
        <NavBar />
        <h1>Contact page</h1>
        <div>
            <div>
                <input name="firstname" type="text" placeholder='Firstname' />
            </div>
            <div>
                <input name="lastname" type="text" placeholder='Lastname' />
            </div>
            <div>
                <input name="phone" type="text" placeholder='Phone number' />
            </div>
            <div>
                <input name="address" type="text" placeholder='Address' />
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Contact