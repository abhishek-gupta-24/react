import React from 'react';
// we can also do destructuring of prop like that {institute,username}
// function Card(props){
    
//     return(
// <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
//           alt=""
//           className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//         />
//         <div className="mt-6 mb-2">
//           <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//             {props.username}
//           </span>
//           <h2 className="text-xl font-semibold tracking-wide">{props.institute}</h2>
//         </div>
//         <p className="text-gray-300">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
//           amet
//         </p>
//       </div>
//     )
// }

function Card({institute="HELLO World",username}){// we can also set the default value by using =
    
    return(
<div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{institute}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card