import React from "react";

export default class Table extends React.Component {
    render() {
        const items = this.props.items;
        return (
            <div id="Table">
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        {items.map(item => {
                            return (
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.date}</td>
                                    <td>{item.textarea}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}