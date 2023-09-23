import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-scroll';


const resume = 'resume.pdf'

function ContactBanner(){

  return(
    <>

        <div className='contactBanner'>
          <div className='centerContactBanner'>
          <ul>  
                <li className='contactLi'>
                  <div>
                    <a href={resume} target='blank'>
                      <i className='icon'><FaRegFilePdf size='6vw'/></i>
                      <h1>Resume</h1>
                    </a>
                  </div>
                  <div>
                    <Link to={'github'} smooth={true} offset={0} duration={1000}>                  
                      <i className='icon'><FaGithub size='6vw'/></i>
                      <h1>GitHub</h1>
                    </Link>
                  </div>
                  <div>
                    <Link to={'about'} smooth={true} offset={0} duration={1000}>                  
                      <i className='icon'><BsPersonCircle size='6vw'/></i>
                      <h1>About</h1>
                    </Link>
                  </div>
                  
                  <div>
                    <a href='mailto:travis@lamberte.com'>
                      <i className='icon'><MdOutlineEmail size='6vw'/></i>
                      <h1>Contact</h1>
                    </a>
                  </div>
                </li> 
          </ul>
        </div>
      </div>
    </>
  )
}


export default ContactBanner;