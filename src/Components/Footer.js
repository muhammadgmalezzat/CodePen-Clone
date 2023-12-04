import React from 'react'
import SocialCard
    from './SocialCard';
const Footer = () => {
    return (
        <div className='  flex w-full justify-center  items-center '>
            <SocialCard />
            {/* <div className='flex h-[50px] flex-row items-center'>
                <p className='flex-row justify-between items-center ml-20px text-primaryText text-2xl'>&copy; 2023 Muhammad Gamal</p>
            </div>
            <div class="flex flex-row justify-end items-end px-3 py-3 text-emerald-400 text-3xl ">
                <a href='https://www.facebook.com/mohamed.gmal.98871/' target="_blank">
                    <FaFacebook />
                </a>
                <a href='https://github.com/muhammadgmalezzat' target="_blank">
                    <FaGithub />
                </a>
                <a href='https://www.facebook.com/mohamed.gmal.98871/' target="_blank">
                    <SiLeetcode />
                </a>
                <a href='https://www.linkedin.com/in/muhammad-gmal-61330119b/' target="_blank">
                    <FaLinkedin />
                </a>
                
            </div> */}
                {/* <div className="flex flex-row ">
                    <div className="flex">
                        <div className="footer-copy-right text-center">
                            <p>Copyright &copy; All rights reserved | This template is made with <span className="wow animate__flipInY"
                                data-wow-duration="3s"><a href="https://www.linkedin.com/in/muhammad-gmal-61330119b/">Muhammad Gmal
                                    Ezzat</a> </span> </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="footer-copy-left text-center">
                            <ul>
                            <li>
                                <a href="https://www.facebook.com/mohamed.gmal.98871/" target="_blank"><i
                                    className="fab fa-facebook-f " aria-hidden="true"></i>
                                </a>
                            </li>

                                <li><a href="https://www.instagram.com/7958_muhammad/" target="_blank"><i className="fab fa-instagram "
                                    aria-hidden="true"></i></a></li>

                                <li><a href="https://www.linkedin.com/in/muhammad-gmal-61330119b/" target="_blank"><i
                                    className="fab fa-linkedin-in"></i></a></li>

                                <li><a href="https://web.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp " aria-hidden="true"
                                    aria-hidden="true"></i></a></li>

                                <li><a href="https://github.com/muhammadgmalezzat" target="_blank"><i className="fab fa-github "
                                    aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
        </div>
    )
};

export default Footer;