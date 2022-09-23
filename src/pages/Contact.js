import React from 'react'

function Contact() {
  return (
    <section>
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <input className="form-info" type="text" placeholder="Name..."  name="user_name" required />
                <br/>
                <input className="form-info" type="email" placeholder="Email Address..." name="user_email" required />
                <br/>
                <input className="form-info" type="text" placeholder="Subject..." name="subject" required />
                <br/>
                <textarea className="form-message" placeholder="Write your message here..." name="message"></textarea>
                <br/>
                <button className="btn" type="submit">Send Message</button>
            </form>
        </div>  
    </section>
  )
}

export default Contact