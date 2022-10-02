import React,{useRef} from 'react'
import'./Contact.css'
// import emailjs from '@emailjs/browser'
const Contact = () => {
  // const form=useRef();
  // const sendEmail=(e)=>{
  // e.preventDefault();
  
  // emailjs.sendForm(
    // 'service_an5jwn',
    // 'template_meexuwq',
    // form.current,
    // '83DHdSra7S9smTd'
  // )
  // .then(
    // (result)=>{
      // console.log(result.text)
      // console.log('message sent')
    // },
    // (error)=>{
      // console.log(error.text);
    // }
  // );
  
  return (
    <div>
        <div className='Head'>
          <span>Get in Touch</span><br/>
         <span>Contact me</span><br/>
        <div className='form'>
            <form>
            <input htmlFor="text" name='user_name' placeholder='Name'/><br/>
            <input htmlFor="text"name='user_email' placeholder='Email'/><br/>
            <textarea className='user' name='message' placeholder='Message'/>
            </form>
            < button className='button c-btn' value="send">Send</button>
        </div>
        </div>
    </div>
  )
};

export default Contact