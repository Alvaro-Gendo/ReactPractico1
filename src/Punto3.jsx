import { useState } from "react";

const Punto3 = () => {
    const [frase, setFrase] = useState("Hello World!")

    const nuevaFrase = ()=>{
        setFrase(frase + "(from changed state)")
    }
    return (
        <div>
            <h1>{frase}</h1>
            <button onClick={nuevaFrase}>Click me</button>
        </div>
    );
};

export default Punto3;