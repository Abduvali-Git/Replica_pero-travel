import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import gif from "../Visual/main.gif";
import img2 from "../Visual/image2.png";
import img3 from "../Visual/image3.png";
import img4 from "../Visual/image4.png";
import img5 from "../Visual/image5.png";

const slides = [
    { id: 1, img: gif },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
];
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef(null);

    useEffect(() => {
        centerSlide(activeIndex);
    }, [activeIndex]);

    const centerSlide = (index) => {
        const track = trackRef.current;
        const card = track.children[index];

        const gap = 20;
        const cardWidth = card.offsetWidth + gap;
        const offset =
            index * cardWidth -
            (window.innerWidth / 2 - cardWidth / 2);

        track.style.transform = `translateX(${-offset}px)`;
    };
    return (
        <>
            { }
            <div className="perogif" id="perogif" style={{ backgroundImage: `url(${slides[activeIndex].img})` }}>
                <nav>

                    <Link to="/"> <img src={logoWhite} alt="" /></Link>

                    <div className='links'>
                        <Link to="/">Home</Link>
                        <Link to="/ex">Excursions</Link>
                        <Link to="/third">Personal account</Link>
                    </div>
                    <div className="i18">
                        <button>En</button>
                        <button>Ru</button>
                    </div>
                </nav>

                <div className="medflex">
                    <div className="med">
                        <h1>TRAVEL</h1>
                        <h2 className="yellow">with</h2>
                        <h1 className="outline">PERO TRAVEL</h1><br /><br /><br />
                        <Link to="/ex"><button className="btn">To excursions </button></Link>
                    </div>
                    <div className="column">
                        <img src={logoWhite} alt="" />
                        <img src={logoWhite} alt="" />
                        <img src={logoWhite} alt="" />
                    </div>
                </div>
            </div>
            <div className="wrapper1">


                { }
                <div className="slider1">
                    <div className="track1" ref={trackRef}>
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`card1 ${index === activeIndex ? "active" : ""}`}
                                style={{ backgroundImage: `url(${slide.img})` }}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}