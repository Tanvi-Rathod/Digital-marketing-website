import React, { useRef, useEffect } from 'react';
import './Header.css';

const nav__links = [
    {
        path: "#home",
        display: 'Home'
    },
    {
        path: "#service     ",
        display: 'Service' // Corrected the display name to start with a capital letter
    },
    {
        path: "#about",
        display: 'About us'
    },
    {
        path: "#team",
        display: 'Portfolio'
    },
    {
        path: "#contact",
        display: 'Contact us' // Corrected the display name to start with a capital letter
    },
]

const Header = () => {

    const headerRef = useRef(null);
    const menuRef=useRef(null);

    // const headerFunc = () => {
    //     if (headerRef.current && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
    //         headerRef.current.classList.add('header__shrink');
    //     }
    //     else if (headerRef.current) {
    //         headerRef.current.classList.remove('header__shrink');
    //     }
    // };


    const headerFunc = () => {
        console.log("Scrolling...");
        if (headerRef.current && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
            console.log("Adding class");
            headerRef.current.classList.add('header__shrink');
        }
        else if (headerRef.current) {
            console.log("Removing class");
            headerRef.current.classList.remove('header__shrink');
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", headerFunc);
        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    const togleMenu =()=>menuRef.current.classList.toggle('menu__active')
    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <h2>DealDigital</h2>
                       
                    </div>
                    {/* //------------------NEVIGATIOPN BAR-------------------------------------- */}
                    <div className="navigation" ref={menuRef} onClick={togleMenu}>
                        <ul className="menu">
                            {
                                nav__links.map((item, index) => (<li className='menu__item' key={index}>
                                    <a href={item.path} className='menu__link'>
                                        {item.display}
                                    </a>
                                </li>
                                ))}
                        </ul>
                    </div>
                    {/* <div className="light__mode">
                        <span><i className="ri-sun-line"></i>Light Mode</span>
                    </div> */}
                    <span className="mobile__menu" onClick={togleMenu}><i class="ri-menu-line"></i></span>
                </div>

            </div>

        </header>
    );
}

export default Header;
