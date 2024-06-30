import React from 'react'

function AboutUs() {
  return (
    <div className="container  px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
    <div className="contentLeft ">
      <div className="row">
        <div className="imgWrapper">
          <img
            src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
        </div>
        <div className="imgWrapper">
          <img
            src="https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
        </div>
        <div className="imgWrapper">
          <img
            src="https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
        </div>
        <div className="imgWrapper">
          <img
            src="https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="contentRight">
      <div className="content">
        <h4>Welcome To</h4>
        <h2>About Us Title...</h2>
        <p>
        We all love Beer but we lie and try to be saints
        </p>
        <a href="#">Read More...</a>
      </div>
    </div>
  </div>
  )
}

export default AboutUs
