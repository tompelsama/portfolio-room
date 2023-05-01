import React, { forwardRef } from 'react'

const FirstSection = forwardRef( (props, ref) => {
    return <>
        <div ref={ref} className="first-move section-margin"></div>

        <section className="first-section section left">
            <div className="progress-wrapper progress-bar-wrapper-left">
                <div className="progress-bar"></div>
            </div>

            <div className="section-intro-wrapper">
                <h2 className="section-title">
                    About Me
                </h2>
            </div>

            <div className="section-detail-wrapper">
                <h3 className="section-heading">Hello!</h3>
                <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita qui quae officiis, magni velit iste repellat consequuntur temporibus. Quasi atque officia iste beatae rerum, harum itaque accusamus. At, natus?</p>
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

export default FirstSection