import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCopyrightLine } from "react-icons/ri";


function Sociallinks() {
    const [isvisible, setVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: '2000',
        });
    };
    return (
        <>
            <div className='social-link-section'>
                <div className="container">
                    <div className="footer-bottom "><div className="container"><div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-section"><span className='mr-2'><RiCopyrightLine /></span><p className='d-inline'>Copyright <span> 2024</span>,  All Right Reserved By Sheikh Mumtaz Furniture</p></div>
                        </div>

                        <div className="col-lg-6 text-lg-end"><ul className="footer-bottom-nav"><li><a href="https://www.youtube.com/@L Sheikhmumtaz.furniture">Youtube</a></li>
                            <li><a href="https://www.facebook.com/share/7LdhZBuNThcNp6m5/?mibextid=LQQJ4d">Facebook</a></li>
                            <li><a href="https://www.instagram.com/_.lifestandard._?igsh=MW01OXMyeG5pbXZxeA%3D%3D&utm_source=qr">Instagram</a></li>
                        </ul>
                        </div>
                    </div>
                        <a href="#" className="scroll-top scroll-to-target d-inline-block"><span className="fas fa-angle-double-up"></span>
                        </a>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sociallinks