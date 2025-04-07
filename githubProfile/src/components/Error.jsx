// components/Error.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Error() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        },3000)
    },[])
  return (
    <div className="mt-6 px-6 py-4 bg-red-100 border border-red-400 text-red-700 rounded flex flex-col items-center space-y-3">
        <p className="text-center">User not found. Please try again.</p>
    </div>

  );
}

export default Error;
