import React from "react";
import "./TextH.css"
import HeadingText from "../../atom/HeadingText/HeadingText";


function TextH({text,hoticone,organicicone,wheaticone }) {
    return(
        <>
<div className="hed">
    <HeadingText text={text} />
    <div>
    <img src={hoticone} alt="" />
    <img src={organicicone} alt="" />
    <img src={wheaticone} alt="" />
    </div>

</div>
        </>
    )
}

export default TextH