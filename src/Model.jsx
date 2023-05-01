import React, { forwardRef, useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useTheme } from "./Components/ThemeContext";
import * as THREE from 'three'

const videoPath = "/textures/kda.mp4"

const Model = forwardRef((
  {scale, rotationY, lampRef, streetLampRef}, 
  ref
  ) => {

  const { theme } = useTheme()

  const { nodes, materials } = useGLTF("/models/finale.glb");
  const videoTexture = useVideoTexture(videoPath)
  videoTexture.flipY = false
  
  return (
    <group scale={scale} rotation-y={rotationY} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PC.geometry}
        material={materials["Nintendo Deck"]}
        position={[-9.77, 9.02, -12.48]}
        rotation={[0, -0.8, 0]}
      />
      <group position={[0.26, 17.85, -0.31]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials["Room Floor"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Room Wall"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["Room Wall"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.outdoor_floor.geometry}
        material={materials["Room Floor"]}
        position={[-10.31, -1.4, 25.49]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PC_leg.geometry}
        material={materials["Table Leg Black"]}
        position={[-8.36, 6.27, -9.47]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window.geometry}
        material={materials["Keyboard Base"]}
        position={[-5.95, 20.88, -23.63]}
        rotation={[0, -0.8, 0]}
      />
      {/* Street lamp */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        position={[-13.29, -0.99, 20.81]}
        rotation={[0, -0.8, 0]}
      >
        {
          (theme === 'light') ? 
          <meshPhysicalMaterial 
            roughness={0}
            color={'#FFC000'}
            ior={3}
            transmission={1}
            opacity={1}
          /> : 
          <meshStandardMaterial 
            emissive={'#FFC000'}
            emissiveIntensity={5}
          />
        }
      </mesh>
      {
        (theme === 'dark') ?
        <pointLight
          ref={streetLampRef}
          position={[-13.29, 1.5, 20.81]} 
          color={'#FFC000'} 
          intensity={2} 
          // distance={3}
          // power={100}
        /> : ''
      }
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Book cover grey"]}
        position={[-13.29, -0.99, 20.81]}
        rotation={[0, -0.8, 0]}
      />
      <group position={[-4.89, 2.49, 29.07]} rotation={[Math.PI / 2, 0, 0.8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials["Book cover orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_2.geometry}
          material={materials["Book cover white"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_3.geometry}
          material={materials["Black button"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_4.geometry}
          material={materials["Book cover grey"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.Coffee}
        position={[-12.34, -0.74, 27.37]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Med Coffee"]}
        position={[-8.59, -0.74, 23.06]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.apple_logo.geometry}
        material={materials.apple_logo}
        position={[-19.12, 6.23, -1.01]}
        rotation={[Math.PI / 2, 0, -0.78]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Light Coffee"]}
        position={[-11.59, -0.74, 24.1]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Beanbag.geometry}
        material={materials.Beanbag}
        position={[0.23, 6.21, -19.61]}
        rotation={[0, -1.19, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Top.geometry}
        material={materials["Table top"]}
        position={[-14.76, 5.83, -7.31]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Macbook.geometry}
        material={materials.Macbook}
        position={[-18.87, 5.95, -1.25]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_leg_hold.geometry}
        material={materials["Table Leg"]}
        position={[-20.61, 0.3, -1.63]}
        rotation={[0, -0.8, 0]}
      />
      <group position={[-14.43, 6.16, -6.38]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Mouse pad mid"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Mousepad padding"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nintendo_Deck.geometry}
        material={materials["Nintendo Deck"]}
        position={[-22.63, 6.73, -4.65]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nintendo_Body.geometry}
        material={materials["Nintedo Body"]}
        position={[-22.63, 6.73, -4.65]}
        rotation={[0, -0.8, 0]}
      />
      <group position={[-20.61, 0.82, -1.63]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Table Leg"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Table Leg Black"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nintendo_Screen.geometry}
        material={materials["Nintendo Screen"]}
        position={[-22.6, 6.78, -4.62]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Black button"]}
        position={[-21.63, 6.86, -5.47]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Nintendo Red Controller"]}
        position={[-21.8, 6.99, -5.5]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Black button"]}
        position={[-21.74, 7.49, -5.39]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials["Black button"]}
        position={[-21.71, 7.28, -5.41]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials["Black button"]}
        position={[-21.63, 7.17, -5.48]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Black button"]}
        position={[-21.64, 7.39, -5.48]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Black button"]}
        position={[-21.56, 7.29, -5.55]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Nintendo Blue Controller"]}
        position={[-23.47, 6.98, -3.82]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Black button"]}
        position={[-21.67, 4.28, -3.52]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere012.geometry}
        material={materials["Black button"]}
        position={[-21.7, 6.67, -5.42]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={materials["Black button"]}
        position={[-21.59, 6.87, -5.44]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Black button"]}
        position={[-23.45, 7.25, -3.66]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials["Black button"]}
        position={[-23.46, 6.97, -3.66]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere007.geometry}
        material={materials["Black button"]}
        position={[-23.53, 6.87, -3.59]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008.geometry}
        material={materials["Black button"]}
        position={[-23.39, 6.87, -3.73]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={materials["Black button"]}
        position={[-23.46, 6.76, -3.65]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard.geometry}
        material={materials["Keyboard Base"]}
        position={[2.82, -0.45, -2.82]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor_Screen.geometry}
        position={[3.05, -1.51, -3.03]}
        rotation={[0, -0.8, 0]}
      >
        <meshBasicMaterial 
          map={videoTexture}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere010.geometry}
        material={materials["Black button"]}
        position={[-23.42, 7.26, -3.62]}
        rotation={[0, -0.8, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mouse.geometry}
        material={materials["Keyboard Base"]}
        position={[-11.94, 6.3, -8.37]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Black button"]}
        position={[-21.68, 7.63, -5.59]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Trashbin body"]}
        position={[-25.68, 0.92, -2.19]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Table top"]}
        position={[10.44, 18.72, -17.85]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere011.geometry}
        material={materials["Black button"]}
        position={[-23.57, 7.61, -3.7]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials.Monitor}
        position={[3.04, -1.51, -3.04]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mouse_scroll.geometry}
        material={materials["Keypad light green"]}
        position={[-11.94, 6.41, -8.37]}
        rotation={[0, -0.8, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Wood material"]}
        position={[-24.74, -0.53, -1.31]}
        rotation={[0, -0.8, 0]}
      />
      <group position={[-3.51, -0.17, 0.4]} rotation={[0, -0.52, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials["Black button"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_2.geometry}
          material={materials["Table Leg"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Wood material"]}
        position={[-25.68, 0.92, -2.19]}
        rotation={[0, -0.8, 0]}
      />
      <group position={[-4.36, 0.51, 1.89]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Table Leg"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Table Leg Black"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["light wood"]}
        position={[13.09, 1.45, -15.92]}
        rotation={[0, 1.19, 0.09]}
      />
      <group
        position={[-5.22, -0.17, 3.39]}
        rotation={[-Math.PI, 0.52, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials["Black button"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_2.geometry}
          material={materials["Table Leg"]}
        />
      </group>
      <group position={[-16.11, 6.47, -4.5]} rotation={[0, -0.8, -0.08]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Keypad light green"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Keypad dark green"]}
        />
      </group>
      <group position={[10, 20.2, -18.4]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube101.geometry}
          material={materials["Keyboard Base"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube101_1.geometry}
          material={materials["Book cover blue"]}
        />
      </group>
      <group
        position={[6.69, 19.28, -21.98]}
        rotation={[0, -0.8, -Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube104.geometry}
          material={materials["Book cover grey"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube104_1.geometry}
          material={materials["Book paper yelowish"]}
        />
      </group>
      <group
        position={[-2.87, -0.17, 2.75]}
        rotation={[Math.PI, -1.05, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials["Black button"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_2.geometry}
          material={materials["Table Leg"]}
        />
      </group>
      <group position={[-5.86, -0.17, 1.04]} rotation={[0, 1.05, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials["Black button"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_2.geometry}
          material={materials["Table Leg"]}
        />
      </group>
      {/* Lamp */}
      <group position={[13.48, 22.06, -14.52]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={materials["Table Leg"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_1.geometry}
          material={materials.Beanbag}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_2.geometry}
        >
          {
            (theme === 'light') ? 
            <meshStandardMaterial 
              color={'#F2EECB'}
              roughness={1}
              side={THREE.DoubleSide}
            /> : 
            <meshStandardMaterial 
              emissive={'#FFC000'}
              emissiveIntensity={5}
              side={THREE.DoubleSide}
            />
          }
        </mesh>
        {
          (theme === 'dark') ?
          <pointLight
            ref={lampRef}
            color={'yellow'} 
            intensity={0.8} 
            // distance={4}
            // power={100}
          /> : ''
        }
      </group>
      <group position={[9.22, 20.2, -19.2]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099.geometry}
          material={materials["Book cover white"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_1.geometry}
          material={materials["Book paper yelowish"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Reversal-Forex-Chart-Patterns-Cheat-Sheet-1"].geometry}
        material={materials["Reversal-Forex-Chart-Patterns-Cheat-Sheet-1"]}
        position={[-19.93, 18.55, -9.1]}
        rotation={[Math.PI / 2, 0, -0.78]}
      />
      <group position={[9.61, 20.2, -18.8]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube100.geometry}
          material={materials["Book cover green"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube100_1.geometry}
          material={materials["Keyboard Base"]}
        />
      </group>
      <group position={[10.39, 20.2, -18]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube102.geometry}
          material={materials["Book cover orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube102_1.geometry}
          material={materials["Keyboard Base"]}
        />
      </group>
      <group position={[7.78, 19.92, -20.87]} rotation={[0, -0.8, -1.99]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube105.geometry}
          material={materials["Book cover purple"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube105_1.geometry}
          material={materials["Book paper yelowish"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials["Nintendo Blue Controller"]}
        position={[-22.04, 20.04, -6.62]}
        rotation={[0, -0.8, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Table top"]}
        position={[12.14, 3.41, -14.32]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["light wood"]}
        position={[10.54, 1.45, -15.26]}
        rotation={[-Math.PI, 0.38, -3.06]}
      />
      <group
        position={[13.24, 3.88, -14.14]}
        rotation={[-Math.PI, 1.46, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube107.geometry}
          material={materials["Book cover grey"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube107_1.geometry}
          material={materials["Book paper yelowish"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["light wood"]}
        position={[11.2, 1.45, -12.71]}
        rotation={[-Math.PI, -1.19, -3.06]}
      />
      <group position={[-18.52, 20.75, -10.72]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={materials["Wood material"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097_1.geometry}
          material={materials["light wood"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere015.geometry}
        material={materials["Wood material"]}
        position={[21.73, 1.49, 0.2]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["istockphoto-1388252972-612x612"].geometry}
        material={materials["istockphoto-1388252972-612x612"]}
        position={[-20.98, 22.57, -8.14]}
        rotation={[Math.PI / 2, 0, -0.78]}
      />
      <group position={[10.65, 4.07, -13.52]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials["Trashbin body"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_1.geometry}
          material={materials["Table Leg"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_2.geometry}
          material={materials.Coffee}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Nintendo Red Controller"]}
        position={[-20.79, 23.48, -7.85]}
        rotation={[0, -0.8, Math.PI / 2]}
      />
      <group position={[20.26, 14.9, -2.96]} rotation={[1.32, -0.25, -0.81]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.download.geometry}
          material={materials.download}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.download_1.geometry}
          material={materials["Wood material"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["light wood"]}
        position={[23.53, 1.82, -1.88]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.Monitor}
        position={[-5.21, -1.16, 1.91]}
        rotation={[0, -1.56, 0]}
      />
      <group position={[23.17, -1.61, -1.53]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["light wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials["Table top"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere013.geometry}
        material={materials["Wood material"]}
        position={[21.73, 8.2, 0.2]}
        rotation={[0, -0.8, 0]}
      />
      <group position={[21.43, 14.34, -1.56]} rotation={[0, -0.8, 0.14]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.Monitor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["scent diffuser"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["light wood"]}
        position={[13.75, 1.45, -13.37]}
        rotation={[0, -0.38, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials["Med Coffee"]}
        position={[21.14, 11.65, -2.69]}
        rotation={[0, -1.37, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials["Keypad light green"]}
        position={[14.81, 5.2, -7.66]}
        rotation={[Math.PI, -1.57, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere014.geometry}
        material={materials["Wood material"]}
        position={[21.73, 4.88, 0.2]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Keypad dark green"]}
        position={[14.9, 5, -5.56]}
        rotation={[0, -0.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["Keypad dark green"]}
        position={[18.86, 5.09, -9.81]}
        rotation={[-Math.PI, 1.1, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials["Keypad light green"]}
        position={[15.9, 5.2, -10.48]}
        rotation={[Math.PI, -0.3, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials["Book cover green"]}
        position={[17.97, 4.97, -5.07]}
        rotation={[0, 0.2, 0]}
      />
      <group position={[21.15, 10.41, -2.65]} rotation={[0, -1.37, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112.geometry}
          material={materials.Coffee}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_1.geometry}
          material={materials["Med Coffee"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_2.geometry}
          material={materials["Light Coffee"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Book paper yelowish"]}
        position={[21.32, 11.99, -2.56]}
        rotation={[0, -0.62, 0.79]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Book cover green"]}
        position={[14.2, 5.08, -7.84]}
        rotation={[0, -1.48, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials["Keypad dark green"]}
        position={[13.53, 5, -9.35]}
        rotation={[Math.PI, -1.21, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials["Keypad dark green"]}
        position={[19.54, 5.21, -8.87]}
        rotation={[-Math.PI, 1.46, -Math.PI]}
      />
      <group position={[16.95, 4.56, -8.37]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.Ceramic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials.Soil}
        />
      </group>
      <group position={[17.35, 1.18, -11.42]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube115.geometry}
          material={materials["light wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube115_1.geometry}
          material={materials["Table top"]}
        />
      </group>
      <group position={[-3.76, -0.32, 19.47]} rotation={[0, -0.8, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials["Black button"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials["Gold metalic"]}
        />
      </group>
      <group
        position={[24.6, 14.39, 0.74]}
        rotation={[Math.PI, -0.78, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={materials.Ceramic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095_1.geometry}
          material={materials["Nintendo Deck"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095_2.geometry}
          material={materials["Gold metalic"]}
        />
      </group>
    </group>
  );
})

export default Model
useGLTF.preload("/models/finale.glb");

