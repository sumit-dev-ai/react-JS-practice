// 02_useState.js
import { useState } from "react";

export function Feel() {
    const [mood, setMood] = useState("");
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <button onClick={() => setMood("Happy 😄")}>Happy</button>
            <button onClick={() => setMood("Sad 😢")}>Sad</button>

            {mood && <p>You are feeling {mood}</p>}
        </div>
    );
}
//Like Button toggle
export function Likebtn() {
    const [btn, setBtn] = useState(true);
    return (
        <div>
            <hr />
            <h2>Code is in 02_useState file</h2>
            <h2>1.Do you Like or Dislike it?</h2>
            <button onClick={() => setBtn(!btn)}>
                {btn ? "Like ❤️" : "Unlike 💔"}
            </button>
        </div>
    );
}
export function Counter() {
    const [count, setCounter] = useState(0);
    return (
        <div>
            <hr />
            <h2>2. Counter problem</h2>
            <button onClick={() => { setCounter(count + 1) }}>Increase</button>
            <button onClick={() => { setCounter(count - 1) }}>Decrease</button>
            {count}
            <hr />
        </div>
    );
}
// 🔸 3. 🧑‍🎓 Show/Hide Student Info
// Create a "Toggle Info" button. When clicked, show/hide this info:
// makefile
// CopyEdit
// Name: Sumit  
// Age: 21

// 💡 Hint: show state (true/false) + conditional rendering.

export function Studentinfo() {
    const [info, isInfo] = useState(false);
    return (
        <div>
            <h2>3.Show hide student info </h2>
            <button onClick={() => isInfo(!info)}>
                {info ? "Hide info" : "show info"}
            </button>
            {info && (
                <div>
                    <p>Name : Sumit</p>
                    <p>Age : 22</p>

                </div>
            )}
        </div>
    );
}
//  4. 🧼 Clear Input
// Make an input box and a "Clear" button. Typing in the box updates state. Clicking "Clear" empties it.

export function ClearInput() {
  const [text, setText] = useState("");
    return (
    <div>
      <hr/>
      <h2>4.  Clear Input</h2>
      
      <input
        type="text"
        placeholder="Type your input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={()=>setText("")}>clear </button>
      {text && <p>You typed: {text}</p>}
    </div>
      );

}
// 🔸 5. 📋 Add to List
// Let the user type a name in an input field. When they click "Add", it shows in a list below.
// 💡 Hint: state for the input, and a state array for the list.
export function List(){
  const [text,setText]=useState("");
  const [list, setList] = useState([]);

   const handleAdd = () => {
    if (text.trim() !== "") {
      setList([...list, text]);               // add new name to list
      setText("");                            // clear input
    }
  };
  return (
    <div>
      <h2>5. Add To List</h2>
      <input type="text" placeholder="Enter Name"   value={text}  onChange={(e)=>setText(e.target.value)}/>

    <button onClick={handleAdd}>Add</button>

    <ul style={{ marginTop: "10px" }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );


}

