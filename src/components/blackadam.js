import React from "react";
import '../App.css';
import Blackadam from '../assets/blackadam.jpg';

export default class BlackAdam extends React.Component {
    render() {
        return(
            <img className="photo" src={Blackadam} />
        )
    }
}