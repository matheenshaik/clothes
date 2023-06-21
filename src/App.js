 import React from 'react';
// import './App.css';

import HomePage from './hompage.component';

const App = () =>{
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;











// function ClickOn() {
//   return(
//      <button style={{
//       width: 50,
//       height: 50,
//       backgroundColor: "gold" 
     
//      }}> 
//      click 
//   </button>
//   ) 
// }

// export default function App(){
//   return(
//     <div style={{
//       // display: "flex",
//       // alignItems: "center",
//       // height: "100%"
//       textAlign: "center",
//     }}>

//       <h1> click the button</h1>
//       <ClickOn/>
//     </div>
//   )
// }




// import React, { useState } from 'react';

//   export default function Count(){
    
//     const [Count, setCount] = useState(0);

//   return(
//     <div>
//       <p> {Count} </p>
//       <button onClick={() => setCount( Count+1)}> click </button>

//     </div>
//   )

// }


// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;


// import React, { useState } from 'react';
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return(
//     <div style={{ textAlign: "center" }}>
//       <h1>count</h1>
//       <p> click: {count}</p>
       

//       <button onClick={() => setCount(count + 1)} style={{height:35, width:45}}> + </button>
//       <button onClick={() => setCount(count - 1)} style={{height:35, width:45}}> - </button>
//       <button onClick={() => setCount(0)} style={{ height:35, width:51}}> re-set </button>
     
      
//     </div>
//   )
// }
// export default Counter



