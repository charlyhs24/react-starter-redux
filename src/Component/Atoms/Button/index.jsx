import React from 'react';

const Button = ({onClick, Title, loading}) => {
    if(loading === true){
        return <button className="btn disable" >Loading...</button>
    }
    return (
        <button className="btn" onClick={onClick}>{Title}</button>
    );
};

export default Button;