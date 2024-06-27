import React from 'react'

const services = () => {
  return (
    <div>
      <div className="services-container">
        <div className="service-text">
            <h1 className="h2">Explore Our <span>Service</span></h1>
            <button className='service-btn'>See More</button>
        </div>

        <div className="service-card">
            <div className="card1">
               <div className="card-content">
               <div className="icon">
                    <h1>Icon</h1>
                    <h2>Web Development</h2>
                </div>
                <div className="card-text">
                    <p> We ensure that your online presence is delivered to the right audience at the right time, minimizing downtime and optimizing digital performance</p>
                </div>
               </div>
            </div>
            <div className="card2">
            <div className="card-content">
               <div className="icon">
                    <h1>Icon</h1>
                    <h2>Branding/Graphics</h2>
                </div>
                <div className="card-text">
                    <p> We ensure that your visual identity is delivered with precision and impact, minimizing confusion and optimizing recognition.</p>
                </div>
               </div>
            </div>
            <div className="card3">
            <div className="card-content">
               <div className="icon">
                    <h1>Icon</h1>
                    <h2>Mobile App Dev</h2>
                </div>
                <div className="card-text">
                    <p> We ensure that your app is delivered to the right users at the right time, minimizing delays and optimizing performance</p>
                </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default services
