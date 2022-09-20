
import './App.css';

function App() {
  
     return (
    <div className="App">
      <Msgv2
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
      />
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
        Hello {name} {role} 😎😍😎
      </h1>
    </div>
  );
}

