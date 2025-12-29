import logoColor from "../Visual/logoColor.png"
import logoWhite from "../Visual/logoWhite.png"
import { useTranslation } from "react-i18next";

export default function Docs() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <>
            <h1 style={{ textAlign: "center", color: "dodgerblue" }}>{t("add")}</h1><br /><br /><br />
            <div className="opac">

                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>{t("stal")}</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>{t("mil")}</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>{t("new")}</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>{t("the")}</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>200 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>{t("din")}</h4>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around",marginLeft:"3%"}}>
                <div>
                    <h1 style={{ color: 'dodgerblue' }}>{t("imp")}</h1><br /><br /><br />
                    <p>{t("when")}</p><br />
                    <div className="cont">
                        <div className="circle">
                            <img src={logoWhite} alt="" />
                        </div>
                        <div>
                            <h2 style={{ color: 'dodgerblue' }}>{t("pass")}</h2><br />
                        </div>
                    </div><br /><br /><br />
                    <div className="cont">
                        <div className="circle">
                            <img src={logoWhite} alt="" />
                        </div>
                        <div>
                            <h2 style={{ color: 'dodgerblue' }}>{t("cit")}</h2><br />
                            <p>{t("desc4")}</p>
                        </div>
                    </div>
                </div>
                <div className="greys">
                    <div>
                        <i>{t("grey1")}</i>
                    </div><br />
                    <div>
                        <i>{t("grey2")}</i>
                    </div>
                </div>
            </div>
        </>
    )
}