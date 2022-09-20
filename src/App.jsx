import Friend from "./Friend";
import Hello from "./Hello";

function App() {
  const friend = "Hello my friend!"
  return (
    <>
    <Hello/>
    <Friend codFriend={friend}/>
    </>
  );
}

export default App;
