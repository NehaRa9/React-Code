// import React from 'react'
// import{useState} from 'react'

// function App() {
//   const [color, setColor] = useState("pink")

//   return (

//    <>
//  <div className="w-full h-screen duration-200"

//  style={{backgroundColor:color}}>

//   <div className="fixed flex flex-wrap justify-center right-20 insert-y-0 py-5">
//     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-5 rounded-3xl">
//       <button
//       onClick={()=>setColor("red")}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor:"red"}}>Red
//       </button>
//       <button
//         onClick={()=>setColor("Green")}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor:"Green"}}>Green
//       </button>
//       <var>  <button
//         onClick={()=>setColor("Yellow")}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor:"Yellow"}}>Yellow      </button>
//       <button
//         onClick={()=>setColor("black")}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor:"black"}}>black
//       </button>
//       <button
//         onClick={()=>setColor("purple")}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor:"purple"}}>purple
//       </button>
//       <button
//         onClick={()=>setColor("Grey")}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor:"Grey"}}>Grey
//       </button>
//       <var><var>  
//       <button
//         onClick={()=>setColor("hotPink")}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor:"hotPink"}}>HotPink
//       </button></var></var></var>
//     </div>
//   </div>
//  </div>

// {/* shape */}
// <div className="flex flex-col items-center">
//             <div
//               className="w-24 h-24 rounded-full"
//               style={{ backgroundColor: color }}
//             ></div>
//             <span className="mt-2">Circle</span>
//           </div>
// </>
//   )
// }

// export default App


// import React, { useState } from 'react';

// function ColorPaletteWithShapes() {
//   const [color, setColor] = useState("olive");

//   return (
//     <>
//       <div className="w-full h-screen duration-100" >
//         <div className="fixed flex flex-wrap justify-center bottom-2 inset-x-5 px-2">
//           <div className="flex flex-wrap justify-center gap-2 shadow-sl bg-white px-2 py-2 rounded-3xl">
//             <button
//               onClick={() => setColor("red")}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "red" }}>Red
//             </button>
           
//           </div>
//         </div>

//         {/* Shape Container */}
//          <div className="flex justify-center items-center mt-10 space-x-20">
//           <div className="flex flex-col items-center">
//             <div
//               className="w-24 h-24 rounded-full shadow-md"
//               style={{ backgroundColor: color }}
//             ></div>
//             <span className="mt-2 text-white font-semibold">Circle</span>
//           </div>
//         </div>

//         {/**butterfly */}
       
//         <div className="flex justify-center items-center mt-10 space-x-20">
//           <div className="flex flex-col items-center"
//                 style={{ backgroundColor: color }} >
//             <svg
//               width="96"
//               height="96"
//               viewBox="0 0 64 64"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="shadow-md"
//             ></svg>
//             {/* Butterfly wings left */}
//             <path
//                 d="M16 12C8 20 10 38 16 42C22 46 22 26 16 12Z"
//                 fill={color}
//                 stroke="black"
//                 strokeWidth="1"
//               />
//               {/* Butterfly wings right */}
//               <path
//                 d="M48 12C56 20 54 38 48 42C42 46 42 26 48 12Z"
//                 fill={color}
//                 stroke="black"
//                 strokeWidth="1"
//               />
//               {/* Butterfly body */}
//               <path
//                 x="30"
//                 y="12"
//                 width="4"
//                 height="30"
//                 fill="#333"
//                 rx="2"
//               />
//               {/* Butterfly antenna left */}
//               <path
//                 d="M30 12L26 8"
//                 stroke="#333"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//               />
//               {/* Butterfly antenna right */}
//               <path
//                 d="M34 12L38 8"
//                 stroke="#333"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//               />
//              </div>
//             <span className="mt-2 text-white font-semibold">Butterfly</span>
//           </div>
//         </div>
//     </>
//   )
// }

// export default ColorPaletteWithShapes;


import React, { useState } from 'react';

function ColorPaletteWithButterfly() {
  const [color, setColor] = useState("orange");

  return (
    <div className="w-full h-screen duration-200">
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-2 px-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-5 rounded-3xl">
          <button
            onClick={() => setColor('red')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('yellow')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('black')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'black' }}
          >
            Black
          </button>
          <button
            onClick={() => setColor('purple')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor('grey')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'grey' }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor('hotPink')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'hotPink' }}
          >
            HotPink
          </button>
        </div>
      </div>

      {/* Shape Container */}
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col items-center">
          <svg
            width="1000"
            height="1000"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shadow-md"
          >
            {/* Butterfly wings left */}
            <path
              d="M16 12C8 20 10 38 16 42C22 46 22 26 16 12Z"
              fill={color}
              stroke="black"
              strokeWidth="1"
            />
            {/* Butterfly wings right */}
            <path
              d="M48 12C56 20 54 38 48 42C42 46 42 26 48 12Z"
              fill={color}
              stroke="black"
              strokeWidth="1"
            />
            {/* Butterfly body */}
            <rect x="30" y="12" width="4" height="30" fill="#333" rx="2" />
            {/* Butterfly antenna left */}
            <path d="M30 12L26 8" stroke="#333" strokeWidth="1" strokeLinecap="round" />
            {/* Butterfly antenna right */}
            <path d="M34 12L38 8" stroke="#333" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="mt-2 text-white ">Butterfly</span>
        </div>
      </div>
    </div>
  );
}

export default ColorPaletteWithButterfly;

