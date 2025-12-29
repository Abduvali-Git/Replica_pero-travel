import { useEffect, useRef, useState } from "react";
import caption from "../Visual/caption.jpg"
import sochi from "../Visual/sochi.jpg"
import captionss from "../Visual/captionss.jpg"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cardsData = [
    { id: 1, title: "Excursions " },
    { id: 2, title: "Excursions " },
    { id: 3, title: "Excursions " },
    { id: 4, title: "Excursions " },
];

export default function Loop() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const cardWidth = 340;
    const total = cardsData.length;

    useEffect(() => {
        trackRef.current.style.transform = `translateX(${-cardWidth}px)`;
    }, []);

    const moveTo = (i) => {
        const track = trackRef.current;
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(${-cardWidth * (i + 1)}px)`;
    };

    const next = () => {
        const newIndex = index + 1;
        setIndex(newIndex);
        moveTo(newIndex);

        if (newIndex === total) {
            setTimeout(() => {
                trackRef.current.style.transition = "none";
                setIndex(0);
                trackRef.current.style.transform = `translateX(${-cardWidth}px)`;
            }, 500);
        }
    };

    const prev = () => {
        const newIndex = index - 1;
        setIndex(newIndex);
        moveTo(newIndex);

        if (newIndex < 0) {
            setTimeout(() => {
                trackRef.current.style.transition = "none";
                setIndex(total - 1);
                trackRef.current.style.transform = `translateX(${-cardWidth * total}px)`;
            }, 500);
        }
    };

    return (
        <div className="slider-wrapper">
            <div className="header"> <h1>{t("pop")}</h1> <a href="">{t("see")}</a> </div><br /><br /><br />
            <div className="slider">
                <div className="track" ref={trackRef}>
                    <div className="card" style={{ background: `url(${caption})`, backgroundPosition: "center", backgroundSize: "cover" }}> <Link to="/third"><button className="btn">{t("more")}</button></Link> </div>

                    {cardsData.map(card => (
                        <div className="card" style={{ background: `url(${sochi})`, backgroundPosition: "center", backgroundSize: "cover" }} key={card.id}><Link to="/third"><button className="btn">{t("more")}</button></Link></div>
                    ))}

                    <div className="card" style={{ background: `url(${captionss})`, backgroundPosition: "center", backgroundSize: "cover" }}><Link to="/third"><button className="btn">{t("more")}</button></Link></div>
                </div>
            </div><br /><br />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <div>
                    <button className="arrow" onClick={prev}>‹</button>
                    <button className="arrow" onClick={next}>›</button>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar"
                        style={{ transform: `translateX(${index * 100}%)` }}
                    />
                </div>
            </div>
        </div >
    );
}