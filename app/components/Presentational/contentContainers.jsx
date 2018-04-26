import React from 'react';


export class ContentContainer extends React.Component {
    render() {
        return (
            <div id={this.props.id} className={"content-container" + " " + this.props.colorScheme}>
                <div className="content">
                    <div className="section">
                     <this.props.contentType content={this.props.content}>
                    </this.props.contentType>

                    </div>
                </div>


            </div>

        );
    }
}

// TODO: Automat column production so we only have one content container component, and the number of columns is derived automatically from passed props. //

export class ContentContainerTwoCol extends React.Component {
    render() {
        return (
            <div id={this.props.id} className={"content-container" + " " + this.props.colorScheme}>
                <div className="content">
                    <div class="section two-col">
                        <div className="box">
                            <this.props.contentTypeOne content={this.props.contentOne}>
                            </this.props.contentTypeOne>
                        </div>
                        <div className="box">
                            <this.props.contentTypeTwo content={this.props.contentTwo}>
                            </this.props.contentTypeTwo>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

