import React, { forwardRef } from 'react'

const SecondSection = forwardRef( (props, ref) => {
    return <>
        <div ref={ref} className="second-move section-margin"></div>

        <section className="second-section section right">
            <div className="progress-wrapper progress-bar-wrapper-right">
                <div className="progress-bar blue-background"></div>
            </div>

            <div className="section-intro-wrapper blue-text blue-border">
                <h2 className="section-title">
                    My Work
                </h2>
            </div>

            <div className="section-detail-wrapper">
                <h3 className="section-heading">Lorem Ipsum</h3>
                <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita qui quae officiis, magni velit iste repellat consequuntur temporibus. Quasi atque officia iste beatae rerum, harum itaque accusamus. At, natus?</p>
                <h3 className="section-heading">Lorem Ipsum</h3>
                <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita qui quae officiis, magni velit iste repellat consequuntur temporibus. Quasi atque officia iste beatae rerum, harum itaque accusamus. At, natus?</p>
                <h3 className="section-heading">Lorem Ipsum</h3>
                <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita qui quae officiis, magni velit iste repellat consequuntur temporibus. Quasi atque officia iste beatae rerum, harum itaque accusamus. At, natus?</p>
            </div>
        </section>
    </>
})

export default SecondSection