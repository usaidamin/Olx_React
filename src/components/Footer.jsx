import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myFooterCss from "../css/footer.module.css"
import OlxApp from "../images/olxMobileApp.jpg"
import AppStore from "../images/iconAppStore.svg"
import GooglePlay from "../images/iconGooglePlay.svg"
import AppGallery from "../images/iconAppGallery.svg"
import Twitter from "../images/iconTwitter.svg"
import Facebook from "../images/iconFacebook.svg"
import Youtube from "../images/iconYoutube.svg"
import Instagram from "../images/iconInstagram.svg"
const Footer = () => {
  return (
    <>
    <Row className={myFooterCss.bottom}>
      <Col>
  <div className={myFooterCss.olximage}>
    <img src={OlxApp} />
  </div>
  </Col>
  <Col>
  <div className={myFooterCss.content}>
    <h1>TRY THE OLX APP</h1>
    <p>Buy, Sell and find just about anything using the app on your mobile</p>
  </div>
  </Col>
  <Col>
  <div className={myFooterCss.store}>
    <h6>GET YOUR APP TODAY</h6>
    <div className={myFooterCss.google}>
      <img src={AppStore} />
      <img src={GooglePlay} />
      <img src={AppGallery} />
    </div>
  </div>
  </Col>
</Row>
<Row className={myFooterCss.list}>
  <Col>
  <div className={myFooterCss.list1}>
    <h6>POPULAR CATEGORIES</h6>
      <p>Cars</p>
      <p>Flat for rent</p>
      <p>Mobile Phones</p>
      <p>Jobs</p>
  </div>
  </Col>
  <Col>
  <div className={myFooterCss.list2}>
    <h6>TRENDING SEARCHES</h6>
      <p>Bikes</p>
      <p>Watches</p>
      <p>Books</p>
      <p>Dogs</p>
  </div>
  </Col>
  <Col>
  <div className={myFooterCss.list3}>
    <h6>ABOUT US</h6>
      <p>About EMPG</p>
      <p>Olx Blog</p>
      <p>Contact US</p>
      <p>Olx for Businesses</p>
  </div>
  </Col>
  <Col>
  <div className={myFooterCss.list4}>
    <h6>OLX</h6>
      <p>Help</p>
      <p>Sitemap</p>
      <p>Terms of Use</p>
      <p>Privacy Policy</p>
  </div>
  </Col>
  <Col>
  <div className={myFooterCss.follow}>
    <h6>FOLLOW US</h6>
    <div className={myFooterCss.social}>
      <img src={Twitter} />
      <img src={Facebook} />
      <img src={Youtube} />
      <img src={Instagram} />
    </div>
    <div className={myFooterCss.google}>
      <img src={AppStore} />
      <img src={GooglePlay} />
      <img src={AppGallery} />
    </div>
  </div>
  </Col>
</Row>
<section className={myFooterCss.footer}>
  <p><strong>Free classNameifields in Pakistan</strong>.@2006-2023 OLX</p>
</section>
    </>
  )
}

export default Footer
