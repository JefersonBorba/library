import React from "react";
import {Holder, CustomButton} from "./style"
import RightArrow from "../../icons/right-arrow.svg"
import Crime from "../../icons/police-handcuffs.svg"
import Love from "../../icons/mugs.svg"
import Scifi from "../../icons/ufo.svg"
import Mistery from "../../icons/invisible-person-of-clothes.svg"
import Sun from "../../icons/sun.svg"
import Computers from "../../icons/coding.svg"
import {useHistory} from "react-router-dom"

const Menu = () => {
    const history = useHistory();
    return <Holder>
        <CustomButton>
            <img onClick={() => history.push("/")} src={RightArrow} alt="Open Menu" />
        </CustomButton>
        <CustomButton>
            <img onClick={() => history.push("/crime")} src={Crime} alt="Crime" />
        </CustomButton>
        <CustomButton>
            <img onClick={() => history.push("/romance")} src={Love} alt="Love" />
        </CustomButton>
        <CustomButton>
            <img onClick={() => history.push("/mistery")} src={Mistery} alt="Mistery" />
        </CustomButton>
        <CustomButton>
            <img onClick={() => history.push("/scifi")} src={Scifi} alt="Scifi" />
        </CustomButton>
        <CustomButton>
            <img onClick={() => history.push("/computers")} src={Computers} alt="Computers" />
        </CustomButton>
        <CustomButton>
            <img src={Sun} alt="Light Theme" />
        </CustomButton>
    </Holder>
}

export default Menu