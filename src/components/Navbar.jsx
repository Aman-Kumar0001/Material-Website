import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav
                class="navbar navbar-expand-md navbar-light bg-light fixed-top"
            >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Material Tailwind</a>
                    <button
                        class="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-dark-lg bg-light rounded" id="collapsibleNavId">
                        <ul class="navbar-nav mx-auto mt-2 ps-3 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-dark" href="#" aria-current="page"
                                >Home
                                    <span class="visually-hidden">(current)</span></a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Docs</a>
                            </li>
                        </ul>
                        <div>
                            <a class="nav-link d-flex text-dark gap-3" href="#">                            <i class="fa-brands my-2 fs-4 fa-linkedin"></i>
                                <i class="fa-brands my-2 fs-4 fa-instagram"></i>
                                <i class="fa-brands my-2 fs-4 fa-facebook"></i>
                                <div className="px-3 py-2 btn-dark rounded">BLOCKS</div>
                            </a>
                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar