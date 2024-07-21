import React from 'react'

const Testamonial = () => {
    return (
        <>
            <section className="py-5">
                <div className="container py-5">
                    <div className="row text-center px-5 mb-5 pb-5">
                        <div className="bg-dark mx-auto bg-opacity-10 rounded d-flex align-items-center justify-content-center" style={{ width: "4.6rem", height: "3.5rem" }}>
                            <i class="fa-solid fa-person text-white fs-5 "></i>
                        </div>
                        <h1>What Clients Say</h1>
                        <p className="text-secondary fs-4">
                            Discover what our valued clients have to say about their experiences with our services. We take pride in delivering exceptional results and fostering lasting partnerships.
                        </p>

                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="text-center h-100">
                                <img alt="testimonial" className="rounded-circle mb-4 d-inline-block border border-secondary" src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/image/avatar1.jpg" width="80" height="80" />
                                <p className="mb-4">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <div className="d-inline-block bg-primary rounded mb-3" style={{ height: "2px", width: "40px" }}></div>
                                <h5 className="text-uppercase fw-bold">Holden Caulfield</h5>
                                <p className="text-muted">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="text-center h-100">
                                <img alt="testimonial" className="rounded-circle mb-4 d-inline-block border border-secondary" src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/image/avatar2.jpg" width="80" height="80" />
                                <p className="mb-4">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <div className="d-inline-block bg-primary rounded mb-3" style={{ height: "2px", width: "40px" }}></div>
                                <h5 className="text-uppercase fw-bold">Alper Kamu</h5>
                                <p className="text-muted">UI Developer</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center h-100">
                                <img alt="testimonial" className="rounded-circle mb-4 d-inline-block border border-secondary" src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/image/avatar3.jpg" width="80" height="80" />
                                <p className="mb-4">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <div className="d-inline-block bg-primary rounded mb-3" style={{ height: "2px", width: "40px" }}></div>
                                <h5 className="text-uppercase fw-bold">Henry Letham</h5>
                                <p className="text-muted">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testamonial