import axios from "axios";
import React, { Component } from "react";
import { WorkSection, WorkTitle,Container, Span, Part, PartIcon, PartTitle, PartDesc, Line } from "./style.js";
class Work extends Component {
    state = {
        work:[]
    }
    componentDidMount() {
        axios.get("js/data.json").then(res => {
            // console.log(res)
            this.setState({
                work: res.data.works,
            })
        })
        
    }
    render() {
        let { work } = this.state;
        let allWork = work.map(res => {
            return (
                <Part first={res.id} key={res.id}>
                        <PartIcon className={res.icon_name}></PartIcon>
                        <PartTitle>{res.title }</PartTitle>
                        <Line />
                        <PartDesc>
                            {res.body}
                        </PartDesc>
                </Part>
            )
        })
        return(
        <WorkSection>
            <Container className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {allWork}
                
            </Container>
        </WorkSection>
    )
    }
}

export default Work;