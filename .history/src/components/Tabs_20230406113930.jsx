import React from 'react';

function GetDataTabs (props) {
    return (
        <div className = 'tab--info'>
            <p>{props.name}</p>
            <p>{props.text}</p>
        </div>
    )
}
export default GetDataTabs;