import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import HomeContainer from './HomeStyle';

const Home = () => {
    return (
        <>
            <Header/>
            {/* <HomeContainer>
                <div className='landing-container'>
                    <div className='landing'>
                        <h2>Custom mechanical keyboards</h2>
                        <p>built to your taste, repaired, or modified</p>
                        <a href='https://www.reddit.com/r/mechmarket/comments/e9rbg9/service_apiary_keyboards_building_soldering/' target='_blank' rel='noopener noreferrer'><button>Our Services</button></a>
                    </div>
                </div>

                <div className='features'>
                    <div className='feature-1'>
                        <i className="far fa-check-circle"></i>
                        <p>Used by hundreds of community members and counting</p>
                    </div>

                    <div className='feature-2'>
                        <i className="far fa-check-circle"></i>
                        <p>Knowledgeable and experienced</p>
                    </div>

                    <div className='feature-3'>
                        <i className="far fa-check-circle"></i>
                        <p>Quick turnaround times</p>
                    </div>

                    <div className='feature-4'>
                        <i className="far fa-check-circle"></i>
                        <p>Each board is handled with the utmost attention and care</p>
                    </div>
                </div>

                <div className='reviews'>
                    <h3>Reviews</h3>
                    <div className='review'>
                        <p className='reviewer'>u/unteagle20</p>
                        <p>"I just received my board back that had a faulty usb and it works perfectly now!! Can't recommend enough."</p>
                    </div>
                    <div className='review'>
                        <p className='reviewer'>u/mizer357</p>
                        <p>"Great experience working with Apiary -- nicely fixed a faulty CTRL PCB, and elevated some Zealios switches to perfection. Highly recommended."</p>
                    </div>
                </div>

                <div className='stream'>
                    <h3>Watch Your Build Streamed Live on Twitch</h3>
                    <iframe title='stream' src="https://www.youtube.com/embed/oVyNu3pyOdw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className='shop'>
                    <h3>Don't need a build, but still want to show your support?</h3>
                    <p>Check out our shop and see if anything tickles your fancy!</p>
                    <Link to='/shop'><button>Shop</button></Link>
                </div>
            </HomeContainer> */}
        </>
    );
};

export default Home;