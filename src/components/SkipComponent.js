
import React, { Component } from 'react';

class SkipComponent extends Component {
    render() {
        return (
            <>
               <ul id="skip">
                    <li><a href="#header">메뉴 바로가기</a></li>
                    <li><a href="#main">본문 바로가기</a></li>
                    <li><a href="#footer">하단 바로가기</a></li>
                </ul>            
            </>
        );
    }
}

export default SkipComponent;