import React, { useEffect, Fragment } from 'react';
import useContactForm from './CustomHooks.js';

function Contact() {

  const sendEmail = () => {
    alert(`
      Email Sent!
      Name: ${inputs.name}
      Email: ${inputs.email}
      Subject: ${inputs.subject}
      Message: ${inputs.message}
      `
    );
  }

  const {inputs, handleInputChange, handleSubmit} = useContactForm(sendEmail);

  useEffect(() => {
    document.title = 'Contact - Dana Sevcik';
  });

  return (
    <Fragment>
      <div>I am the Contact page</div>
        <form action='https://formspree.io/hello@danasevcik.com' method='POST'>
          <input onChange={handleInputChange} value={inputs.firstname} type='text' name='firstname' placeholder='First Name' required/>
          <input onChange={handleInputChange} value={inputs.lastname} type='text' name='lastname' placeholder='Last Name' required/>
          <input onChange={handleInputChange} value={inputs.email} type='email' name='email' placeholder='Email' required/>
          <input onChange={handleInputChange} value={inputs.subject} type='text' name='subject' placeholder='Subject' required/>
          <textarea onChange={handleInputChange} value={inputs.message} type='text' name='message' placeholder='Message' required/>
          <input type='text' name='_gotcha' style='display:none' />
          <input type='hidden' name='_next' value='www.danasevcik.com' />
          <input type='submit' value='Send'/>
        </form>
    </Fragment>
  )

}

export default Contact;
