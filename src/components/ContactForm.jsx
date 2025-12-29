import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

const SERVICE_ID = "service_jxlgi4b";
const TEMPLATE_ID = "template_xy3r556";
const PUBLIC_KEY = "oWeMuN4wf6JuuA8gO";

const ContactForm = () => {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });
        e.target.reset()
    };
    return (
        <div className='request'>
            <form onSubmit={handleOnSubmit}>
                <h2>{t("hav")}</h2>
                <h4 style={{ color: "orange" }}>{t("lea")}</h4><br />
                <input type='text' placeholder={t("name")} id="from_name" name="from_name" required /><br />
                <input type='tel' placeholder={t("tel")} name="message" rows="8" cols="30" required /><br />
                <input type='email' placeholder={t("email")} id="from_email" name="from_email" required />
                <button type='submit' className='btn'>Leave a request</button>
            </form>
        </div>
    )
}
export default ContactForm;