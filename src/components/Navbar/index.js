import React from "react";
import { NavbarSection, UlList, UlListItem, Anchor, Container, Logo, LogoText } from "./style.js";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <NavbarSection>
            <Container className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <UlListItem className="list-item"><Link to="/">Home</Link></UlListItem>
                    <UlListItem className="list-item"><Anchor href="#">Work</Anchor></UlListItem>
                    <UlListItem className="list-item"><Anchor href="#">Portfolio</Anchor></UlListItem>
                    <UlListItem className="list-item"><Anchor href="#">Resume</Anchor></UlListItem>
                    <UlListItem className="list-item"><Anchor href="#">About</Anchor></UlListItem>
                    <UlListItem className="list-item"><Link to="/contact">Contact</Link></UlListItem>
                </UlList>

            </Container>
        </NavbarSection>
    )
}

export default Navbar;