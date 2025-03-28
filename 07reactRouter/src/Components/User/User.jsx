import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id}=useParams();
  return (
    <div className="flex justify-center items-center bg-gray-700 text-white p-4">
        <div>User:{id}</div>
    </div>
  )
}

export default User