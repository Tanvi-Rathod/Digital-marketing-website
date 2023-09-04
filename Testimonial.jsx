import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import the slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import the slick-carousel theme CSS
import '../../styles/Testimonial.css';
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000, // Fixed the typo here
        slidesToShow: 1, // Fixed the typos here
        slidesToScroll: 1, // Fixed the typos here
        swipeToSlide:true 
    };

    return (
        <section>
            <div className="container">
                <div className="slider__content-top">
                    <h6 className="subtitle">Testimonials</h6>
                    <h2>Trusted by more than <span className="highlight">5,000 customers</span> </h2>
                </div>

                <Slider {...settings}> {/* Render the Slider component with settings */}
                    <div className='slider__item'>
                        <p className="description">The team at DealDigital is not only knowledgeable but also incredibly responsive and supportive. They've taken the time to understand our business goals, and their creative approach has led to higher engagement and conversion rates.</p>
                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava01} alt="Customer 1" /> {/* Added alt attribute */}
                            </div>
                            <div>
                                <h5 className="customer__name">Jhon Abraham</h5>
                                <p className="description">CEO, Workcreation</p>
                            </div>
                        </div>
                    </div>
                    {  <div className='slider__item'>
                        <p className="description">The team at DealDigital is not only knowledgeable but also incredibly responsive and supportive. They've taken the time to understand our business goals, and their creative approach has led to higher engagement and conversion rates.</p>
                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava02} alt="Customer 1" /> {/* Added alt attribute */}
                            </div>
                            <div>
                                <h5 className="customer__name">Mr. ketlin Charls</h5>
                                <p className="description">Sr. Product Designer, Workcreation</p>
                            </div>
                        </div>
                    </div>
                    }
                    {  <div className='slider__item'>
                        <p className="description">The team at DealDigital is not only knowledgeable but also incredibly responsive and supportive. They've taken the time to understand our business goals, and their creative approach has led to higher engagement and conversion rates.</p>
                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava03} alt="Customer 1" /> {/* Added alt attribute */}
                            </div>
                            <div>
                                <h5 className="customer__name">Ms. Riya Chopra</h5>
                                <p className="description">Marketing Manager, Workcreation</p>
                            </div>
                        </div>
                    </div>
                    }
                </Slider>
            </div>
        </section>
    );
}

export default Testimonial;
