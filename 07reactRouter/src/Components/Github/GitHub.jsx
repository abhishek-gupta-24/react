import React from "react";
import { useState,useEffect } from "react";

function Github(){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/abhishek-gupta-24')
    .then((res)=> res.json())
    .then((data)=>setData(data))   
  },[])
  return (
    <div>
      <div className="text-center m-4 border-radius bg-gray-600 text-white p-4 text-3xl">
        Github followers:{data.followers}
        <div className="flex justify-center my-2">
        <img src={data.avatar_url} className="h-50 w-50 rounded-full"></img>
      </div>
      </div>
    </div>
  )
}

export default Github