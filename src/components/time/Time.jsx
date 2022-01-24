import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

import { withTranslator } from "../../hoc/withTranslator";
import { getTime } from "../../helpers/timeHelper";

import { ReactComponent  as TimeIcon } from "../../icons/time.svg";

import "./Time.scss";
import { useCallback } from "react/cjs/react.development";

const SHOW_TIME = "showTime";

function _Time({ translate}) {
    const [now, setNow] = useState(getTime());
    const [show, setShow] = useState(JSON.parse(localStorage.getItem(SHOW_TIME)));

    useEffect(() => {
        const intervalId = setInterval(() => {setNow(getTime())}, 1000);
        return () => clearInterval(intervalId)
    }, []);

    const handleToggleTime = () => {
        setShow(!show);
        localStorage.setItem(SHOW_TIME, !show);
    }

    return (
        <div className="time-container">
            {show && <span> {now} </span>}

            <span className="tooltip-time"><TimeIcon onClick={handleToggleTime} title={translate("time.toggle.tooltip")} /> </span>
            
            
        </div>
       
    )
}

export const Time = withTranslator(_Time);