import React, { Component } from 'react';
const ApprovelCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Accept</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovelCard;