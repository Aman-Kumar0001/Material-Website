import React from 'react'

const Section5 = () => {
    return (
        <>
            <div class="container mt-5">
                <h2 class="text-center mb-4">Frequently asked questions</h2>
                <p class="text-center mb-4">
                    A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do
                </p>
                <div class="row row-cols-1 row-cols-lg-3">
                    <div class="col-md-4 mb-4 px-4">
                        <h4>How do I get started?</h4><br />
                        <p className='text-secondary'>
                            Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].
                        </p>
                    </div>
                    <div class="col-md-4 mb-4 px-4">
                        <h4>Is there a free trial available?<br /></h4>
                        <p className='text-secondary'>
                            Yes, we offer a 30 days free trial so you can experience our mobile application with no commitment.
                        </p>
                    </div>
                    <div class="col-md-4 mb-4 px-4">
                        <h4>How can I upgrade my account?</h4><br />
                        <p className='text-secondary'>
                            To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.
                        </p>
                    </div>
                    <div class="col-md-4 mb-4 px-4">
                        <h4>Can I cancel my subscription anytime?</h4><br />
                        <p className='text-secondary'>
                        Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.
                        </p>
                    </div>
                    <div class="col-md-4 mb-4 px-4">
                        <h4>How can I upgrade my account to paid?</h4><br />
                        <p className='text-secondary'>
                        To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.
                        </p>
                    </div>
                    <div class="col-md-4 mb-4 px-4">
                        <h4>What if I need help or have technical issues?</h4><br />
                        <p className='text-secondary'>
                        Our dedicated support team is here to assist you. Reach out via [mention preferred support channels, e.g., live chat, email, or phone], and we'll get back to you promptly.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5