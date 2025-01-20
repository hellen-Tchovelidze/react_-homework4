import React from "react";
import "./Header.css"
import Icone from "../../__atom/Icone/Icone";

function Header({photo}) {
    return(
        <>
<img src={photo} alt="photo" className="photo" />
<Icone />
        </>
    )
}

export default Header