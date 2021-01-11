import React from 'react';
import './Blog.css';
import ellipse1 from '../../../images/Ellipse 1.png';
import ellipse2 from '../../../images/Ellipse 2.png';
import ellipse3 from '../../../images/Ellipse 3.png';
import quot from '../../../images/quot.png';
import * as Icon from 'react-bootstrap-icons';

const Blog = () => {
    return (
        <div className="container main_blog">
            <h3>OUR BLOG</h3>
            <h1>From Our Blog News</h1>
            <div className="blogs">
                <div className="blog blog_1">
                    <div className="visible">
                        <div className="detail">
                            <img src={ellipse3} alt=""/>
                            <div className="in_detail">
                                <h5>Dr. Rashed Kabir</h5>
                                <p>22 Aug 2018</p>
                            </div>
                        </div>
                        <h4>Check at least a doctor in a year for your teeth</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusamus hic ipsum?</p>
                    </div>
                    <div className="hidden default_btn">
                        <div className="in_hidden">
                            <h5>Dr. Rashed Kabir</h5>
                            <h6>22 Aug 2018</h6>
                            <h4>Check at least a doctor in a year for your teeth</h4>
                            <Icon.ArrowRight/>
                        </div>
                        <img className="quot" src={quot} alt=""/>
                    </div>
                </div>
                <div className="blog blog_2">
                    <div className="visible">
                        <div className="detail">
                            <img src={ellipse1} alt=""/>
                            <div className="in_detail">
                                <h5>Dr. Caudi</h5>
                                <p>23 April 2019</p>
                            </div>
                        </div>
                        <h4>2 times of brush in a day can keep you healthy</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusamus hic ipsum?</p>
                    </div>
                    <div className="hidden default_btn">
                        <div className="in_hidden">
                            <h5>Dr. Caudi</h5>
                            <h6>23 April 2019</h6>
                            <h4>2 times of brush in a day can keep you healthy</h4>
                            <Icon.ArrowRight/>
                        </div>
                        <img className="quot" src={quot} alt=""/>
                    </div>
                </div>
                <div className="blog blog_3">
                    <div className="visible">
                        <div className="detail">
                            <img src={ellipse2} alt=""/>
                            <div className="in_detail">
                                <h5>Dr. John Mitchel</h5>
                                <p>23 April 2019</p>
                            </div>
                        </div>
                        <h4>The tooth cancer is taking a challenge</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusamus hic ipsum?</p>
                    </div>
                    <div className="hidden default_btn">
                        <div className="in_hidden">
                            <h5>Dr. John Mitchel</h5>
                            <h6>23 April 2019</h6>
                            <h4>The tooth cancer is taking a challenge</h4>
                            <Icon.ArrowRight/>
                        </div>
                        <img className="quot" src={quot} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;