import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from './Experience.jsx'
import Sizes from './Utils/Sizes.js';
import Loader from './Components/Loader.jsx';
import Hero from './Components/Hero.jsx';
import FirstSection from './Components/FirstSection.jsx';
import SecondSection from './Components/SecondSection.jsx';
import ThirdSection from './Components/ThirdSection.jsx';
import { useCallback } from 'react';

gsap.registerPlugin(ScrollTrigger);
const sizes = new Sizes()

const Scene = () => {

    const [roomRotation, setRoomRotation] = useState(0)
    const [roomRef, setRoomRef] = useState()
    const [lampRef, setLampRef] = useState()
    const [streetLampRef, setStreetLampRef] = useState()
    const [cameraRef, setCameraRef] = useState()
    const firstSection = useRef()
    const secondSection = useRef()
    const thirdSection = useRef()
    let mm = gsap.matchMedia();

    const mouseMove = (e) => {
        const rotate = (e.clientX - window.innerWidth / 2) / window.innerWidth

        setRoomRotation(rotate * 0.15)
    }

    const modelRef = useCallback(node => {
        if (node !== null) {
            setRoomRef(node.room)
            setLampRef(node.lamp)
            setStreetLampRef(node.streetLamp)
        }
    }, []);

    // Room
    useEffect(() => {

        // Desktop
        mm.add("(min-width: 969px)", () => {
            if(roomRef)
            {
                roomRef.scale.set(0.1, 0.1, 0.1);

                // First section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: firstSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        // markers: true,
                        invalidateOnRefresh: true,
                        ease: "Power1.easeOut",
                    },
                })
                .fromTo(
                    roomRef.position,
                    { x: 0, y: 0, z: 0 },
                    {
                        x: () => {
                            return sizes.width * 0.003;
                        },
                    }
                );

                // Second section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: secondSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(
                    roomRef.position,
                    {
                        x: () => {
                            return 1;
                        },
                        z: () => {
                            return sizes.height * 0.0032;
                        },
                    },
                    "same"
                )
                .to(
                    roomRef.scale,
                    {
                        x: 0.4,
                        y: 0.4,
                        z: 0.4,
                    },
                    "same"
                )
            }
        });

        // Mobile
        mm.add("(max-width: 968px)", () => {
            if(roomRef)
            {
                roomRef.scale.set(0.07, 0.07, 0.07);

                // First section -----------------------------------------
                const firstPart = gsap.timeline({
                    scrollTrigger: {
                        trigger: firstSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        // invalidateOnRefresh: true,
                    },
                }).to(roomRef.scale, {
                    x: 0.1,
                    y: 0.1,
                    z: 0.1,
                });

                // Second section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: secondSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(
                    roomRef.scale,
                    {
                        x: 0.3,
                        y: 0.3,
                        z: 0.3,
                    },
                    "same"
                )
                .to(
                    roomRef.position,
                    {
                        x: 4,
                    },
                    "same"
                );

                // Third section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: thirdSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(roomRef.position, {
                    z: -8,
                })
            }
        })

    }, [roomRef])

    // Lamp
    useEffect(() => {

        // Desktop
        mm.add("(min-width: 969px)", () => {
            if(lampRef && streetLampRef)
            {
                lampRef.distance = 4
                streetLampRef.distance = 3

                // Second section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: secondSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(
                    lampRef,
                    {
                        distance: 16
                    },
                    "same"
                )
                .to(
                    streetLampRef,
                    {
                        distance: 10
                    },
                    "same"
                )
            }
        });

        // Mobile
        mm.add("(max-width: 968px)", () => {
            if(lampRef && streetLampRef)
            {
                lampRef.distance = 3
                streetLampRef.distance = 1

                // First section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: firstSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        // invalidateOnRefresh: true,
                    },
                })
                .to(
                    lampRef,
                    {
                        distance: 4
                    },
                    "same"
                )
                .to(
                    streetLampRef,
                    {
                        distance: 2
                    },
                    "same"
                )

                // Second section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: secondSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(
                    lampRef,
                    {
                        distance: 10
                    },
                    "same"
                )
                .to(
                    streetLampRef,
                    {
                        distance: 6
                    },
                    "same"
                )

            }
        })

    }, [streetLampRef, lampRef])

     // Camera
     useEffect(() => {

        // Desktop
        mm.add("(min-width: 969px)", () => {
            if(cameraRef)
            {
                cameraRef.position.set(0, 6.7, 10);

                // Third section -----------------------------------------
                gsap.timeline({
                    scrollTrigger: {
                        trigger: thirdSection.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(cameraRef.position, {
                    y: 1.5,
                    x: -7,
                });
            }
        });

    }, [cameraRef])

    return <main onMouseMove={mouseMove}>
        <div className='experience-canvas'>
            <Canvas
                shadows={'soft'}
            >
                <Suspense fallback={<Loader />}>
                    <Experience
                        ref={modelRef}
                        cameraRef={el => { setCameraRef(el); }}
                        roomRotation={roomRotation} 
                    />
                </Suspense>
            </Canvas>
        </div>
        
        <Hero />
        <FirstSection ref={firstSection} />
        <SecondSection ref={secondSection} />
        <ThirdSection ref={thirdSection} />
    </main>
}

export default Scene