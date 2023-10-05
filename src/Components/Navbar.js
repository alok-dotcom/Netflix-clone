import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            handleShow(window.scrollY > 100);
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="NETFLIX"
            />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="AVATAR"
            />
        </div>
    );
};

export default Navbar;
