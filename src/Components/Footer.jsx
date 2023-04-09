import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer() {
  return (
    <footer>
      <div className='footer-column'>
        <h3 className='footer-text'>Coty Breault</h3>
        <p>&copy; 2023</p>
      </div>
      <div className='footer-column'>
        <h3 className='footer-text'>Social</h3>
        <ul>
          <li>
            <a href='https://github.com/cotybro' target='_blank'>
              {<GitHubIcon />}
            </a>
            <a href='https://www.linkedin.com/in/coty-breault/' target='_blank'>
              {<LinkedInIcon />}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
