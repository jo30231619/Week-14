import React from "react";

export default class Form extends React.Component {
    render() {
        return(
            <div id='Form'>
                <form onSubmit={this.props.handleFormSubmit}>
                    <label for="username">
                    FullName:<br />
                    <input id="username" value={this.props.newUsername}
                        type="text" name="username"
                        onChange={this.props.onChange} />
                    </label><br />
                    <label for="date"><br />
                    Date:<br />
                    <input id="date" value={this.props.newDate}
                        type="date" name="date"
                        onChange={this.props.onChange} />
                    </label><br /> <br />
                    <label>
                    Leave Review:<br />
                    <input id="textarea" value={this.props.newTextArea}
                        type="textarea" name="textarea"
                        onChange={this.props.onChange} />
                    </label><br/><br />
                    <button type="submit" class="btn btn-dark" value="Submit">Submit Your Review</button><br /><br />
                </form>
            </div>
        );
    }
}