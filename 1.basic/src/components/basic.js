// const myVar1=<h1>hello jiiii</h1>;
// const myVar2=(
//  <div>
//    <h1>hii guys</h1>
//    <p>how are you</p>
//  </div>
// );

// let name='naman';
// const myVar3=<p>how are you {5+5} {name}</p>

// const myVar4=(
//   <div>
//     <h1 style={{color:"red",backgroundColor:"blue",width:"400px"}} className="heading" >welcome guys</h1>
//     <p>how are you????</p>
//   </div>
//  );

//  let headingStyle={
//   color:"red",
//   backgroundColor:"blue",
//   width:"400px",
//   border:"2px solid black"
//  }
//  const myVar5=(
//   <div>
//     <h1 style={headingStyle}>welcome guys</h1>
//     <p className="subheading">how are you????</p>
//   </div>
//  );

//  root.render(myVar5);

////////COMPONENETS AND PROMPTS

 //////////1
// function welcome(){
//   return (
//     <div>
//       <h1>Welcome Naman</h1>
//       <p>How are you</p>
//     </div>
//   )
// }
// root.render(welcome());

////////////////2
// const myVar2=(
//    <div>
//      <h1>hii guys</h1>
//      <p>how are you</p>
//    </div>
//   );
// function welcome(){
//   return {myVar2};
// }
// root.render(welcome());

////////////////3

// function Welcome(props){
//   return <h1>Welcome {props.name}</h1>;
// }
// root.render(<Welcome name="naman"/>);

//////////4

// function Cards(props){
//   return (
//     <div>
//       <h1>Your name is {props.name}</h1>
//       <p>Your email is {props.email}</p>
//     </div>
//   )
// }

// root.render(<Cards name="naman" email="naman@gmail.com"/>);

///////////5

// function Cards(props){
//   return (
//     <div>
//       <h1>Your name is {props.name}</h1>
//       <p>Your email is {props.email}</p>
//     </div>
//   )
// }

// let Myname="vishesh";
// let Myemail="vishesh@mail.com";
// root.render(
//   <div>
//     <Cards name="naman" email="naman@gmail.com"/>
//     <Cards name="gopal" email="gopal@gmail.com"/>
//     <Cards name={Myname} email={Myemail}/>
//   </div>
  
// );

///////6
// const cardStyle={
//   padding:"10px",
//   border:"2px solid black",
//   display:"flex",
//   flexDirection:"row",
//   gap:"25px"
// }

// function Cards({name,email, ...props}){
//   return (
//     <div style={cardStyle}>
//          <Avatar image={props.image}/>
//          <h3>Your name is {name}</h3>
//          <p>Your email is {email}</p>
//          <p>Your contact is {props.contact}</p>
//     </div>
//   )
// }

// function Avatar(props){
//   return(
//     <img src={props.image}/>
//   );
// }

// let Myimg="https://via.placeholder.com/200";

// let flexBox={
//   display:"flex",
//   gap:"20px",
//   flexWrap:"wrap"
// }

// root.render(
//   <div style={flexBox} >
//     <Card name="naman" email="naman@gmail.com" image={Myimg} />
//     <Card name="gopal" email="gopal@gmail.com" image={Myimg}/>
//     <Card name="vishesh" email="vishesh@gmail.com" image={Myimg}/>
//   </div>
// );