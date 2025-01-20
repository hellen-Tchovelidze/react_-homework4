import React from "react";
import "./TextH.css"
import HeadingText from "../../__atom/HeadingText/HeadingText";


function TextH({text,hoticone,organicicone,wheaticone }) {
    return(
        <>
<div className="hed">
    <HeadingText text={text} />
    <div className="icon_box">
    <img src={hoticone} alt="" />
    <img src={organicicone} alt="" />
    <img src={wheaticone} alt="" />
    </div>

</div>
        </>
    )
}

export default TextH