import logoWhite from "../Visual/logoWhite.png"
import lastItem from "../Visual/lastItem.png"
export default function Booking() {
    return (
        <div className="booking">
            <img src={lastItem} alt="" />
            <div>
                <h1>Book a tour</h1>
                <input type="text" name="" value={"Abkhazia"} id="" /> <br />
                <input type="date" /><br />
                <input value={5} type="number" /><br /><br />
                <div className="heart">
                    <button className="btn">Book</button>
                    <div style={{marginTop:"-3px"}}><img style={{marginTop:"3px"}} src={logoWhite} alt="" /></div>
                </div>
            </div>
        </div>
    )
}