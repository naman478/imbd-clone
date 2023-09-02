import './App.css';
// import Card from './components/Card';

//function App() {

// let Myimg="https://via.placeholder.com/200";
// let flexBox={
//   display:"flex",
//   gap:"20px",
//   flexWrap:"wrap"
// } 
//   return (
//     <div style={flexBox} >
//     <Card name="naman" email="naman@gmail.com" image={Myimg} />
//     <Card name="gopal" email="gopal@gmail.com" image={Myimg}/>
//     <Card name="vishesh" email="vishesh@gmail.com" image={Myimg}/>
//   </div>
//   );
//}

import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Notes from "./components/Notes";
import Upper from "./components/Upper";

function App(){
  return(
   <div>
     {/* <Counter/>
     <Fruits/> */}
     {/* <Notes/> */}
     <Upper/>
   </div>
  );
}

export default App;
