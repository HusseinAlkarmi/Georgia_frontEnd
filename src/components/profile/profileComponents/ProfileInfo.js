import React from "react";
import LeftImage from "./LeftImage";
import RightInfo from "./RightInfo";

function profileInfo(){



    return(
        <>
        <div className="container">

            <div className="row justify-content-center mt-5">
                <LeftImage/>
                <RightInfo/>
            </div>

        </div>
        </>
    );
}

export default profileInfo;