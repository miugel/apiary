import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import HomeContainer from './styles/homeStyle';
import feature1 from '../img/feature1.jpeg';
import feature2 from '../img/feature2.jpeg';
import feature3 from '../img/feature3.jpeg';
import feature4 from '../img/feature4.jpeg';

const Home = () => {
    return (
        <>
            <Header/>
            <HomeContainer>
                <div className='landing-container'>
                    <div className='landing'>
                        <h1>Custom mechanical keyboards</h1>
                        <h2>built to your taste, repaired, or modified</h2>
                        <a href='https://www.reddit.com/r/mechmarket/comments/e9rbg9/service_apiary_keyboards_building_soldering/' target='_blank' rel='noopener noreferrer'><button>Our Services</button></a>
                    </div>
                </div>

                <div className='features'>
                    <div className='feature'>
                        <img src={feature1} alt='first keyboard'/>
                        <div className='information'>
                            <i className="far fa-check-circle"></i>
                            <p>Serviced hundreds of community members and counting</p>
                        </div>
                    </div>

                    <div className='feature'>
                        <img src={feature2} alt='second keyboard'/>
                        <div className='information'>
                            <i className="far fa-check-circle"></i>
                            <p>Knowledgeable and experienced</p>
                        </div>
                    </div>

                    <div className='feature'>
                        <img src={feature3} alt='third keyboard'/>
                        <div className='information'>
                            <i className="far fa-check-circle"></i>
                            <p>Quick turnaround times</p>
                        </div>
                    </div>

                    <div className='feature'>
                        <img src={feature4} alt='fourth keyboard'/>
                        <div className='information'>
                            <i className="far fa-check-circle"></i>
                            <p>Each board is handled with the utmost attention and care</p>
                        </div>
                    </div>
                </div>

                {/* <div className='reviews'>
                    <h3>Reviews</h3>
                    <div className='review'>
                        <p className='reviewer'>u/unteagle20</p>
                        <p>"I just received my board back that had a faulty usb and it works perfectly now!! Can't recommend enough."</p>
                    </div>
                    <div className='review'>
                        <p className='reviewer'>u/mizer357</p>
                        <p>"Great experience working with Apiary -- nicely fixed a faulty CTRL PCB, and elevated some Zealios switches to perfection. Highly recommended."</p>
                    </div>
                </div> */}

                <div className='stream'>
                    <h2>Watch Your Build Streamed Live on Twitch</h2>
                    <iframe title='stream' src="https://www.youtube.com/embed/oVyNu3pyOdw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className='shop'>
                    <h2>Don't need a build, but still want to show your support?</h2>
                    <h3>Check out our shop and see if anything tickles your fancy!</h3>
                    <Link to='/shop'><button>Shop</button></Link>
                </div>
            </HomeContainer>
            <Footer/>
        </>
    );
};

export default Home;