import React from "react";
import './ContactUs.css';

function ContactUs() {
  return (
    <>
      <div className='membercontainer'>
        <div className='headerlinesmall'>Meet our members,</div>

        <div className='member'>
          <div className='member_container'>
            <div className='number one'> 1 </div>
            <div className='verticalline'>
              <div className='member_header'>Tosha Bhowmik</div>
              <div className='member_subtext'>
                <a href='https://github.com/deepak1ok'>Connect on Github</a>
                <div className='email'>Email tosha45@dosa.com</div>
                <a href='https://www.linkedin.com/in/deepak10460/'>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='member'>
          <div className='member_container'>
            <div className='number two'>2</div>
            <div className='verticalline'>
              <div className='member_header'>Kajal Dash</div>
              <div className='member_subtext'>
                <a href='#'>Connect on Github</a>
                <div className='email'>Email : kajal@gmail.com </div>
                <a href='#'>connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className='member'>
          <div className='member_container'>
            <div className='number two'>3</div>
            <div className='verticalline'>
              <div className='member_header'>Prithwiraj Mohanty</div>
              <div className='member_subtext'>
                <a href='#'>Connect on Github</a>
                <div className='email'>Email :theprithwiraj@gmail.com </div>
                <a href='#'>connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className='member'>
          <div className='member_container'>
            <div className='number two'>4</div>
            <div className='verticalline'>
              <div className='member_header'>Ayushi Panda</div>
              <div className='member_subtext'>
                <a href='#'>Connect on Github</a>
                <div className='email'>Email : ap@gmail.com </div>
                <a href='#'>connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;