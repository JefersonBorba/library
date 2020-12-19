import React from "react";
import {Holder} from "./style"
import RightArrow from "../../icons/right-arrow.svg"
import Crime from "../../icons/police-handcuffs.svg"
import Love from "../../icons/mugs.svg"
import Scifi from "../../icons/ufo.svg"
import Mistery from "../../icons/invisible-person-of-clothes.svg"
import Sun from "../../icons/sun.svg"

const Menu = () => {
    return <Holder>
        <img src={RightArrow} alt="Open Menu" />
        <img src={Crime} alt="Crime" />
        <img src={Love} alt="Love" />
        <img src={Mistery} alt="Mistery" />
        <img src={Scifi} alt="Scifi" />
        <img src={Sun} alt="Light Theme" />
    </Holder>
}

export default Menu