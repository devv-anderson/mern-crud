import "./App.css";
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUserName] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/getusers").then((response) => {
      setListOfUsers(response.data)
    })
  })
  
 const createUser = () => {
   axios.post("http://localhost:3001/createUser", {
     name: name,
     age: age,
     username: username
   }).then((response) => {
     alert("User created!")
   })
 }

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          )
        })}

      <div>
        <input type="text" placeholder="Name" onChange={(event) => {setName(event.target.value)}} />
        <input type="number" placeholder="Age" onChange={(event) => {setAge(event.target.value)}} />
        <input type="text" placeholder="Username" onChange={(event) => {setUserName(event.target.value)}} />
        <button onClick={createUser}>Create User</button>
      </div>
      </div>
    </div>
  );
}

export default App;
