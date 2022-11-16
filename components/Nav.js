import { createRoot } from 'react-dom/client';
import { ReactSVG } from 'react-svg';
import { useRef } from "react";
import ReactDOM from "react-dom/client";

export default function Nav() {
    return (
    <nav>
        {/* <ReactSVG /> */}
        <a href='/'><img src='/assets/imgs/e-lift.png' alt='Logo' /></a>
    </nav>
)
}
// const navRef = useRef()
// const root = createRoot(navRef)
// root.render(<ReactSVG src="/assets/imgs/logo_e-lift.svg" />)