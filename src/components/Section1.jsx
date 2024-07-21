import React from 'react'

const Section1 = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-white pt-5 pb-5">
                <div className="row pt-5 row-cols-1 row-cols-lg-2 px-lg-5 pb-5">
                    <div className="col px-5">
                        <h1 style={{ fontSize: "50px" }}>Your Perfect <br />
                            Learning App</h1>
                        <p className='fs-5'>Our app is here to empower you on your quest for knowledge, anytime and anywhere.</p>
                        <b>Get the app</b><br /><br />
                        <button className='sec1-btn'>
                            <i class="fa-brands fa-apple"></i>&nbsp;
                            APP STORE
                        </button>&nbsp;&nbsp;
                        <button className='sec1-btn'>
                            <i class="fa-brands fa-google"></i>&nbsp;
                            APP STORE
                        </button>
                    </div>
                    <div className="col text-center">
                        <img src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/image/iphones.png" alt="" width="400px" />
                    </div>
                </div>
            </div>
            <div className="bg-light sec1-con2 text-dark p-4 shadow p-3 mb-5 bg-body" style={{ borderRadius: "14px", width:"85%" }}>
                <div className="row">
                    <h1>Learning App</h1>
                    <p className='text-secondary'>Download our app to dive into a vast library of courses, tutorials, and study materials on a wide range of subjects - from programming and language learning to personal development and beyond</p>
                </div>
            </div>
        </>
    )
}

export default Section1