import React, {Component} from 'react';

import mac from '../../images/home/mac-laptop.jpg';
import watch from '../../images/icons/watch-series5-logo.png';
import applecard from '../../images/icons/apple-card-logo.png';
import appleTv from '../../images/icons/apple-tv-logo.png';
import servantLogo from '../../images/icons/servant-logo.png';
import newIpad from '../../images/icons/new-ipad-logo.png';

//import Fourth from './Fourth/Fourth';
import Rating from '../Rating/Rating';
import Youtube from '../Youtube/Youtube';

 
class Main extends Component{
    render () {
        return (
            <div>
                <section className="main-highlight-wrapper">
                    <div className="container"> 
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-12">
                                <div className="model">
                                        16-inch model
                                </div>

                                <div className="product-title">
                                        MacBook Pro
                                </div>

                                <div className="brief-description">
                                        The best for the brightest.
                                </div>

                                <div className="links-wrapper">
                                    <ul>
                                            <li><a href="">Learn more</a></li>
                                            <li><a href="">Buy</a></li>
                                    </ul> 
                                </div>

                                <div className="main-image-wrapper">
                                        <img src={mac}/>
                                </div>
                            </div>				
                        </div>
 
                        <Rating /> 

                    </div>
                </section>

                <section className="second-hightlight-wrapper">
                    <div className="container">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-12">
                            <div className="title-wrapper">
                                iphone 11 Pro
                            </div>

                            <div className="description-wrapper">
                                Pro Cameras.Pro display.Pro performance.
                            </div>

                            <div className="pirce-wrapper">
                                From $24.95/mo.or $599 with trade-in.
                            </div>

                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">learn more</a></li>
                                        <li><a href="">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="third-highlight-wrapper">
                    <div className="container">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-12">
                            <div className="title-wrapper">
                                    iPhone 11
                                </div>
                            <div className="discription-wrapper">
                                    just the right amount of everything.
                                </div>
                                <div className="price-wrapper">
                                    From $16.62/mo.or $399 with trade-in.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Learn more</a></li>
                                        <li><a href="">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fourth-highlight-wrapper">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
                            <div className="left-side-inner-wrapper">
                            <div className="top-logo-wrapper">
                                <div className="logo-wrapper">
                                    <img src={watch}/>
                                </div>
                            </div>
                            <div className="description-wrapper">
                                    with the new Always-On Retina display.<br></br>
                                    you've never seen a wath like this.
                            </div>
                            <div className="links-wrapper">
                                <ul>
                                    <li> <a href=""> Learn More</a></li>
                                    <li> <a href=""> Buy</a> </li>
                                </ul>
                            </div> 
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
                        <div className="right-side-inner-wrapper">
                            <div className="top-logo-wrapper">
                                <div className="logo-wrapper">
                                    <img src={applecard}/>
                                </div>
                            </div>
                        <div className="description-wrapper">
                                Get 3% Daily Cash on Purchases From apple Using apple Card.
                            </div>
                            <div className="links-wrapper">
                                <ul>
                                    <li> <a href="">Learn More</a></li>
                                    <li> <a href="">Buy</a></li>
                                </ul>
                           </div>
                       </div>
                   </div>
                </div>
                </section>

                <section className="fifth-highlight-wrapper">
                    <div className="row"> 
                        <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
                        <div className="left-side-inner-wrapper">
                            <div className="top-logo-wrapper">
                                <div className="logo-wrapper">
                                    <img src={appleTv}/>
                                </div>
                            </div>

                            <div className="tvshow-logo-wrapper">
                                    <img src={servantLogo}/>
                            </div>
                                <div className="watch-more-wrapper">
                                    <a href="#">watch the trailer</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
                        <div className="right-side-inner-wrapper">
                            <div className="top-logo-wrapper">
                                <div className="logo-wrapper">
                                    AirPods Pro
                                </div>
                            </div>

                            <div className="description-wrapper">
                                    Magic like you've never hear.
                            </div>

                            <div className="links-wrapper">
                                <ul>
                                    <li> <a href="">Learn More </a></li>
                                    <li> <a href="">Buy</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sixth-highlight-wrapper">
                    <div className="row">
                        <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
                        <div className="left-side-inner-wrapper">
                            <div className="model">
                                16-inch model
                            </div>

                            <div className="product-title-small">
                                MacBook pro
                            </div>

                            <div className="description-wrapper">
                                The best for the brightest.
                            </div>

                            <div className="links-wrapper">
                                <ul>
                                    <li><a href="">Learn More </a></li>
                                    <li><a href="">Buy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper"> 
                        <div className="right-side-inner-wrapper">
                            <div className="top-logo-wrapper">
                            <div className="logo-wrapper">
                                <img src={newIpad}/>
                            </div>
                            </div>

                            <div className="description-wrapper">
                                Like a computer.Unlike any computer.
                            </div>

                            <div className="links-wrapper">
                                <ul>
                                    <li><a href="">Learn more</a></li>
                                    <li><a href="">Buy</a></li>
                                </ul>
                            </div>
                        </div>
                     </div> 
                 </div>
              </section>
               <section className="youtubeVideosWrapper">

                <Youtube />

               </section>

          </div>

        )
    }
}

export default Main;