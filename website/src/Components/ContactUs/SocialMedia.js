import React from 'react'
import './SocialMedia.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  const icons = [
    {
      iconName: faInstagram,
      icontitle: 'Instagram',
      iconLink:
        'https://www.instagram.com/ayeshanazarofficial/?igshid=ZDdkNTZiNTM%3D',
    },
    {
      iconName: faFacebook,
      icontitle: 'Facebook',
      iconLink:
        'https://pixabay.com/photos/mobile-phone-smartphone-keyboard-1917737/',
    },
    {
      iconName: faLinkedin,
      icontitle: 'Linkedin',
      iconLink: 'https://www.linkedin.com/in/ayeshanazar/',
    },
  ]
  return (
    <div className="social_container">
      <div className="icon-content">
        {icons.map((nIcon) => {
          console.log(nIcon)

          return (
            <div className="icons">
              <a className="icons_Link" href={nIcon.iconLink} target="_blank">
                <FontAwesomeIcon icon={nIcon.iconName} />
              </a>
              <p>{nIcon.icontitle}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SocialMedia
