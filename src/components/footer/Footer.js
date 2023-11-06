import React from 'react'

function Footer() {
  return (
    <div>
   <footer className="container-fluid footermain py-sm-5 py-3">
  <div className="row">
    <div className="col-xl-2 col-12">
      <div className="aboutimage pb-2 pb-xl-0">
        <a href="index.html" className="flogo d-inline-block">
          <img className="w-100 h-100  pb-xl-0" src="./assets/image/Logo/logo.svg" alt="footerlogo" />
        </a> 
      </div>
    </div>
    <div className="col-lg-4 col-12 col-sm-6 col-xl-2">
      <div className="useful-links">
        <div className="footerHeading">Quick Links</div>
        <ul className="list list-unstyled">
          <li className="itemelist"><a className="text-gray" href="./index.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Home</a></li>
          <li className="itemelist"><a className="text-gray" href="./aboutus.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>About Us</a></li>
          <li className="itemelist"><a className="text-gray" href="./indiatour.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>India Tour</a></li>
          <li className="itemelist"><a className="text-gray" href="./blog.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Blog</a></li>
          <li className="itemelist"><a className="text-gray" href="./contactUs.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4 col-12 col-sm-6 col-xl-3">
      <div className="useful-links">
        <div className="footerHeading">Popular Tour Packages</div>
        <ul className="list list-unstyled">
          <li className="itemelist"><a className="text-gray" href="./golden-triangle-tours.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Golden Triangle Tours</a></li>
          <li className="itemelist"><a className="text-gray" href="./rajasthan-tours-packages.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Rajasthan Tours</a></li>
          <li className="itemelist"><a className="text-gray" href="./south-india-tours.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>South India Tours</a></li>
          <li className="itemelist"><a className="text-gray" href="./same-day-tours.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Same Day Tours</a></li>
          <li className="itemelist"><a className="text-gray" href="./sunrise-tours.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Sunrise Tours</a></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4 col-12 col-sm-6 col-xl-2">
      <div className="useful-links">
        <div className="footerHeading">Quick Links</div>
        <ul className="list list-unstyled">
          <li className="itemelist"><a className="text-gray" href="./faqs.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Faqs</a></li>
          <li className="itemelist"><a className="text-gray" href="./travel-tips.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Travel Tips</a></li>
          <li className="itemelist"><a className="text-gray" href="./privacy-policy.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Privacy Policy</a></li>
          <li className="itemelist"><a className="text-gray" href="./terms_conditions.html"><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/angle-right.svg" alt="arrow" /></span>Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-12 col-12 col-sm-6 col-xl-3">
      <div className="useful-links">
        <div className="footerHeading">Contact Details</div>
        <ul className="list list-unstyled contactSide">
          <li className="text-gray "><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/map.svg" alt="map" /></span> <span className="addres d-inline-block">77 B Sector 8 Dwarka Bagdola Village New Delhi</span></li>
          <li><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/phone.svg" alt="phone" /></span><a className="text-gray" href="https://wa.me/7037828377">  +91-7037828377</a></li>
          <li><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/envelope.svg" alt="mail" /></span><a className="text-gray" href="mailto:dsahu8634@gmail.com">indiaholidaywithdriver@gmail.com</a></li>
          <li><span className="d-inline-block"><img className="w-100 h-100" src="./assets/image/icon/globe.svg" alt="Eirth" /></span><a href="www.indianholidaywithdeiver.com" className="text-gray">www.indianholidaywithdeiver.com</a></li>									
        </ul>
      </div>
    </div> 
    <div className="col-12">
      <div className="logowatsuo">
        <a href="https://wa.me/7037828377"><img className="w-100 h-100" src="./assets/image/icon/whatsap.png" alt="whatsap" /></a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer