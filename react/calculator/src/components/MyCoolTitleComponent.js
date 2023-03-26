import React from "react";

function MyCoolTitleComponent(props) {

  //  props: fn=firstName, ln=lastName
    console.log(props)

    return (
    <div>
        <h2>Result is: {props.rs} </h2>

    </div>
        );

}

export default MyCoolTitleComponent;