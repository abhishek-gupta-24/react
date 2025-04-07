import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { getInfo } from "../store/profileSlice";
import { useNavigate} from 'react-router-dom'

function Home() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const handleSubmit =(e) => {
            fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("user Not found")
              }
                  return response.json();
            })
            .then((response) => {
                dispatch(getInfo(response))
                navigate('/profile')
            })
              .catch((error) => {
              navigate('/error')
                console.log("error found");
            })
        
    }

  return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-6">GitHub Profile Viewer</h1>
        
        <input
              type="text"
              value={username}
            placeholder="Enter GitHub username"
              className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e)=>setUsername(e.target.value)}
        />

        <button
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleSubmit}
        >
            View Profile
        </button>
        </div>

  )
}

export default Home
