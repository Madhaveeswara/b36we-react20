
import './App.css';
import {useState} from 'react';


// Dont Repeat Yourself (DRY)
function App() {
  const names=["Madhav","Rohit","Ananys","Max"];
  const users=[{name: "Madhav", 
                profilePic: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                 role: "Lead Software Engineer"
                },
                 {
                  name:"Max",
                  role:"Artist",
                  profilePic:"https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                 },
                 {
                  name:"Eshwar",
                  role:"Destroyer",
                  profilePic:"https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                 }]
     return (
    <div className="App">

      {/* {names.map((element) => 
      (<Welcome name= {element} />)) 
      */} 
      {users.map(({name, role, profilePic}) => 
      (<Msgv2 name= {name} role={role} profilePic={profilePic} />))
      }  
      {/* <Msgv2
        name="Madhav"
        role="Lead Software Engineer"
        profilePic="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
      />
      <Msgv2
        name="Max"
        role="Artist"
        profilePic="https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
      <Msgv2
        name="Eshwar"
        role="Destroyer"
        profilePic="https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      /> */}
      </div>
  );

}

export default App;

//v2 with Destructuring
function Msgv2({ name, role, profilePic }) {
  return (
    <div>
      <img
        height="450"
        width="450"
        src={profilePic}
        alt={"profile pic of " + name}
        class="profile-pic"
      />
      <h1>
        Hello {name} {role} 😎😍🎉🎊🎆
      </h1>
      <Counter />
    </div>
  );
}

//v2 with Destructuring
function Welcome({ name}) {
  return (
    <div>
       <h1>
        Welcome {name} 😎😍😎
      </h1>
    </div>
  );
}

function Counter() {
  //let like=0;
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  const styles = {
      color: like >=20 ? "deepskyblue" : "orange",
  }

  return (<div className="counter-container">

    {/* Conditional rendering */}
    { like >= 10 ?  
            (<h3 style={styles}>You have won people's heart 😍❤️😍</h3>) : 
            null 
    }
    <progress  className="counter-progress" max="100" value={(like / (like + dislike)) * 100}></progress>
    <div className="counter-button-container">
    {/* onClick needs to be in camel case */}
    <button onClick={() => { 
      // like = like + 1; console.log(like) 
      setLike(like + 1);
    }}>👍 {like}</button>
 {/* Dislike button */}
 <button onClick={() => { 
      // like = like + 1; console.log(like) 
      setDislike(dislike + 1);
    }}>👎 {dislike}</button>
    </div>
  </div>
  );
}

