import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
import Dashboardpage from '../pages/Dashboardpage.jsx'
import BrowseHost from '../pages/BrowseHost.jsx'
import MyBooking from '../pages/Booking/MyBooking.jsx'
import MyListing from '../pages/Mylisting/MyListing.jsx'
import Marketplace from '../pages/Marketplace/Marketplace.jsx'
import Message from '../pages/Messages/Messages.jsx'
import Bids from '../pages/Bids.jsx'
import Reviews from '../pages/Reviews.jsx'
import Modifybooking from '../pages/Booking/Modifybooking.jsx'
import { HouseContext } from '../pages/Mylisting/HouseContext.jsx'
import Settings from '../pages/Settings/Settings.jsx'
import MainPage from '../Mainpage/mainPage.js'
import Dashboard from './Dashboard.js'

const Sidebar = () => {
  return (
    <Routes>
      <Route exact path="/dashboardpage" element={<Dashboardpage />} />
      <Route exact path="/browsehost" element={<BrowseHost />} />
      <Route exact path="/mylisting/:id" element={<MyListing />} />
      <Route exact path="/mybooking" element={<MyBooking />} />
      <Route exact path="/modifybooking" element={<Modifybooking />} />
      <Route exact path="/messages" element={<Message />} />
      <Route exact path="/marketplace" element={<Marketplace />} />
      <Route exact path="/bids" element={<Bids />} />
      <Route exact path="/reviews" element={<Reviews />} />
      <Route exact path="/settings/:name" element={<Settings />} />
      <Route exact path="/maindashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Sidebar
