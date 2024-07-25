import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, Stage, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile, isTablet}) => {
    const {nodes, materials} = useGLTF('./kepasta/kepasta.glb')
    return (
        <mesh
            geometry={nodes.kepasta_1.geometry}
            material={materials['Material.001']}
            position={[1, 1, 1]}
            rotation={[1.603, -0.012, 0.628]}
            scale={isMobile ? 0.1 : isTablet ? 5 : 2}
        />
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const mobMediaQuery = window.matchMedia("(max-width: 860px)");
        const tabMediaQuery = window.matchMedia("(min-width: 1440px) and (min-height: 1440px)");
        setIsMobile(mobMediaQuery.matches);
        setIsTablet(tabMediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        const handleTabletMediaQueryChange = (event) => {
            setIsTablet(event.matches);
        };
        mobMediaQuery.addEventListener("change", handleMediaQueryChange);
        tabMediaQuery.addEventListener("change", handleTabletMediaQueryChange);
        return () => {
            mobMediaQuery.removeEventListener("change", handleMediaQueryChange);
            tabMediaQuery.removeEventListener("change", handleTabletMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            gl={{preserveDrawingBuffer: true}}
            style={{height: isMobile ? "400px" : isTablet ? "1000px" : "750px"}}
        >
            <pointLight
                color="#a1a1a1"
                distance={1000}
                intensity={1.113}
                decay={2}
                position={[0.076, 0.204, -0.005]}
                rotation={[-2.939, 2.402, 2.032]}
            />
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={1}
                />
                <Stage intensity={0.01} environment="dawn">
                    <Computers isMobile={isMobile} isTablet={isTablet}/>
                </Stage>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;
