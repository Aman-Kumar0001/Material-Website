import React from 'react'

const Section4 = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col text-center">
                        <img src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/image/iphone.png" alt="" className='w-75' />
                    </div>
                    <div className="col text-center">
                        <h1>Mobile Convenience</h1>
                        <p className="text-secondary">Access your learning materials on the go.</p>
                        <div className='d-flex gap-5 justify-content-center'>
                            <div>
                                <span>
                                    <h2>100</h2>
                                    <p className="text-secondary">Learning Courses</p>
                                </span>
                                <span>
                                    <h2>500</h2>
                                    <p className="text-secondary">Expert Instructors</p>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <h2>24/7</h2>
                                    <p className="text-secondary">Support</p>
                                </span>
                                <span>
                                    <h2>5/5</h2>
                                    <p className="text-secondary">Review Stars</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4