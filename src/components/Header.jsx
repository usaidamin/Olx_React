import React from 'react'
import Image from "../images/logo.jpg"
import myMainCss from "../css/header.module.css"
import Icon from "../images/iconArrowDown.svg"
import Plus from "../images/iconPlusSell.svg"
import Banner from "../images/banner.jpg"
const Header = () => {
  return (
    <>
    <div className={myMainCss.logo}>
        <div className={myMainCss.olx}>
            <img src={Image} />
        </div>
            <p className={myMainCss.para}>Motors</p>
            <p className={myMainCss.para}>Property</p>
    </div>
    <section className={myMainCss.navi}>
          <nav className="navbar navbar-expand-md">
            <div className={`${myMainCss.navpic}`}>
                <img src={Image} />
            </div>
            <div className={myMainCss.location}>
                <div className="input-group mb-3">
                    <span className={`${myMainCss.search} input-group-text`} id="basic-addon1"><i className="fa-solid fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Pakistan" aria-label="Pakistan"
                        aria-describedby="basic-addon1" />
                    <span className={`${myMainCss.search} input-group-text`}><img src={Icon} alt="" width="10px"
                            height="10px" /></span>
                </div>
            </div>
            <div className={myMainCss.find}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Find Cars, Mobile Phones and More..."
                        aria-label="Find Cars, Mobile Phones and More..." aria-describedby="basic-addon2" />
                    <span className={`${myMainCss.search1} input-group-text`} id="basic-addon2"><i className="fa-solid fa-search"></i></span>
                </div>
            </div>
            <ul className={myMainCss.link}>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Link</a>
                </li>
            </ul>
            <div className={myMainCss.sell}>
            <p ><img src={Plus} /> Sell</p>
            </div>
          </nav>
        </section>
            <div className={myMainCss.banner}>
                <img src={Banner} />
            </div>
    </>
  )
}

export default Header
