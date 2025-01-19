import React from "react";
import "./Temperature.css"


function Temperature({cal, pharengate, celsuse}) {
    return(
        <>
<div className="temp">
<p className="cal">{cal}</p>
<p className="cal">{pharengate}</p>
<p className="cal">{celsuse}</p>
</div>
        </>
    )
}

export default Temperature