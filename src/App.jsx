import Friend from "./Friend";
import Hello from "./Hello";
import Punto3 from "./Punto3";

function App() {
  const friend = "Hello my friend!"
  return (
    <>
    <Hello/>
    <Friend codFriend={friend}/>
    <Punto3/>
    </>
  );
}

export default App;
