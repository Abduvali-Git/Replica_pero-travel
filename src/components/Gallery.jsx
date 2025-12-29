import image1 from "../Visual/image1.png"
import image2 from "../Visual/image2.png"
import image3 from "../Visual/image3.png"
import image4 from "../Visual/image4.png"
import image5 from "../Visual/image5.png"
import image6 from "../Visual/image6.png"
import image7 from "../Visual/image7.png"
import image8 from "../Visual/image8.png"
import { useTranslation } from "react-i18next";

export default function Gallery() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="gallery">
            <div className="header"> <h1>{t("gal")}</h1> <a href="#perogif">{t("see")}</a> </div><br /><br /><br />
            <div className="imagesUp">
                <div className="minus">
                    <img src={image5} alt="" />
                    <div className="upInner">
                        <img src={image6} alt="" />
                        <img src={image7} alt="" />
                    </div>
                </div>
                <img className="alone" src={image8} alt="" />
            </div>
            <div className="imagesDown">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
        </div>
    )
}