import logoColor from "../Visual/logoColor.png"
import logoWhite from "../Visual/logoWhite.png"
export default function Bottom() {
    return (
        <div className="bottom">
            <img src={logoColor} alt="" />
            <div className="section">
                <a href="#perogif">Home</a>
                <a href="#perogif">Excursions</a>
                <a href="#perogif">Personal account</a>
            </div>
            <div className="section">
                <a href="#perogif"> +7 964 944 18 74</a>
                <a href="#perogif"> +7 918 919 98 28</a>
                <a href="#perogif"> Telegramm-bot PeroTravel</a>
            </div>
            <div className="section">
                <a href="#perogif">office@perotravel.ru</a>
                <div className="threelog">
                    <a href="#perogif"><img src={logoWhite} alt="" /></a>
                    <a href="#perogif"><img src={logoWhite} alt="" /></a>
                    <a href="#perogif"><img src={logoWhite} alt="" /></a>
                </div>
            </div>
        </div>
    )
}