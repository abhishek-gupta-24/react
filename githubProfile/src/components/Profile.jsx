import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { userinfo } = useSelector((state) => state.profile);

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <img
        src={userinfo.avatar_url}
        alt="GitHub Avatar"
        class="w-32 h-32 rounded-full shadow-lg mb-4"
      />
      <h2 class="text-2xl font-bold mb-1">User Name: {userinfo.name}</h2>
      <p class="text-gray-600 text-center mb-4 max-w-md">{userinfo ? userinfo.bio : "User Not Found"}</p>
      
      <div class="flex space-x-6 text-gray-700 text-lg">
        <p><span class="font-semibold">Followers:</span>{userinfo?userinfo.followers:0}</p>
        <p><span class="font-semibold">Following:</span>{userinfo?userinfo.following:0}</p>
      </div>
    </div>

  );
}

export default Profile;
