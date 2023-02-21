import React, { Component } from "react";
import axios from "axios";
import { PortfolioSection, PortfolioTitle, PortfolioTitleSpan, BoxImg, BoxItem, Overlay, OverlaySpan, List, ListItem } from "./style.js";

class Protfolio extends Component {
    state = {
        photos:[]
    }
    componentDidMount() {
        axios.get("js/data.json").then(res => {
            // console.log(res)
            this.setState({
                photos: res.data.portfolio,
            })
        })
        
    }
    render() {
        let { photos } = this.state;
        let allWork = photos.map(res => {
            return (
                <BoxItem key={res.id}>
                    <BoxImg src={res.image} />
                        <Overlay>
                            <OverlaySpan>
                                Show Image
                            </OverlaySpan>
                        </Overlay>
                    </BoxItem>
            )
        })
        return (
            <PortfolioSection>
                <PortfolioTitle><span>My</span> Portfolio</PortfolioTitle>
                <List>
                    <ListItem active>All</ListItem>
                    <ListItem>HTML</ListItem>
                    <ListItem>Photoshop</ListItem>
                    <ListItem>Wordpress</ListItem>
                    <ListItem>Mobile</ListItem>
                </List>

                <div className="box">

                    {allWork}
                    

                </div>

            </PortfolioSection>
        )
    }
}

export default Protfolio;