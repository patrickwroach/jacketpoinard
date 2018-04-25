import React from 'react';


export class SectionBounder extends React.Component {
  render() {
    return (
      <div className={"divider-overlay-tab" + " " + this.props.colorScheme} >
        <a href={this.props.link}>
       {this.props.icon}
        </a>
      </div>
    );
  }
}


