import React from 'react';


export class SimpleTextContent extends React.Component {
    render() {
        return (
            <div class="copy-container">
                <p> {this.props.content} </p>
            </div>
           

        );
    }
}

export class ImageContent extends React.Component {
    render() {
        return (
            <div className="image-container">
                <img src={this.props.content} alt={this.props.imgAlt}/>
            </div>
        );
    }
} 
