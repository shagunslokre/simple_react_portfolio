import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>CONTACT ME</h1>
                <p>I hope the website did give a small introduction about me. Please feel free to check out my
                    LinkedIn as well as my Github profile. You can find the links on to your left side navigation bar.
                </p>

                <p>You can reach me out via email: shagunslokre22@gmail.com or can use the below form.</p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                 />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;