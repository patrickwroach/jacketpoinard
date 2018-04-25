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


export class ContentContainerTwoCol extends React.Component {
    render() {
        return (
            <div id={this.props.id} className={"content-container" + " " + this.props.colorScheme}>
                <div className="content">
                    <div class="section two-col">
                        <div className="box">
                            <this.props.contentTypeLeft content={this.props.contentLeft}>
                            </this.props.contentTypeLeft>
                        </div>
                        <div className="box">
                            <this.props.contentTypeRight content={this.props.contentRight}>
                            </this.props.contentTypeRight>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

