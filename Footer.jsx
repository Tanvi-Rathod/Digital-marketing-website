import React from 'react';
import '../../styles/footer.css';
const quicklinks01 = [
    {
        path: '#',
        display: 'Marketing',
    },
    {
        path: '#',
        display: 'Analytics',
    },
    {
        path: '#',
        display: "Guides",
    },

];
const quicklinks02 = [
    {
        path: '#',
        display: 'Pricing',
    },
    {
        path: '#',
        display: 'Documentaation',
    },
    {
        path: '#',
        display: "Commercial",
    },

];
const quicklinks03 = [
    {
        path: '#about',
        display: 'About',
    },
    {
        path: '#',
        display: 'jobs',
    },
    {
        path: '#Testimonial',
        display: "feedback",
    },

]

function Footer() {
    const year=new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <h2>DealDigital</h2>
                        <p className='small__text description'>Your Trusted Partner for Digital Success. We're dedicated to
                            delivering tailored strategies that elevate your brand's online presence and drive results.
                            Join us on the journey to digital excellence."

                        </p>
                    </div>
                    <div className="footer__quick-links">
              
                        <ul className="quick__links">
                        <h3 className="quick__links-title">solutions </h3>
                            {quicklinks01.map((item, index) => (
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>

                            ))}
                        </ul>
                    </div>

                    <div className="footer__quick-links">
                        
                        <ul className="quick__links">
                        <h3 className="quick__links-title">Support </h3>
                            {quicklinks02.map((item, index) => (
                                
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>

                            ))}
                        </ul>
                    </div>



                    <div className="footer__quick-links">
                       
                            <ul className="quick__links">
                            <h3 className="quick__links-title">Comapay</h3>
                                {quicklinks03 .map((item, index) => (
                                    <li className="quick__link-item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>

                                ))}
                            </ul>
                        
                    </div>


                </div>
                <p className="copyright">Copyright {year}, developer by Tanvi Rathod. All rights reserved.</p>
            </div>
     
        </footer >
    );
}

export default Footer;
