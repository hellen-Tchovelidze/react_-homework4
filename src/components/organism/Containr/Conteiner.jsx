import React from "react";
import "./Container.css"
import Button from "../../atom/button/button";
import Header from "../../molecule/Header/Header";
import TextH from "../../molecule/textH/TextH";
import Paragraph from "../../atom/Paragraph/Paragraph";
import Temperature from "../../molecule/Temperature/Temperature";
import Price from "../../molecule/Price/Price";



function Conteiner({photo, text, hoticone, organicicone, wheaticone,Paragraphtext, cal, pharengate, celsuse, newprice, oldprice }) {
    return(
        <>
        <div className="box">
<Header photo={photo}/>
<TextH text={text} hoticone={hoticone} organicicone={organicicone} wheaticone={wheaticone}/>
<Paragraph Paragraphtext={Paragraphtext}/>
<Temperature cal={cal} pharengate={pharengate} celsuse={celsuse}/>
<Price newprice={newprice} oldprice={oldprice}/>
        </div>

        </>
    )
}

export default Conteiner