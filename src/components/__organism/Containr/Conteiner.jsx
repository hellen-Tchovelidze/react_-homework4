import React from "react";
import "./Container.css"
import Button from "../../__atom/button/button";
import Header from "../../__molecule/Header/Header";
import TextH from "../../__molecule/textH/TextH";
import Paragraph from "../../__atom/Paragraph/Paragraph";
import Temperature from "../../__molecule/Temperature/Temperature";
import Price from "../../__molecule/Price/Price";



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