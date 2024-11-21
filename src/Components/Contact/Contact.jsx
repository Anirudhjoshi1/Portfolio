import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0d12af6f-a38c-489d-966d-fa9e80db653d");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Email Submitted Successfully")
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id='contact' className='contact'>

        <div className="contact_title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact_left">
                <h1>Let's Talk</h1>
                <p>"I’m currently looking for exciting opportunities to contribute my skills. Feel free to reach out to discuss roles, projects, or collaborations.".</p>

                <div className="contact_details">
                    <div className="contact_detail">
                        <img className='mail_icon' src={mail_icon} alt=""/><p>Anirudh.53.aj@gmail.com</p>
                    </div>

                    <div className="contact_detail">
                    <img src={call_icon} className='mail_icon'  alt="" /> <p>9654471086</p>
                    </div>

                    <div className="contact_detail">
                    <img src={location_icon} className='mail_icon2'  alt="" /> <p>Delhi, India</p> 
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact_right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />

                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='Email' />

                <label htmlFor="">Write Your Message here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>

                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact