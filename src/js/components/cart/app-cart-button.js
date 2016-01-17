import React from 'react';

export default ( props ) => {
    return (
        <button
            className="btn btn-info btn-sm"
            onClick={ props.handler }>
            { props.txt }
        </button>
    )
}
