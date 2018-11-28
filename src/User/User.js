import React from 'react';

const user = (props) => {
    return(
    <div>
        <p>name  :{props.children} and age :{props.age}</p>
    </div>
    )
}

export default user;