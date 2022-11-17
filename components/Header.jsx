import TheNav from "./Nav";

export default function Header() {
return (
    <header id="header">
        <TheNav />
        <div className="header-container">
            <div className="iimscape-texts">
                <div className="texts">
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                    <span>iimscape -</span>
                    <span>間抜け-</span>
                </div>
            </div>
            <div className="left">
                <h2>5 <br/>Énigmes</h2>
                <h4>
                    À résoudre suivant les 5 axes de l'
                    <a href="iim.fr">
                        IIM
                    </a>.
                </h4>
                <div className="blured-shape"></div>
            </div>
            <div className="right">
                <img className="char" src="/assets/imgs/char-cyberpunk.png" alt="Picture of a cyberpunk character" />
                <div className="blured-shape"></div>
            </div>
            <div className="scroll-indicator-container">
                <div className="scroll-indicator"></div>
                <div className="scroll-indicator"></div>
                <div className="scroll-indicator"></div>
                <span>Scroll</span>
            </div>
        </div>
        
    </header>
    )
}