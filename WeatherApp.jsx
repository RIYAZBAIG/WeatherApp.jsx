import React, {useState} from "react"
import "./mystyle.css"

export const WeatherApp=()=>{
    

    const [city, setCity]=useState(null);
    const [search, setSearch]=useState("Mumbai")
    return(
        <div className="box" >
           <div className="inputdata">
            <input type="search"
            classname="inputfild"
            onChange={()=>{

            }}
            />
           </div>
<div className="info">
            <h2 className="location">
            <i class="fa-solid fa-street-view"></i>{city}
            </h2>
                <h1 className="temp">
                    5tempmin_max           </h1>
                <h1 className="tempmin_max">
                    min:5.25 cel | max: cel 5.25 cel
                </h1>
           </div>
           <div className="waw-one"></div>
           <div className="waw-two"></div>
           <div className="waw-three"></div>
        </div>
    )
}