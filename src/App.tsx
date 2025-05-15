import Path from './assets/img/Path 36.png';
import Setting from './assets/img/setting-shape-2.png';
import "./animate.css"
import "./bootstrap.min.css"
import "./magnific-popup.css"
import "./owl.carousel.min.css"
import "./font-awesome.min.css"
import "./iconmoon.css"
import "./hover-min.css"
import "./style.css"
import { Link } from 'react-router';
import Candidate from './assets/img/candidate-img.png';
import { FaArrowRight, FaEnvelope, FaFacebookF, FaLinkedinIn, FaStar, FaYoutube } from 'react-icons/fa6';
import { IoIosArrowUp, IoIosHeartEmpty } from 'react-icons/io';
import Foter from './assets/img/footer-logo.png';
import { BsTwitterX } from 'react-icons/bs';
import { CiGlobe } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { TfiCup, TfiTarget } from 'react-icons/tfi';
import { GiTreehouse } from 'react-icons/gi';
import Logo from './assets/img/logo.png'; 


function App() {

  return (
    <>
      <div className="header-style-01">
        <nav className="navbar navbar-area style-01 style-04 navbar-expand-lg nav-style-02">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <div className="logo-wrapper">
                <a href="index.html" className="logo">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bizcoxx_main_menu"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
              <ul className="navbar-nav political">
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">.</a>
                </li>

              </ul>
            </div>
            <div className="nav-right-content style-01">
              <div className="btn-wrapper">
                <Link to="/instagram" className="boxed-btn political-btn">Vote now <i className="icon-paper-plan"></i></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="header-area style-02 style-04 header-sanatory header-bg-02">
        <div className="container nav-container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="header-inner style-02 political text-center">
                <div className="subtitle">
                  <img src={Path} className="title-shape" alt="Path" />
                  "Aspiring Leader"
                </div>
                <h1 className="title style-02"> Contestant
                  Ambassador Program</h1>
                <div className="btn-wrapper desktop-center">
                  <Link to="/instagram" className="boxed-btn btn-sanatory style-01 text-uppercase"><i className="fas fa-arrow-right"></i> Vote Now </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="campaign-section-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="campaign-single-items-02 style-02 wow animate__animated animate__fadeInLeft">
                <div className="icon">
                  <i className="icon-human-right"></i>
                </div>
                <div className="content">
                  <div className="title-wrapper">
                    <div className="title">
                      <h5>Human Rights</h5>
                    </div>
                    <div className="line">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot style-02"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <p>
                    Every pleasures is to welcomed pain avoided owing to the duty
                    the obligations of business
                  </p>
                </div>
                <img src={Setting} className="shape" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="campaign-single-items-02 style-02 wow animate__animated animate__fadeInRight">
                <div className="icon">
                  <i className="icon-women-leader"></i>
                </div>
                <div className="content">
                  <div className="title-wrapper">
                    <div className="title">
                      <h5>Women Leaders</h5>
                    </div>
                    <div className="line">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot style-02"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <p>
                    Every pleasures is to welcomed pain avoided owing to the duty
                    the obligations of business
                  </p>
                </div>
                <img src={Setting} className="shape" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-party-section-area style-02" >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="party-single-thumb wow animate__animated animate__fadeInLeft">
                <img src={Candidate} alt="candidate" />

              </div>
            </div>
            <div className="col-lg-6">
              <div className="party-single-item vision">
                <div className="content">
                  <div className="subtitle wow animate__animated animate__fadeInUp">
                    <p>Little About Me</p>
                    <div className="icon text-black flex items-start gap-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <h4 className="title wow animate__animated animate__fadeInUp">Ideological Leader For
                    Next Generation</h4>
                  <p className="description wow animate__animated animate__fadeInUp">
                    How all this mistaken idea of denouncing pleasure and praising pain was born & we will give you a complete account of the system expound the actual teaching the great explorer.
                  </p>
                  <div className="feedback wow animate__animated animate__fadeInUp">
                    <span>99.8%</span>
                    <p>Positive Feedback From Peoples</p>
                  </div>
                </div>
                <div className="  btn-wrapper margin-top-35  wow animate__animated animate__fadeInUp">
                  <Link to="/instagram" className="boxed-btn btn-sanatory style-02"><FaArrowRight className='inline-block' /> Know More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="header-bottom-area margin-top-120">
        <div className="container">
          <div className="political-header-bottom m-top-02">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="our-vision-item wow animate__animated animate__fadeInLeft">
                  <div className="vision-bg">
                    <div className="content">
                      <div className="subtitle">
                        <p>Our Party Visions</p>
                        <div className="icon flex items-start gap-2 text-white">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <h4 className="title">Together We Are Stronger</h4>
                      <div className="btn-wrapper">
                        <Link to="/instagram" className="boxed-btn btn-sanatory style-01 reverse"><FaArrowRight className='inline-block' />View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="vision-single-item-wrapper">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item style-03  wow animate__animated animate__fadeInUp">
                        <div className="icon">
                          <TfiCup />
                        </div>
                        <div className="content">
                          <h4 className="title">We Will Win The Elections</h4>
                          <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item style-01 style-03 wow animate__animated animate__fadeInRight">
                        <div className="icon">
                          <IoIosHeartEmpty />
                        </div>
                        <div className="content">
                          <h4 className="title">We Care About Causes</h4>
                          <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item style-02 style-03 wow animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="icon">
                          <GiTreehouse />
                        </div>
                        <div className="content">
                          <h4 className="title">Our Party Is Growing</h4>
                          <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item style-03 wow animate__animated animate__fadeInRight animate__delay-1s">
                        <div className="icon">
                          <TfiTarget />
                        </div>
                        <div className="content">
                          <h4 className="title">Get Involved</h4>
                          <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="accoridion-section bg-white style-02 text-black">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-title">
                <div className="subtitle wow animate__animated animate__fadeInUp">
                  <div className="icon flex items-center ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>Political FAQ</p>
                  <div className="icon flex items-center ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <h2 className="title wow animate__animated animate__fadeInUp">Inspiration, innovation and countless opportunities</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion-wrapper">
                <div id="accordion">
                  <div className="card wow animate__animated animate__fadeInUp">
                    <div className="card-header" id="headingOwo">
                      <h5 className="mb-0">
                        <a className="collapsed" role="button" data-toggle="collapse" data-target="#collapseOwo" aria-expanded="true" aria-controls="collapseOwo">
                          Senatory Vision?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseOwo" className="collapse show" data-parent="#accordion">
                      <div className="card-body text-black">
                        Every pleasures is to welcomed pain avoided owing to the duty the Every pleasures is to welcomed pain avoided owing to the duty the  obligations of business.Every pleasures is to welcomed pain avoided owing  to the duty the obligations of business.
                      </div>
                    </div>
                  </div>
                  <div className="card wow animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <a className="collapsed" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOwo">
                          Senatory Mission?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                      <div className="card-body text-black">
                        Every pleasures is to welcomed pain avoided owing to the duty the Every pleasures is to welcomed pain avoided owing to the duty the  obligations of business.Every pleasures is to welcomed pain avoided owing  to the duty the obligations of business.
                      </div>
                    </div>
                  </div>
                  <div className="card wow animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <a className="collapsed" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseOwo">
                          Senatory Future Plan?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                      <div className="card-body text-black">
                        Every pleasures is to welcomed pain avoided owing to the duty the Every pleasures is to welcomed pain avoided owing to the duty the  obligations of business.Every pleasures is to welcomed pain avoided owing  to the duty the obligations of business.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-area" style={{ backgroundImage: 'url(src/assets/img/footer-bg-02.png)', marginTop: '100px' }}>
        <div className="footer-top home-three">
          <div className="container">
            <div className="footer-top-border home-three">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget widget">
                    <div className="about_us_widget wow animate__animated animate__fadeInUp">
                      <Link to="/" className="footer-logo">
                        <img src={Foter} alt="footer logo" /></Link>

                      <div className="social-links flex items-center gap-2 text-xl">
                        <Link to="/instagram"><FaFacebookF /></Link>
                        <Link to="/instagram"><BsTwitterX /></Link>
                        <Link to="/instagram"><FaLinkedinIn /></Link>
                        <Link to="/instagram"><FaYoutube /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget widget widget_nav_menu wow animate__animated animate__fadeInUp">
                    <h4 className="widget-title">
                      Explore
                      <span className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    </h4>
                    <ul className="contact_info_list style-01 margin-bottom-50">
                      <li className="single-info-item">
                        <div className="icon style-01">
                          <CiGlobe />
                        </div>
                        <div className="details style-02">
                          66 Broklyn Street 30 Road. New York United States
                        </div>
                      </li>
                      <li className="single-info-item">
                        <div className="icon">
                          <FaEnvelope />
                        </div>
                        <div className="details">
                          <Link to="/instagram" className="__cf_email__" data-cfemail="3c55525a537c4553494e515d5550125f5351">[email&#160;protected]</Link>
                        </div>
                      </li>
                      <li className="single-info-item">
                        <div className="icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="details">
                          009-215-5599
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-widget widget widget_nav_menu wow animate__animated animate__fadeInUp">
                    <h4 className="widget-title">
                      Useful Links
                      <span className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    </h4>
                    <ul>
                      <li><a href="#">Coming Soon</a></li>

                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-widget widget widget_nav_menu wow animate__animated animate__fadeInUp">
                    <h4 className="widget-title">
                      Quick Links
                      <span className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    </h4>
                    <ul>
                      <li><a href="#">Coming Soon</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="copyright-area-inner">
                      Copyright © 2022 Senatory. All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer >

      <div className="back-to-top flex items-center justify-center">
        <span className="back-top flex items-center justify-center"><IoIosArrowUp /></span>
      </div>
    </>
  )
}

export default App
