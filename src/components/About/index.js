import React from "react";
import {Creative,CreativeInfo,InfoTitle,InfoSpan,InfoDir,InfoDesc,InfoLink} from "./style.js";

const About = () =>{
    return(
        <>
            <Creative>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
                    <InfoDir>Front End Dev</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoLink href="#">explicabo</InfoLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </Creative>
        </>
    )
}

export default About;