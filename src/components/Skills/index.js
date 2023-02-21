import React, { Component } from "react";
import axios from "axios";
import { Profile, ProfileSpan, ProfileTitle, ProfilesList, ProfilesListItem, SkillItem, SkillsDesc, SkillsSection, Bar, BarTitle, BarPerc, BarParent, BarSpan } from "./style.js";

class Skills extends Component {
    state = {
        Skills: []
    }
    componentDidMount() {
        axios.get("js/data.json").then(res => {
            this.setState({
                Skills: res.data.Skills,
            })
        })

    }
    render() {
        let { Skills } = this.state;
        let allSkills = Skills.map(res => {
            return (
                <Bar key={res.id}>
                    <BarTitle>{res.name}</BarTitle>
                    <BarPerc >{res.precentage}</BarPerc>
                    <BarParent>
                        <BarSpan width={res.precentage}></BarSpan>
                    </BarParent>
                </Bar>
            )
        })
        return (
            <SkillsSection>
                <div className="container">
                    <Profile>
                        <ProfileTitle><span>My </span>Profile</ProfileTitle>
                        <ProfilesList>
                            <ProfilesListItem>
                                <ProfileSpan>Name</ProfileSpan>
                                Hamza Nabil
                            </ProfilesListItem>
                            <ProfilesListItem>
                                <ProfileSpan>Birthday</ProfileSpan>
                                21/1/1996
                            </ProfilesListItem>
                            <ProfilesListItem>
                                <ProfileSpan>Address</ProfileSpan>
                                Ain shams
                            </ProfilesListItem>
                            <ProfilesListItem>
                                <ProfileSpan>Phone</ProfileSpan>
                                4444 5555 6666
                            </ProfilesListItem>
                            <ProfilesListItem>
                                <ProfileSpan>Email</ProfileSpan>
                                hamza@hamza.com
                            </ProfilesListItem>
                            <ProfilesListItem>
                                <ProfileSpan>Website</ProfileSpan>
                                <ProfileSpan web>www.google.com</ProfileSpan>
                            </ProfilesListItem>
                        </ProfilesList>
                    </Profile>

                    <SkillItem>
                        <ProfileTitle>Some <span>skills</span></ProfileTitle>
                        <SkillsDesc>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>
                        {allSkills}

                    </SkillItem>

                </div>
            </SkillsSection>
        )
    }
}

export default Skills;