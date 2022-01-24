import React from "react";

import "./Modal.scss";

export class Modal extends React.Component {
    
    handleClose = (e) => {
        this.props.onClose(e);
    }

    render() {
        return (
            <div className="modal">
                <div className="background"onClick={this.handleClose}></div>
                <div className="window"> 
                    <div className="header">
                        <h2 className="title-film-modal"> 
                            {this.props.title}
                        </h2>
                        <button onClick={this.handleClose}>x</button>
                    </div>
                    <hr/>
                    <div className="content"> 
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}