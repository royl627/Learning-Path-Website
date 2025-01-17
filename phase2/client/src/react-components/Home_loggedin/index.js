import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import Header from "./../Header";
import SkillCardGenerator from "../SkillCardGenerator";
import NewButton from "./../Button";

/* Component for the Home page */
class Home_Loggedin extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Link to={"./../skill/1"}>
                    <SkillCardGenerator skillID={1} innerimage={require('../../img/image1.jpeg').default}/></Link>
                <Link to={"./../skill/3"}>
                    <SkillCardGenerator skillID={3} innerimage={require('../../img/image3.jpeg').default}/></Link>
                <div className="buttons">
                    <NewButton buttonName="Log Out" link="./../"/>
                    <NewButton buttonName="Course" link="./../course"/>
                    <NewButton buttonName="Skill" link="./../skill"/>
                </div>
            </div>
        );
    }
}

export default Home_Loggedin;