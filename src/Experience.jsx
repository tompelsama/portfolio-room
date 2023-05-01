import { forwardRef, useEffect, useRef, useState } from 'react'
import { OrbitControls, OrthographicCamera, PerspectiveCamera, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import Sizes from './Utils/Sizes'
import { useTheme } from "./Components/ThemeContext";
import Model from './Model'
import * as THREE from 'three'
import { gsap } from 'gsap'

const sizes = new Sizes()

const Experience = forwardRef(({ roomRotation, lampRef, streetLampRef }, ref) => {

    const { theme } = useTheme()
    // console.log(theme)
    const [scale, setScale] = useState(0.1)
    const directionalLight = useRef()
    const ambientLight = useRef()
   
    
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
    // useHelper(lampLight, THREE.PointLight, 0.8)

    // const { cameraPosition, cameraRotation } = useControls('camera', {
    //     cameraPosition:
    //     {
    //         value: { x: 0, y: 6.7, z: 10 },
    //         step: 0.5
    //     },
    //     cameraRotation:
    //     {
    //         value: { x: -Math.PI / 6, y: 0, z: 0 },
    //         step: 0.5
    //     }
    // })

    // const { lightPosition } = useControls('light', {
    //     lightPosition:
    //     {
    //         value: { x: -1.5, y: 7, z: 3 },
    //         step: 0.5
    //     }
    // })

    useFrame((state, delta) => {
        
    })

    useEffect(() => {
        
        if(window.innerWidth < 600)
            setScale(0.07)

        // console.log(this.sunLight);
        if (theme === "dark") {
            gsap.to(directionalLight.current.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            gsap.to(ambientLight.current.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            gsap.to(directionalLight.current, {
                intensity: 0.7,
            });
            gsap.to(ambientLight.current, {
                intensity: 0.1,
            });
        } 
        else {
            gsap.to(directionalLight.current.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            gsap.to(ambientLight.current.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            gsap.to(directionalLight.current, {
                intensity: 1,
            });
            gsap.to(ambientLight.current, {
                intensity: 0.2,
            });
        }
    }, [theme])

    return <>
        {/* <axesHelper args={[5]} /> */}

        <PerspectiveCamera
            fov={35}
            aspect={sizes.aspect}
            near={0.1}
            far={1000}
            position={[29, 14, 12]}
        />

        <OrthographicCamera
            left={(-sizes.aspect * sizes.frustrum) / 2}
            right={(sizes.aspect * sizes.frustrum) / 2}
            top={sizes.frustrum / 2}
            bottom={-sizes.frustrum / 2}
            near={-50}
            far={50}
            position={[ 0, 6.7, 10 ]} 
            rotation={[  -Math.PI / 6, 0, 0 ]}
            // rotationX = {-Math.PI / 6}
            manual
            makeDefault
            onUpdate={(c) => c.updateProjectionMatrix()}
        />

        {/* <OrbitControls enableZoom={true} /> */}

        <directionalLight 
            ref={directionalLight}
            castShadow 
            position={ [ -1.5, 7, 3 ] } 
            intensity={ 1 } 
            shadow-normalBias={ 0.05 }
            shadow-mapSize={ [ 2048, 2048 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 20 }
            shadow-camera-top={ 15 }
            shadow-camera-right={ 15 }
            shadow-camera-bottom={ - 15 }
            shadow-camera-left={ - 15 }
        />
        <ambientLight ref={ambientLight} intensity={ 0.2 } />
        
        <Model 
            ref={ref} 
            scale={scale} 
            rotationY={roomRotation}
            lampRef={lampRef}
            streetLampRef={streetLampRef}
        />

        {/* <OrbitControls /> */}

        {/* Floor */}
        <mesh 
            receiveShadow 
            position-y={-0.5} 
            rotation-x={-Math.PI / 2}
        >
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color={'white'} />
        </mesh>
    </>
})

export default Experience