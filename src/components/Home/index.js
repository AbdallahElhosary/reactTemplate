import React from "react";
import { HomeSection, HomeButton, HomeDesc, HomeDescSpan, HomeInfo, HomeTitle, HomeInformation } from "./style.js";
const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Abdallh Elhosary</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeButton>Let's Begin</HomeButton>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;