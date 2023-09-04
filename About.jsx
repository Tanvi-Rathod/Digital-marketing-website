import React from 'react';
import '../../styles/About.css';
import aboutImg from '../../images/about-us.jpg';
const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: ' Drive immediate traffic and conversions with our targeted PPC advertising campaigns.',

    },
    {
        icon: 'ri-lightbulb-flash-fill',
        title: '24/7 sipportive team',
        desc: 'Weve had the privilege of partnering with a wide range of clients, from startups to established enterprises. Their success stories inspire us every day, motivating us to continuously raise the bar in digital marketing'

    },
    {
        icon: 'ri-home-office-fill',
        title: 'Innovators in Digital Marketing',
        desc: ' Join us on this exciting journey as we navigate the digital frontier, helping you amplify your brand s voice, engage your audience, and achieve remarkable growth. Together, we will shape the future of digital marketing..',

    }

]
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <h6 className="subtitle">why choose us</h6>
                        <h2>Specialist in aviding clients on</h2>
                        <h2 className="highlights">financial challenges</h2>'
                        <p className="description about__content-desc">
                            At DealDigital, we are more than just a digital marketing agency. We are a passionate team of creative minds and tech-savvy experts dedicated to navigating the dynamic digital landscape. With a deep commitment to innovation and client success, we strive to redefine digital marketing by crafting tailored strategies that amplify your brand's voice, engage your audience, and drive measurable results. "
                        </p>
                        <div className='choose__item-wrapper'>
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose__us-item" key={index}>
                                        <span className="choose__us-icon"><i class={item.icon}></i></span>

                                        <div> <h4 className="choose__us-title">{item.title}</h4>
                                            <p className="description">{item.desc}</p></div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="about__img"> <img src={aboutImg} alt="" />
                        </div>
                   
                </div>
            </div>
        </section>
    );
}

export default About;
