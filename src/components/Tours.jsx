import { useState } from "react";

export default function Tours() {
    const tabs = ["BUS TOUR", "JEEPING", "YACHTING", "CANYONING"];
    const [active, setActive] = useState(0); // изначально первый
    return (
        <div className="solomid">
            <div className="tours">

                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActive(index)}
                        style={{
                            borderBottom: active === index ? "2px solid dodgerblue" : "none",
                            color: active === index ? "dodgerblue" : "black",
                            paddingBottom: "4px",
                            cursor: "pointer"
                        }}
                    >{tab}</div>))}


            </div><br /><br /><br />
            <div className="inputs">
                <input value={"Abkhazia"} type="text" />
                <input type="date" />
                <input value={"5 people"} type="text" />
            </div><br />
            <button className="btn">Show</button>
        </div>
    )
}