import React, { Component } from 'react';

class MainComponent extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="section1">
                        <div className="container">
                            <div className="wrap">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
                                            <li className="slide slide3">
                                                <div className="title">
                                                    <h3>We support Everything You need in Sports</h3>
                                                    <h2>Timely Appropriate<br/> SOLUTIONS</h2>
                                                    <p><a href="#">LOOK MORE</a></p>
                                                </div>
                                            </li>
                                            <li className="slide slide1">
                                                <div className="title">
                                                    <h3>We are an Agency that design the Future</h3>
                                                    <h2>HIGHLY CREATIVE<br/> VISIONS</h2>
                                                    <p><a href="#">LOOK MORE</a></p>
                                                </div>
                                            </li>
                                            <li className="slide slide2">
                                                <div className="title">
                                                    <h3>We help to overcome the limitations</h3>
                                                    <h2>Go Beyond your <br/>LIMITS</h2>
                                                    <p><a href="#">LOOK MORE</a></p>
                                                </div>
                                            </li>
                                            <li className="slide slide3">
                                                <div className="title">
                                                    <h3>We support Everything You need in Sports</h3>
                                                    <h2>Timely Appropriate<br/> SOLUTIONS</h2>
                                                    <p><a href="#">LOOK MORE</a></p>
                                                </div>
                                            </li>
                                            <li className="slide slide1">
                                                <div className="title">
                                                    <h3>We are an Agency that design the Future</h3>
                                                    <h2>HIGHLY CREATIVE<br/> VISIONS</h2>
                                                    <p><a href="#">LOOK MORE</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <ul className="page-wrap">
                                        <li><a href="#" className="page-btn blind currentPage">페이지버튼1</a></li>
                                        <li><a href="#" className="page-btn blind">페이지버튼2</a></li>
                                        <li><a href="#" className="page-btn blind">페이지버튼3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section2">
                        <div className="container">
                            <div className="wrap">
                                <div className="title">
                                    <h2>ABOUT SPORTS AGENCY</h2>
                                    <p>We always root for our <strong>athelets</strong> and respect their <strong>passion.</strong><br/>
                                    We deliver 100% and provide instant response to help them succeed in<br/>
                                    constantly <strong>changing</strong> and <strong>challenging sports world</strong>.</p>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li className="col col1">
                                            <div className="gap">
                                                <div className="img-box">
                                                    <img src={process.env.PUBLIC_URL+"/img/man-g87f164b21_1920.jpg"} alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <div>
                                                        <h3>Understand the situation</h3>
                                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                                        <span><a href="#">EXPLORE SERVICES<i className="material-icons">arrow_forward</i></a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col col2">
                                            <div className="gap">
                                                <div className="img-box">
                                                    <img src={process.env.PUBLIC_URL+"/img/soccer-g77622786b_1920.jpg"} alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <div>
                                                        <h3>Bring the experience to Sports</h3>
                                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                                        <span><a href="#">EXPLORE SERVICES<i className="material-icons">arrow_forward</i></a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col col3">
                                            <div className="gap">
                                                <div className="img-box">
                                                    <img src={process.env.PUBLIC_URL+"/img/paddle-tennis-g85c96a72e_1920.jpg"} alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <div>
                                                        <h3>Make Strategise for Capability</h3>
                                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                                        <span><a href="#">EXPLORE SERVICES<i className="material-icons">arrow_forward</i></a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section3">
                        <div className="container">
                            <div className="wrap">
                                <div className="title">
                                    <h2>WHY CHOOSE US?</h2>
                                    <h3>We are ready to give Everything for you</h3>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li className="col col1">
                                            <div className="gap">
                                                <div className="text-box">
                                                    <div className="text-gap">
                                                        <span><i className="fa fa-edit"></i></span>
                                                        <h3>Unique Strategies</h3>
                                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col col2">
                                            <div className="gap">
                                                <div className="text-box">
                                                    <div className="text-gap">
                                                        <span><i className="fa fa-signing"></i></span>
                                                        <h3>Promote Motivation</h3>
                                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col col3">
                                            <div className="gap">
                                                <div className="text-box">
                                                    <div className="text-gap">
                                                        <span><i className="fa fa-group"></i></span>
                                                        <h3>Huge Support</h3>
                                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col col4">
                                            <div className="gap">
                                                <div className="text-box">
                                                    <div className="text-gap">
                                                        <span><i className="fa fa-flag"></i></span>
                                                        <h3>Different Objects</h3>
                                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section4">
                        <div className="container">
                            <div className="wrap">
                                <div className="menu title">
                                    <div className="menu-container">
                                        <ul>
                                            <li><a href="#" className="gallary-btn">ALL</a></li>
                                            <li><a href="#" className="gallary-btn">BROCHURE</a></li>
                                            <li><a href="#" className="gallary-btn">BRANDING</a></li>
                                            <li><a href="#" className="gallary-btn">IDENTITY</a></li>
                                            <li><a href="#" className="gallary-btn">WEB</a></li>
                                            <li><a href="#" className="gallary-btn">PHOTOGRAPHY</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="gallery-contents">
                                    <ul className="gallery">
                                        <li className="gallery-item row1-col row1-col1">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4_07.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>Be the best in the field</strong>
                                                        <em>FIND OUT IDENTITY</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="gallery-item row1-col row1-col2">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4_05.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>Make an impact on this world</strong>
                                                        <em>WAY MUCH BETTER</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="gallery-item row1-col row1-col3">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4_01.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>We all struggle so keep fighting</strong>
                                                        <em>PASSION FOR VICTORY</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="gallery-item row1-col row1-col4">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4_09.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>Do something great with your life.</strong>
                                                        <em>FIND OUT IDENTITY</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="gallery-item row2-col row2-col1">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4_06.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>Nothing is difficult</strong>
                                                        <em>KEEP GOING</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="gallery-item row2-col row2-col2">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>Can you feel the Heat?</strong>
                                                        <em>STRUGGLE TO THE FUTURE</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="gallery-item row2-col row2-col3">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4_08.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>Keep going and you will succeed</strong>
                                                        <em>EFFORTS NEVER LIE</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="gallery-item row2-col row2-col4">
                                            <div className="gap">
                                                <img src={process.env.PUBLIC_URL+"/img/sec4_03.jpg"} alt=""/>
                                                <a href="#">
                                                    <span>
                                                        <i></i>
                                                        <strong>Be consistent, the way to succeed</strong>
                                                        <em>BE CONFIDENT</em>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section5">
                        <div className="container">
                            <div className="wrap">
                                <div className="title hide">
                                    <h2>svg animation</h2>
                                </div>
                                <div className="content">
                                        <ul className="svg-box">
                                            <li>
                                                <div>
                                                    <div className="svg-wrap">
                                                        <svg width="150" height="150" className="circle circle1">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#555" fill="transparent"/>
                                                        </svg>
                                                        <svg width="150" height="150" className="bg bg1">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#ddd" fill="transparent"/>
                                                        </svg>
                                                        <span className="number">90%</span>
                                                    </div>
                                                    <h3>TEAM SUPPORT</h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="svg-wrap">
                                                        <svg width="150" height="150" className="circle circle2">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#555" fill="transparent"/>
                                                        </svg>
                                                        <svg width="150" height="150" className="bg bg2">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#ddd" fill="transparent"/>
                                                        </svg>
                                                        <span className="number">75%</span>
                                                    </div>
                                                    <h3>ASSISTANCE</h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="svg-wrap">
                                                        <svg width="150" height="150" className="circle circle3">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#555" fill="transparent"/>
                                                        </svg>
                                                        <svg width="150" height="150" className="bg bg3">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#ddd" fill="transparent"/>
                                                        </svg>
                                                        <span className="number">85%</span>
                                                    </div>
                                                    <h3>BRANDING</h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="svg-wrap">
                                                        <svg width="150" height="150" className="circle circle4">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#555" fill="transparent"/>
                                                        </svg>
                                                        <svg width="150" height="150" className="bg bg4">
                                                            <circle cx="75" cy="75" r="73.5" stroke-width="3" stroke="#ddd" fill="transparent"/>
                                                        </svg>
                                                        <span className="number">93%</span>
                                                    </div>
                                                    <h3>VISION</h3>
                                                </div>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section6">
                        <div className="container">
                            <div className="wrap">
                                <div className="content">
                                    <ul className="img-box">
                                        <li>
                                            <div className="gap">
                                                <div className="img-contents">
                                                    <div className="img-title">
                                                        <ul>
                                                            <li><h2>Sports Center</h2></li>
                                                            <li><i></i></li>
                                                            <li><h3>A Rich Heritage<br/>& Sports History</h3></li>
                                                            <li><a href="#">VIEW SPORTS CASE</a></li>
                                                        </ul>
                                                    </div>
                                                    <img src={process.env.PUBLIC_URL+"/img/case-study-01.jpg.webp"} alt=""/>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="img-contents">
                                                    <div className="img-title">
                                                        <ul>
                                                            <li><h2>Support Program</h2></li>
                                                            <li><i></i></li>
                                                            <li><h3>Global Partners<br/>Increases Support</h3></li>
                                                            <li><a href="#">VIEW SPORTS CASE</a></li>
                                                        </ul>
                                                    </div>
                                                    <img src={process.env.PUBLIC_URL+"/img/case-study-02.jpg.webp"} alt=""/>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="img-contents">
                                                    <div className="img-title">
                                                        <ul>
                                                            <li><h2>Development Center</h2></li>
                                                            <li><i></i></li>
                                                            <li><h3>Improves Skills<br/>Efficiency with us</h3></li>
                                                            <li><a href="#">VIEW SPORTS CASE</a></li>
                                                        </ul>
                                                    </div>
                                                    <img src={process.env.PUBLIC_URL+"/img/case-study-03.jpg.webp"} alt=""/>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section7">
                        <div className="container">
                            <div className="wrap">
                                <div className="title">
                                    <h2>OUR DEVOTED COACHES</h2>
                                    <h3>Teamwork builds trust<br/> and the trust build growth</h3>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>
                                            <div className="gap">
                                                <div className="sec7-contents">
                                                    <div className="col-wrap">
                                                        <img src={process.env.PUBLIC_URL+"/img/ambassador.jpg"} alt="coach1"/>
                                                        <div className="img-caption">
                                                            <ul>
                                                                <li>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p>
                                                                </li>
                                                                <li><i></i></li>
                                                                <li>
                                                                    <span><a href="#"><i className="fa fa-facebook"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-twitter"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-google-plus"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-instagram"></i></a></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="name-title">
                                                        <h2>HERMAN MILLER</h2>
                                                        <h3>HEAD COACH</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="sec7-contents">
                                                    <div className="col-wrap">
                                                        <img src={process.env.PUBLIC_URL+"/img/man-g0f98.jpg"} alt="coach2"/>
                                                        <div className="img-caption">
                                                            <ul>
                                                                <li>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p>
                                                                </li>
                                                                <li><i></i></li>
                                                                <li>
                                                                    <span><a href="#"><i className="fa fa-facebook"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-twitter"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-google-plus"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-instagram"></i></a></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="name-title">
                                                        <h2>BILL GARDNER</h2>
                                                        <h3>ASSISTANT COACH</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="sec7-contents">
                                                    <div className="col-wrap">
                                                        <img src={process.env.PUBLIC_URL+"/img/sports-ge9dc7eee2.jpg"} alt="coach3"/>
                                                        <div className="img-caption">
                                                            <ul>
                                                                <li>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p>
                                                                </li>
                                                                <li><i></i></li>
                                                                <li>
                                                                    <span><a href="#"><i className="fa fa-facebook"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-twitter"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-google-plus"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-instagram"></i></a></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="name-title">
                                                        <h2>JEREMY DUPONT</h2>
                                                        <h3>STRATEGY COACH</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="sec7-contents">
                                                    <div className="col-wrap">
                                                        <img src={process.env.PUBLIC_URL+"/img/doctor.jpg"} alt="doctor"/>
                                                        <div className="img-caption">
                                                            <ul>
                                                                <li>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p>
                                                                </li>
                                                                <li><i></i></li>
                                                                <li>
                                                                    <span><a href="#"><i className="fa fa-facebook"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-twitter"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-google-plus"></i></a></span>
                                                                    <span><a href="#"><i className="fa fa-instagram"></i></a></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="name-title">
                                                        <h2>SARA SMITH</h2>
                                                        <h3>TEAM DOCTOR</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section8">
                        <div className="container">
                            <div className="wrap">
                                <div className="content">
                                    <ul>
                                        <li>
                                            <div className="bg-img"></div>
                                        </li>
                                        <li>
                                            <div className="text-box">
                                                <div className="gap">
                                                    <div className="text">
                                                        <h2>We create premium strategies and technology.</h2>
                                                        <h3>Our Sports Agency crafting beautiful experiences.</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry.</p>
                                                        <span><a href="#">Start Your Challenge</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section9">
                        <div className="container">
                            <div className="wrap">
                                <div className="title">
                                    <h2>LATEST NOTICES</h2>
                                    <h3>Do what you want,<br/>Don't put much pressure on yourself</h3>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>
                                            <div className="gap">
                                                <div className="col-box">
                                                    <div className="img-box">
                                                        <img src={process.env.PUBLIC_URL+"/img/person-g171062.jpg"} alt=""/>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="top">
                                                            <h4>
                                                                <span>5 APRIL 2016</span>
                                                                <span><i></i></span>
                                                                <span>BY <a href="#">JAY BENJAMIN</a></span>
                                                            </h4>
                                                            <h5><a href="#">I like challenges. I like to challenge everything to do with the body.</a></h5>
                                                        </div>
                                                        <div className="bottom">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="col-box">
                                                    <div className="img-box">
                                                        <img src={process.env.PUBLIC_URL+"/img/cross-country-skiing.jpg"} alt=""/>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="top">
                                                            <h4>
                                                                <span>20 APRIL 2016</span>
                                                                <span><i></i></span>
                                                                <span>BY <a href="#">JAY BENJAMIN</a></span>
                                                            </h4>
                                                            <h5><a href="#">Results come and go. Passion is an answer, not a gift.</a></h5>
                                                        </div>
                                                        <div className="bottom">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="col-box">
                                                    <div className="img-box">
                                                        <img src={process.env.PUBLIC_URL+"/img/tennis-g90.jpg"} alt=""/>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="top">
                                                            <h4>
                                                                <span>15 MARCH 2016</span>
                                                                <span><i></i></span>
                                                                <span>BY <a href="#">JAY BENJAMIN</a></span>
                                                            </h4>
                                                            <h5><a href="#">Recognizing the need is the primary condition for sports.</a></h5>
                                                        </div>
                                                        <div className="bottom">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="gap">
                                                <div className="col-box">
                                                    <div className="img-box">
                                                        <img src={process.env.PUBLIC_URL+"/img/baseball-g4befe.jpg"} alt=""/>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="top">
                                                            <h4>
                                                                <span>10 MARCH 2016</span>
                                                                <span><i></i></span>
                                                                <span>BY <a href="#">JAY BENJAMIN</a></span>
                                                            </h4>
                                                            <h5><a href="#">Get in over your head as often and as joyfully as possible.</a></h5>
                                                        </div>
                                                        <div className="bottom">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section10">
                        <div className="container">
                            <div className="wrap">
                                <div className="title">
                                    <h2>FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!</h2>
                                    <h3>READY TO FILL OUT THE FORMS?</h3>
                                </div>
                                <div className="content">
                                    <form name="formMail" id="formMail" method="post" action="./response.php">
                                        <ul>
                                            <li>
                                                <div>
                                                    <label for="name">YOUR NAME</label>
                                                    <input type="text" id="name" name="name" value="" placeholder="* YOUR NAME"/>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label for="mail">YOUR E-MAIL</label>
                                                    <input type="text" id="mail" name="mail" value="" placeholder="* YOUR E-MAIL"/>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <button type="submit" className="submit-btn">SEND TO US</button>
                                                    <button type="button" className="list-btn">MEMBER LIST</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </form>
                                    <div className="list-box">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>NO.</th>
                                                    <th>NAME</th>
                                                    <th>E-MAIL</th>
                                                </tr>    
                                            </thead>
                                            <tbody>
                                            {/* <!-- 목록 --> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default MainComponent;