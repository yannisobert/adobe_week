import React from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const { useRef } = React;

const imgLoadRef = useRef();
const LoadRef = useRef();

export default function Loading() { 
    return (
        <div ref={LoadRef} className='loading'>
            <img ref={imgLoadRef} src="https://logos-marques.com/wp-content/uploads/2022/07/Cyberpunk-2077-Logo.png" alt="Logo"/>
        </div>
    );
}



