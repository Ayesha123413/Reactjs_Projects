import React from 'react'
import './BrowseHost.css'
import img from '../images/img2.png'
import img2 from '../images/img3.png'
import img3 from '../images/img4.png'

const Host = [
  { image: img, name: 'Ahmad rizaldi', email: 'Ahmadrizaldi@gmail.com' },
  { image: img2, name: 'Ahmad rizaldi', email: 'Ahmadrizaldi@gmail.com' },
  { image: img, name: 'wadreen joyuk', email: 'wadreenjoyuk@gmail.com' },
  { image: img2, name: 'Ahmad rizaldi', email: 'Ahmadrizaldi@gmail.com' },
]

const BrowseHost = (props) => {
  return (
    <div className="browseHost_container ">
      <div className="browseHost_header">
        <h3>Browse Host</h3>
        <a href> View all</a>
      </div>

      {Host.map((item) => {
        return (
          <div>
            <div className="BH_content_container">
              <div className="browseHost_content">
                <div className="browseHost_content_right">
                  <img src={item.image} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.email}</p>
                  </div>
                </div>
                <button> View</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BrowseHost
