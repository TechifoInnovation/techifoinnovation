import React, { useEffect, useState } from "react";

function Header() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 120) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', changeColor);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <>
            <header>
                <div className={sticky ? 'navbar dark-nav' : 'navbar'}>
                    <div className="nav-container">
                        <h3 className="logo">Techifo</h3>
                        <ul className="links">
                            <li><a href="http://www.google.com">Home</a></li>
                            <li><a href="http://www.google.com">About Us</a></li>
                            <li><a href="http://www.google.com">Service</a></li>
                            <li><a href="http://www.google.com">Contact Us</a></li>
                        </ul>
                        <button className="action-btn">Get started</button>
                        <i className="toggle_btn fa-solid fa-bars" id="btn">hh</i>
                    </div>
                    <div id="drop-down-menu">
                        <ul>
                            <li><a href="http://www.google.com">Home</a></li>
                            <li><a href="http://www.google.com">About Us</a></li>
                            <li><a href="http://www.google.com">Service</a></li>
                            <li><a href="http://www.google.com">Contact Us</a></li>
                        </ul>
                        <button className="action-btn">Get started</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;



 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />