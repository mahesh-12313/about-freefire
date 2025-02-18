import React from "react";
import { useParams } from "react-router-dom";
function User(){
const {USerid}= useParams()
return(
    <div>user: {USerid}</div>
)

}
export default User