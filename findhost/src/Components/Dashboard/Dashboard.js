import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import image from './findahost.png'
import Sidebar from './Sidebar'
import Header from './Header'
import HouseContextProvider, {
  HouseContext,
} from '../pages/Mylisting/HouseContext'
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Header />

      <div className="DB_second">
        <div className="side_bar">
          <div>
            <Link className="link" to="/dashboardpage" activeclassName="active">
              Dashboard
            </Link>
            <Link className="link" to="/browsehost" activeclassName="active">
              Browse Host
            </Link>
            <Link className="link" to="/mylisting/1" activeclassName="active">
              My listing
            </Link>
            <Link className="link" to="/mybooking" activeclassName="active">
              My Booking
            </Link>
            <Link className="link" to="/messages" activeclassName="active">
              Messages
            </Link>
            <Link className="link" to="/marketplace" activeclassName="active">
              Marketplace
            </Link>
          </div>
          <div className="sidebar-bottom">
            <Link
              className="link"
              to="/settings/myaccount"
              activeclassName="active"
            >
              Settings
            </Link>
            <Link className="link" to="" activeclassName="active">
              Help & Support
            </Link>
          </div>
        </div>

        <div className="DB_page">
          <div className="DB_page_Top">
            <h3>Welcome Jamie Darren</h3>
          </div>
          <div className="DB_page_bottom">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
