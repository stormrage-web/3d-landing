import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, Preload, Stage, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile, isTablet}) => {
    const {nodes, materials} = useGLTF('./maritami/maritami3.glb')
    return (
        <mesh
            geometry={nodes.maritami_1001.geometry}
            material={materials['Material.002']}
            position={[1, 1, 1]}
            rotation={[1.553, -0.112, 0.228]}
            scale={isMobile ? 0.5 : isTablet ? 5 : 1}
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
                intensity={-351.413}
                decay={2}
                position={[4.076, 5.904, -1.005]}
                rotation={[-1.839, 0.602, 0.932]}
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
