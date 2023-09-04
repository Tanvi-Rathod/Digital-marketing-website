import React from 'react';
import '../../styles/Counter.css'
const counterData=[
        {
            number:5000,
            text:'Clients'
        },
        {
            number:350,
            text:'Running Projects'
        },
        {
            number:900,
            text:'Completed Project'
        },

        
]

const Counter = () => {
  return (
  <section className="counter" id="projects">
    <div className="container">
        <div className="counter__wrapper">
            {
                counterData.map((item,index)=>(
                    <div className="counter__item" key={index}>
                    <span><h3 className="counter__number"> {item.number}</h3>
                    <h4 className="counter__title">{item.text}</h4></span>
                </div>
                ))
            }
           
        </div>
    </div>
  </section>
  );
}

export default Counter;
