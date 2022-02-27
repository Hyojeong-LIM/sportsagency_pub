import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header id="header" className="">
                    <div className="container">
                    <div className="wrap">
                        <div className="logo">
                            <a href="#"><img src={process.env.PUBLIC_URL+"/img/logo.png.webp"} alt="logo"/></a>
                        </div>
                        <div className="navigation">
                            <nav id="nav">
                                    <ul>
                                    <li>
                                        <a href="#" className="main-btn">HOME</a>
                                        <div className="sub sub1">
                                                <div className="sub-wrap">
                                                    <ul>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">CLASSIC HOMEPAGES</a></dt>
                                                                <dd><a href="#">Classic Corporate</a></dd>
                                                                <dd><a href="#">Classic Digital Agency</a></dd>
                                                                <dd><a href="#">Classic Innovation Agency</a></dd>
                                                                <dd><a href="#">Classic Web Agency</a></dd>
                                                                <dd><a href="#">Classic One Page</a></dd>
                                                                <dd><a href="#">Classic Start Up</a></dd>
                                                                <dd><a href="#">Classic Interactive Agency</a></dd>
                                                                <dd><a href="#">Classic Business<i className="new-deco">New</i></a></dd>
                                                                <dd><a href="#">Classic Shop</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">CREATIVE HOMEPAGES</a></dt>
                                                                <dd><a href="#">Creative Studio</a></dd>
                                                                <dd><a href="#">Creative Business</a></dd>
                                                                <dd><a href="#">Creative Simple Portfolio</a></dd>
                                                                <dd><a href="#">Creative Branding Agency</a></dd>
                                                                <dd><a href="#">Creative Minimalist Portfolio<i className="new-deco">New</i></a></dd>
                                                                <dd><a href="#">Creative Small Business</a></dd>
                                                                <dd><a href="#">Creative Designer</a></dd>
                                                                <dd><a href="#">Creative Agency</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">PORTFOLIO HOMEPAGES</a></dt>
                                                                <dd><a href="#">Portfolio Minimal</a></dd>
                                                                <dd><a href="#">Portfolio Multiple Carousel</a></dd>
                                                                <dd><a href="#">Portfolio Centered Slides</a></dd>
                                                                <dd><a href="#">Portfolio Personal</a></dd>
                                                                <dd><a href="#">Portfolio Metro</a></dd>
                                                                <dd><a href="#">Portfolio Full Screen - Vertical</a></dd>
                                                                <dd><a href="#">Portfolio Photographer</a></dd>
                                                                <dd><a href="#">Portfolio Parallax</a></dd>
                                                            </dl>
                                                        </li>
                                                        <li>
                                                            <dl>
                                                                <dt><a href="#">BLOG HOMEPAGES</a></dt>
                                                                <dd><a href="#">Blog Grid</a></dd>
                                                                <dd><a href="#">Blog Masonry</a></dd>
                                                                <dd><a href="#">Blog Clean</a></dd>
                                                                <dd><a href="#">Blog Personal</a></dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="main-btn">PAGES</a>
                                        <div className="sub sub24 sub2">
                                            <div className="sub-wrap">
                                                    <ul>
                                                        <li>
                                                            <a href="#" className="sub-btn">About <i className="icon-arrow fa fa-angle-right"></i></a>
                                                            <div className="sub-sub sub2-1">
                                                                <div className="sub-sub-wrap">
                                                                        <ul>
                                                                            <li><a href="#">About Us Simple</a></li>
                                                                            <li><a href="#">About Us Classic</a></li>
                                                                            <li><a href="#">About Us Modern</a></li>
                                                                            <li><a href="#">About Me</a></li>
                                                                        </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sub-btn">Services <i className="icon-arrow fa fa-angle-right"></i></a>
                                                            <div className="sub-sub sub2-2">
                                                                <div className="sub-sub-wrap">
                                                                        <ul>
                                                                            <li><a href="#">Services Simple</a></li>
                                                                            <li><a href="#">Services Classic</a></li>
                                                                            <li><a href="#">Services Modern</a></li>
                                                                        </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sub-btn">Contact <i className="icon-arrow fa fa-angle-right"></i></a>
                                                            <div className="sub-sub sub2-3">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Contact Simple</a></li>
                                                                            <li><a href="#">Contact Classic</a></li>
                                                                            <li><a href="#">Contact Classic - Style 02</a></li>
                                                                            <li><a href="#">Contact Modern</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sub-btn">Team <i className="icon-arrow fa fa-angle-right"></i></a>
                                                            <div className="sub-sub sub2-4">
                                                                <div className="sub-sub-wrap">
                                                                        <ul>
                                                                            <li><a href="#">Team Simple</a></li>
                                                                            <li><a href="#">Team Classic</a></li>
                                                                        </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sub-btn">Addition Pages <i className="icon-arrow fa fa-angle-right"></i></a>
                                                            <div className="sub-sub sub2-5">
                                                                <div className="sub-sub-wrap">
                                                                        <ul>
                                                                            <li><a href="#">Our Clients</a></li>
                                                                            <li><a href="#">Error 404</a></li>
                                                                            <li><a href="#">Coming Soon</a></li>
                                                                            <li><a href="#">Coming Soon - Style 02</a></li>
                                                                            <li><a href="#">Faq</a></li>
                                                                            <li><a href="#">Maintenance</a></li>
                                                                            <li><a href="#">Search Result</a></li>
                                                                            <li><a href="#">Pricing</a></li>
                                                                        </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="main-btn">PORTFOLIO</a>
                                        <div className="sub sub3">
                                            <div className="sub-wrap">
                                                <ul>
                                                    <li>
                                                        <dl>
                                                                <dt><a href="#">GRID - FULL WIDTH LAYOUTS</a></dt>
                                                                <dd><a href="#">Portfolio Grid Overlay</a></dd>
                                                                <dd><a href="#">Portfolio Grid With Icon</a></dd>
                                                                <dd><a href="#">Portfolio Grid Transform</a></dd>
                                                                <dd><a href="#">Portfolio Grid Zooming</a></dd>

                                                                <dt><a href="#">MASONRY - FULL WIDTH LAYOUTS</a></dt>
                                                                <dd><a href="#">Portfolio Masonry Overlay</a></dd>
                                                                <dd><a href="#">Portfolio Masonry With Icon</a></dd>

                                                                <dt><a href="#">METRO - FULL WIDTH LAYOUTS</a></dt>
                                                                <dd><a href="#">Portfolio Metro Overlay</a></dd>
                                                                <dd><a href="#">Portfolio Metro With Icon</a></dd>
                                                                <dd><a href="#">Portfolio Metro Transform</a></dd>
                                                                <dd><a href="#">Portfolio Metro Zooming</a></dd>

                                                                <dt><a href="#">OTHER - FULL WIDTH LAYOUTS</a></dt>
                                                                <dd><a href="#">Portfolio Image Gallery</a></dd>
                                                                <dd><a href="#">Portfolio Justified</a></dd>
                                                                <dd><a href="#">Portfolio Carousel</a></dd>
                                                                <dd><a href="#">Portfolio Parallax</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                            <dt><a href="#">GRID – BOXED LAYOUTS</a></dt>
                                                            <dd><a href="#">Portfolio Grid Overlay</a></dd>
                                                            <dd><a href="#">Portfolio Grid With Icon</a></dd>
                                                            <dd><a href="#">Portfolio Grid Transform</a></dd>
                                                            <dd><a href="#">Portfolio Grid Zooming</a></dd>

                                                            <dt><a href="#">MASONRY – BOXED LAYOUTS</a></dt>
                                                            <dd><a href="#">Portfolio Masonry Overlay</a></dd>
                                                            <dd><a href="#">Portfolio Masonry With Icon</a></dd>

                                                            <dt><a href="#">METRO – BOXED LAYOUTS</a></dt>
                                                            <dd><a href="#">Portfolio Metro Overlay</a></dd>
                                                            <dd><a href="#">Portfolio Metro With Icon</a></dd>
                                                            <dd><a href="#">Portfolio Metro Transform</a></dd>
                                                            <dd><a href="#">Portfolio Metro Zooming</a></dd>

                                                            <dt><a href="#">OTHER – BOXED LAYOUTS</a></dt>
                                                            <dd><a href="#">Portfolio Image Gallery</a></dd>
                                                            <dd><a href="#">Portfolio Justified</a></dd>
                                                            <dd><a href="#">Portfolio Grid Transform</a></dd>
                                                            <dd><a href="#">Portfolio Grid Zooming</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                            <dt><a href="#">SINGLE PROJECT PAGE</a></dt>
                                                            <dd><a href="#">Single Project Page 01</a></dd>
                                                            <dd><a href="#">Single Project Page 02</a></dd>
                                                            <dd><a href="#">Single Project Page 03</a></dd>
                                                            <dd><a href="#">Single Project Page 04</a></dd>
                                                            <dd><a href="#">Single Project Page 05</a></dd>
                                                            <dd><a href="#">Single Project Page 06</a></dd>
                                                            <dd><a href="#">Single Project Page 07</a></dd>
                                                            <dd><a href="#">Single Project Page 08</a></dd>

                                                            <dt><a href="#">PORTFOLIO COLUMNS</a></dt>
                                                            <dd><a href="#">Portfolio Two Columns</a></dd>
                                                            <dd><a href="#">Portfolio Three Columns</a></dd>
                                                            <dd><a href="#">Portfolio Four Columns</a></dd>
                                                            <dd><a href="#">Portfolio Five Columns</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                                <dt><a href="#"><img src={process.env.PUBLIC_URL+"/img/menu-banner-01.jpg.webp"} alt=""/></a></dt>
                                                                <dd><img src={process.env.PUBLIC_URL+"/img/menu-banner-02.jpg.webp"} alt=""/></dd>
                                                        </dl>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="main-btn">BLOG</a>
                                        <div className="sub sub24 sub4">
                                            <div className="sub-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Standard <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-1">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Blog Standard - Full Width</a></li>
                                                                            <li><a href="#">Blog Standard With Left Sidebar</a></li>
                                                                            <li><a href="#">Blog Standard With Right Sidebar</a></li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Classic <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-2">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Blog Classic</a></li>
                                                                            <li><a href="#">Blog Classic - Full Width</a></li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog List <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-3">
                                                            <div className="sub-sub-wrap">
                                                                    <ul>
                                                                        <li><a href="#">Blog List</a></li>
                                                                        <li><a href="#">Blog List - Full Width</a></li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Grid <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-4">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Blog Grid</a></li>
                                                                            <li><a href="#">Blog Grid - Full Width</a></li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Masonary <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-5">
                                                            <div className="sub-sub-wrap">
                                                                    <ul>
                                                                        <li><a href="#">Blog Masonry</a></li>
                                                                        <li><a href="#">Blog Masonry - Full Width</a></li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Simple <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-6">
                                                            <div className="sub-sub-wrap">
                                                                    <ul>
                                                                        <li><a href="#">Blog Simple</a></li>
                                                                        <li><a href="#">Blog Simple - Full Width</a></li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Clean <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-7">
                                                            <div className="sub-sub-wrap">
                                                                    <ul>
                                                                        <li><a href="#">Blog Clean</a></li>
                                                                        <li><a href="#">Blog Clean - Full Width</a></li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Images <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-8">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Blog Images</a></li>
                                                                            <li><a href="#">Blog Images - Full Width</a></li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Blog Only Text <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-9">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Blog Only Text</a></li>
                                                                            <li><a href="#">Blog Only Text - Full Width</a></li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Post Layout <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-10">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Blog Post Layout 01</a></li>
                                                                            <li><a href="#">Blog Post Layout 02</a></li>
                                                                            <li><a href="#">Blog Post Layout 03</a></li>
                                                                            <li><a href="#">Blog Post Layout 04</a></li>
                                                                            <li><a href="#">Blog Post Layout 05</a></li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-btn">Post Type <i className="icon-arrow fa fa-angle-right"></i></a>
                                                        <div className="sub-sub sub4-11">
                                                                <div className="sub-sub-wrap">
                                                                    <ul>
                                                                            <li><a href="#">Standard Post</a></li>
                                                                            <li><a href="#">Gallery Post</a></li>
                                                                            <li><a href="#">Slider Post</a></li>
                                                                            <li><a href="#">Html5 Video Post</a></li>
                                                                            <li><a href="#">Youtube Video Post</a></li>
                                                                            <li><a href="#">Vimeo Video Post</a></li>
                                                                            <li><a href="#">Audio Post</a></li>
                                                                            <li><a href="#">Blockquote Post</a></li>
                                                                            <li><a href="#">Full Width Post</a></li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="main-btn">ELEMETNS</a>
                                        <div className="sub sub5">
                                            <div className="sub-wrap">
                                                <ul>
                                                    <li>
                                                        <dl>
                                                                <dt><a href="#">GENERAL ELEMENTS</a></dt>
                                                                <dd><a href="#">Accordions</a></dd>
                                                                <dd><a href="#">Buttons</a></dd>
                                                                <dd><a href="#">Team</a></dd>
                                                                <dd><a href="#">Team Carousel</a></dd>
                                                                <dd><a href="#">Clients</a></dd>
                                                                <dd><a href="#">Client Carousel</a></dd>
                                                                <dd><a href="#">Subscribe</a></dd>
                                                                <dd><a href="#">Call To Action</a></dd>
                                                                <dd><a href="#">Tab</a></dd>
                                                                <dd><a href="#">Google Map</a></dd>
                                                                <dd><a href="#">Text Slider</a></dd>
                                                                <dd><a href="#">Contact Form</a></dd>
                                                                <dd><a href="#">Image Gallery</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                                <dt><a href="#">INFOGRAPHICS / ICONS</a></dt>
                                                                <dd><a href="#">Process Bar</a></dd>
                                                                <dd><a href="#">Icon With Text</a></dd>
                                                                <dd><a href="#">Overline Icon Box</a></dd>
                                                                <dd><a href="#">Custom Icon With Text</a></dd>
                                                                <dd><a href="#">Counters</a></dd>
                                                                <dd><a href="#">Countdown</a></dd>
                                                                <dd><a href="#">Pie Charts</a></dd>
                                                                <dd><a href="#">Text Box</a></dd>
                                                                <dd><a href="#">Fancy Text Box</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                                <dt><a href="#">INTERACTIVE ELEMENTS</a></dt>
                                                                <dd><a href="#">Testimonials</a></dd>
                                                                <dd><a href="#">Testimonials Carousel</a></dd>
                                                                <dd><a href="#">Video</a></dd>
                                                                <dd><a href="#">Interactive Banners</a></dd>
                                                                <dd><a href="#">Services</a></dd>
                                                                <dd><a href="#">Portfolio Slider</a></dd>
                                                                <dd><a href="#">Info Banner</a></dd>
                                                                <dd><a href="#">Rotate Box</a></dd>
                                                                <dd><a href="#">Process Step</a></dd>
                                                                <dd><a href="#">Blog Posts</a></dd>
                                                                <dd><a href="#">Instagram</a></dd>
                                                                <dd><a href="#">Parallax Scrolling</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                                <dt><a href="#">TEXT & CONTAINERS</a></dt>
                                                                <dd><a href="#">Heading</a></dd>
                                                                <dd><a href="#">Dropcaps</a></dd>
                                                                <dd><a href="#">Columns</a></dd>
                                                                <dd><a href="#">Blockquote</a></dd>
                                                                <dd><a href="#">Highlights</a></dd>
                                                                <dd><a href="#">Message Box</a></dd>
                                                                <dd><a href="#">Social Icons</a></dd>
                                                                <dd><a href="#">Lists</a></dd>
                                                                <dd><a href="#">Separators</a></dd>
                                                                <dd><a href="#">Pricing Table</a></dd>
                                                        </dl>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="main-btn">FEATURES</a>
                                        <div className="sub sub6">
                                            <div className="sub-wrap">
                                                <ul>
                                                    <li>
                                                        <dl>
                                                            <dt><a href="#">HEADER STYLES</a></dt>
                                                            <dd><a href="#">Transparent Header</a></dd>
                                                            <dd><a href="#">White Header</a></dd>
                                                            <dd><a href="#">Dark Header</a></dd>
                                                            <dd><a href="#">Header With Push</a></dd>
                                                            <dd><a href="#">Center Navigation</a></dd>
                                                            <dd><a href="#">Center Logo</a></dd>
                                                            <dd><a href="#">Top Logo</a></dd>
                                                            <dd><a href="#">One Page Navigation</a></dd>
                                                            <dd><a href="#">Hamburger Menu</a></dd>
                                                            <dd><a href="#">Hamburger Menu Half</a></dd>
                                                            <dd><a href="#">Left Menu Classic</a></dd>
                                                            <dd><a href="#">Left Menu Modern</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                            <dt><a href="#">FOOTER</a></dt>
                                                            <dd><a href="#">Footer Standard</a></dd>
                                                            <dd><a href="#">Footer Standard Dark</a></dd>
                                                            <dd><a href="#">Footer Classic</a></dd>
                                                            <dd><a href="#">Footer Classic Dark</a></dd>
                                                            <dd><a href="#">Footer Clean</a></dd>
                                                            <dd><a href="#">Footer Clean Dark</a></dd>
                                                            <dd><a href="#">Footer Modern</a></dd>
                                                            <dd><a href="#">Footer Modern Dark</a></dd>
                                                            <dd><a href="#">Footer Center Logo</a></dd>
                                                            <dd><a href="#">Footer Center Logo Dark</a></dd>
                                                            <dd><a href="#">Footer Strip</a></dd>
                                                            <dd><a href="#">Footer Strip Dark</a></dd>
                                                            <dd><a href="#">Footer Center Logo 02</a></dd>
                                                            <dd><a href="#">Footer Center Logo 02 Dark</a></dd>
                                                            <dd><a href="#">Footer Clean Modern Dark<i className="new-deco">New</i></a></dd>
                                                            <dd><a href="#">Footer Clean Modern<i className="new-deco">New</i></a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                            <dt><a href="#">PAGE TITLE</a></dt>
                                                            <dd><a href="#">Left Alignment</a></dd>
                                                            <dd><a href="#">Right Alignment</a></dd>
                                                            <dd><a href="#">Center Alignment</a></dd>
                                                            <dd><a href="#">Dark Style</a></dd>
                                                            <dd><a href="#">Big Typography</a></dd>
                                                            <dd><a href="#">Parallax Image Background</a></dd>
                                                            <dd><a href="#">Image After Breadcrumbs</a></dd>
                                                            <dd><a href="#">Gallery Background</a></dd>
                                                            <dd><a href="#">Background Video</a></dd>
                                                            <dd><a href="#">Mini Version</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl>
                                                            <dt><a href="#">GALLERY</a></dt>
                                                            <dd><a href="#">Single Image Lightbox</a></dd>
                                                            <dd><a href="#">Lightbox Gallery</a></dd>
                                                            <dd><a href="#">Zoom Gallery</a></dd>
                                                            <dd><a href="#">Metro Gallery<i className="new-deco">New</i></a></dd>
                                                            <dd><a href="#">Justified Gallery<i className="new-deco">New</i></a></dd>
                                                            <dd><a href="#">Popup With Form</a></dd>
                                                            <dd><a href="#">Modal Popup</a></dd>
                                                            <dd><a href="#">Open Youtube Video</a></dd>
                                                            <dd><a href="#">Open Vimeo Video</a></dd>
                                                            <dd><a href="#">Open Google Map</a></dd>
                                                        </dl>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    </ul>
                            </nav>
                            <span className="mobile-btn-box">
                                <a href="#" className="mobile-btn">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </a>
                            </span>
                            <aside id="aside">
                                <span><a href="#"><i className="fa fa-search"></i></a></span>
                                <span><a href="#"><i className="fa fa-codepen"></i></a></span>
                            </aside>
                        </div>
                    </div>
                    </div>
                </header>
            </>
        );
    }
}

export default HeaderComponent;