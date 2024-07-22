import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-dark text-white p-5'>
                <div className="container fluid">
                    <div className="row justify-content-between row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <h3>Material Tailwind</h3>
                            <p>The reward for getting on the stage is fame.</p>
                            <br />
                            <ul className="d-flex gap-3" style={{ listStyleType: "none" }}>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Blog</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className="col col-lg-3 px-5">
                            <b>Get the app</b><br /><br />
                            <button className='sec1-btn mb-2'>
                                <i class="fa-brands fa-apple"></i>&nbsp;
                                APP STORE
                            </button><br />
                            <button className='sec1-btn'>
                                <i class="fa-brands fa-google"></i>&nbsp;
                                APP STORE
                            </button>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className="row row-cols-1 justify-content-between row-cols-lg-2 gap-3 gap-lg-0">
                        <div className="col">
                            © 2024 Made with Material Tailwind by Creative Tim.
                        </div>
                        <div className="col-3 d-flex gap-2">
                            <i class="fa-brands fs-3 fa-facebook"></i>
                            <i class="fa-brands fs-3 fa-google"></i>
                            <i class="fa-brands fs-3 fa-github"></i>
                            <i class="fa-brands fs-3 fa-discord"></i>
                            <i class="fa-brands fs-3 fa-linkedin"></i>
                            <i class="fa-brands fs-3 fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer