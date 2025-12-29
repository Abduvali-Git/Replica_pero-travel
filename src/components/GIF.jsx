import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useTransition } from "react";
import { useTranslation } from "react-i18next";
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
const languages = [
    { code: "en", lang: "En" },
    { code: "ru", lang: "Ру" },
]


export default function Home() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

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
                        <Link to="/">{t("home")}</Link>
                        <Link to="/ex">{t("excursions")}</Link>
                        <Link to="/third">{t("personal")}</Link>
                    </div>

                    <div className="btn-container">
                        {languages.map((lng) => {
                            return (
                                <button className={lng.code === i18n.language ? "selected" : ""}
                                    key={lng.code} onClick={() => changeLanguage(lng.code)}>
                                    {lng.lang}
                                </button>
                            )
                        })}
                    </div>

                </nav>

                <div className="medflex">
                    <div className="med">
                        <h1>{t("travel")}</h1>
                        <h2 className="yellow">{t("with")}</h2>
                        <h1 className="outline">PERO TRAVEL</h1><br /><br /><br />
                        <Link to="/ex"><button className="btn">{t("to")}</button></Link>
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