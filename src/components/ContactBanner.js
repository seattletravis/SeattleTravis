import React from 'react';
import{ FaBeer } from 'react-icons/fa'
import { GrDocumentPdf } from 'react-icons/gr'



function ContactBanner(props){


  return(
    <>

        <div className='contactBanner'>
          <div className='centerContactBanner'>
          <ul>  
                <li className='contactLi'>
                  <h1 title="Download My Resume" className='icon'><FaBeer size='4vw'/>Resume</h1>
                  <h1 className='icon'><FaBeer size='4vw'/>About</h1>
                  <h1 className='icon'><FaBeer size='4vw'/>Email</h1>
                  <h1 className='icon'><FaBeer size='4vw'/>Contact</h1>
                </li> 
          </ul>
        </div>
 



      </div>
    </>
  )
}


export default ContactBanner;