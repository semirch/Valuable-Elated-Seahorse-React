import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Valuable Elated Seahorse</title>
        <meta property="og:title" content="Valuable Elated Seahorse" />
      </Helmet>
    </div>
  )
}

export default Home
