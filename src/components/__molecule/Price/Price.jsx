import React from "react";
import "./Price.css"
import Button from "../../__atom/button/button";


function Price({newprice, oldprice}) {
    return(
        <>
<div className="price_div">
    <div className="price_box">
        <p className="newprice">{newprice}</p>
        <p className="oldprice">{oldprice}</p>
    </div>
    <Button />
</div>
        </>
    )
}

export default Price