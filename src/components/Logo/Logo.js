import React from "react";
import Tilty from "react-tilty";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilty
                className="tilty br2 shadow-2"
                style={{ height: "150px", width: "150px" }}
            >
                <div className="pa3">
                    <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
                </div>
            </Tilty>
        </div>
    );
};

export default Logo;
