import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchJoke } from "./jokeSlice";

function App() {

  const[category,setcategory] = useState("")

  const dispatch = useDispatch()

  const joke = useSelector((state)=> {
    return state.joke.joke
  })

  const handlecategory = (e)=> {
    setcategory(e.target.value)
  }

  const handleFetch = ()=> {
    dispatch(fetchJoke(category))
  }

  return (
    <div>
      <input type="text" onChange={handlecategory}/>
      <button onClick={handleFetch}>Get Jokes</button>
      <h1>{joke}</h1>
    </div>
  );
}

export default App;
