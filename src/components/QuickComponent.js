import React, { Component } from 'react';

class QuickComponent extends Component {
    render() {
        return (
            <>
                <span id="theme-wrap" className="fixed-wrap"><a href="#" className="theme-btn"><i className="fa fa-phone"></i><span>CONTACT US</span></a></span>
                <span id="question-wrap" className="fixed-wrap"><a href="#" className="question-btn"><i className="fa fa-envelope"></i><span>QUICK QUESTION?</span></a></span>
            </>
        );
    }
}

export default QuickComponent;