import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'
import { MdOutlineVideogameAsset } from 'react-icons/md'
import { Link } from 'react-scroll';


const resume = 'resume.pdf'

function ContactBanner(props){

  return(
    <>

        <div className='contactBanner'>
          <div className='centerContactBanner'>
          <ul>  
                <li className='contactLi'>
                  <div>
                    <a href={resume} target='blank'>
                      <i className='icon'><FaRegFilePdf size='4vw'/></i>
                      <h1>Resume</h1>
                    </a>
                  </div>
                  <div>
                    <Link to={'games'} smooth={true} offset={0} duration={1000}>                  
                      <i className='icon'><MdOutlineVideogameAsset size='4vw'/></i>
                      <h1>Games</h1>
                    </Link>
                  </div>
                  <div>
                    <Link to={'about'} smooth={true} offset={0} duration={1000}>                  
                      <i className='icon'><BsPersonCircle size='4vw'/></i>
                      <h1>About</h1>
                    </Link>
                  </div>
                  <div>
                    <a href='mailto:travis@lamberte.com'>
                      <i className='icon'><MdOutlineEmail size='4vw'/></i>
                      <h1>Contact</h1>
                    </a>
                  </div>


                  {/* <div>
                    <i className='icon'><AiOutlineForm size='4vw'/></i>
                    <h1>Contact</h1>
                  </div> */}
                </li> 
          </ul>
        </div>
      </div>
    </>
  )
}


export default ContactBanner;