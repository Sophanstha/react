import React, { useContext } from "react";
import { useState } from "react";
import userContext from "../Context/UserContext";

function Profile(){
const {user} = useContext(userContext);

    if (user){
    return (
        <>
        <div>welcome : {user.username} </div>
        </>
    )
}
else {
    return (
        <> 
        <div>plase login</div>
        </>
    )
}
}
export default Profile