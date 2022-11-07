import React from "react";
import App from "../App";
import '../App.css';
import BlackAdam from "./blackadam"; 

export default class Movie extends React.Component {
    render() {
        return(
            <div container className="centered">
                <div className="card w-75">
                    <div className="card-header bg-dark text-white text-center">
                        <h2>Black Adam</h2>
                        <h6>2022  * PG-13 *  2h 5m</h6>
                    </div>
                    <div className="card-body text-center">
                        <BlackAdam /> <br />
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span> <br /><br />
                        <p>Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.</p>
                        <App />
                    </div>
                </div>
            </div>
        );
    }
}

