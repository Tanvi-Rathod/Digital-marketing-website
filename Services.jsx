import React from 'react';
import '../../styles/Services.css';
const serviceData =[
    {
        icon:'ri-seo-fill',
        title:'Search Engine Optimization (SEO)',
        desc:' Drive immediate traffic and conversions with our targeted PPC advertising campaigns.',

    },
    {
        icon:'ri-chat-3-line',
        title:'Social Media Management',
        desc:'Engage and captivate your audience across social platforms with our tailored social media management services.',

    },
    {
        icon:'ri-apps-line',
        title:'Pay-Per-Click Advertising (PPC)',
        desc:' Drive immediate traffic and conversions with our targeted PPC advertising campaigns.',

    },

]
const Services= () => {
  return (
   <section id="service">
    <div className="container">
        <div className="services__top-content">
            <h6 className="subtitle">Our servicces</h6>
            <h2>Save time managing your businness with</h2>
            <h2 className="highlights">Our Best Services</h2>
        </div>

        <div className="service__item-wrapper">
            {
                serviceData.map((item,index)=>(
                    <div className="services__item" key={index}>
                <span className="service__icon"><i class={item.icon}></i></span>
                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
                 
            </div>
                ))
            }
            
        </div>
    </div>
   </section>
  );
}

export default Services;

;
