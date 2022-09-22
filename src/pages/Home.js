import React from 'react'
import Reagan from '../Reagang.jpg'


function Home() {
  return (
    <div className="home">
      <img src={Reagan} alt="Reagan McCann Gavin" className="profile" />
      <h1>Reagan</h1>
      <h3>McCann</h3>
      <h1>Garvin</h1>
      {/* <h1>Reagan McCann Garvin</h1> */}
    </div>
  )
}

export default Home