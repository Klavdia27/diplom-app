import React, { useEffect, useState } from "react";
import { getTime } from "../../helpers/timeHelper";
import { withTranslator } from "../../hoc/withTranslator";
import { ReactComponent  as TimeIcon } from "../../icons/time.svg";
import "./Time.scss";

const SHOW_TIME = "showTime";

function _Time({ translate}) {
    const [now, setNow] = useState(getTime());
    const [show, setShow] = useState(JSON.parse(localStorage.getItem(SHOW_TIME)));

    useEffect(() => {
        const intervalId = setInterval(() => {setNow(getTime())}, 1000);
        return () => clearInterval(intervalId)
    }, []);

    useEffect(() => {
        document.title = `Time - ${now}`
    }, [now]);

    const handleToggleTime = () => {
        setShow(!show);
        localStorage.setItem(SHOW_TIME, !show);
    }
    return (
        <div className="time-container">
            {show && <span> {now} </span>}
            
            <TimeIcon onClick={handleToggleTime} title={translate("time.toggle.tooltip")}/>
        </div>
       
    )
}

export const Time = withTranslator(_Time);