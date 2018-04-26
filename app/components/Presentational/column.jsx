// IN PROGRESS


import React from 'react';

let numberOfColumns = props.numberofcolumns;



export class Column extends React.Component {
    render() {
        return (
            <div className={"column" + this.props.numberofcolumns}>
            Need a function to denote the props nam
            <this.props.contentTypeOne content={this.props.contentOne}>
            </this.props.contentTypeOne>
        </div>
        )
    }
}