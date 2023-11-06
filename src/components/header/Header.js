import React from 'react'
 import './Header.css'
function Header() {
  return (
    <>
     <nav className="navbar navbar-expand-md navbarspamart d-flex flex-column" aria-label="Fourth navbar example">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="w-100 h-100" src="./assets/image/logo/logo.png" alt="logo" /></a>
    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span className="iconcross"><img className="w-100 h-100" src="./assets/image/icon/XLg.svg" alt="XLg" /></span>
    </button>
    <div className="collapse navbar-collapse navbarlisttop" id="navbarsExample04">
      <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            <div className="row mx-0">
              <div className="col-auto d-flex align-items-center">
                <div className="iconimage"><img className="w-100 h-100" src="./assets/image/icon/bussines.svg" alt="bussines" /></div>
              </div>
              <div className="col">
                <div className="navHeading fw-bold text-black">Spa for Business</div>
                <div className="subHeading fw--noraml">Trusted by 5000 Corporates</div>
              </div>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <div className="row mx-0">
              <div className="col-auto d-flex align-items-center">
                <div className="iconimage"><img className="w-100 h-100" src="./assets/image/icon/bulding.svg" alt="bulding" /></div>
              </div>
              <div className="col">
                <div className="navHeading fw-bold text-black">List your property</div>
                <div className="subHeading fw--noraml">Start earning in 30 mins</div>
              </div>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <div className="row mx-0">
              <div className="col-auto d-flex align-items-center">
                <div className="iconimage"><img className="w-100 h-100" src="./assets/image/icon/phone.svg" alt="phone" /></div>
              </div>
              <div className="col">
                <div className="navHeading fw-bold text-black">0124-6201611</div>
                <div className="subHeading fw--noraml">Call us to Book now</div>
              </div>
            </div>
          </a>
        </li>
        <li className="nav-item d-flex align-items-center">
          <a className="nav-link" href="#">
            <div className="row mx-0">
              <div className="col-auto d-flex align-items-center">
                <div className="iconimage"><img className="w-100 h-100" src="./assets/image/icon/PersonCircle.svg" alt="PersonCircle" /></div>
              </div>
              <div className="col">
                <div className="navHeading fw-bold text-black">Login / Signup</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <button className="btn btn-theme1 px-3 py-2 fw-bold d-flex align-items-center justify-content-center gap-1 text-white border-0">Membership<span className="d-flex align-items-center justify-content-center"><img className="w-100 h-100" src="./assets/image/icon/ArrowRight.svg" alt="ArrowRight" /></span></button>
    </div>
  </div>
  <div className="container-fluid bottomlist">
    <div className="row w-100">
      <div className="col-12">
        <ul className="main-menu d-flex align-items-center justify-content-center mb-0 gap-4">
          <li className="listmenu">Jaipur <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal"><a href>Koramangala</a></li>
              <li className="subList fw-normal"><a href>Mg Road</a></li>
              <li className="subList fw-normal"><a href>Rajaji Nager</a></li>
            </ul>
          </li>
          <li className="listmenu">Gwalior <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Agra <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Delhi <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Indore <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Bangalore <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Chennai <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Gurgaon <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Hyderabad <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu">Kolkata <span className="d-flex align-items-center justify-content-center gap-2"><img className="w-100 h-100" src="./assets/image/icon/ChevronDown.svg" alt="ChevronDown" /></span>
            <ul className="sub-menu">
              <li className="fw-bold align-items-center justify-content-start headinglist">Popular Localities</li>
              <li className="subList fw-normal">Sub-Item 1</li>
              <li className="subList fw-normal">Sub-Item 2</li>
              <li className="subList fw-normal">Sub-Item 3</li>
            </ul>
          </li>
          <li className="listmenu"><a href="./allcities.html">All Cities</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
 
    </>
  )
}

export default Header