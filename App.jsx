import React, { useState } from 'react';
import './index.css'
function App() {
    const naam = " ";
    const [name, setNew] = useState(naam);
    const purple = '#ab90d9';
    const [purp, setcolo] = useState(purple);
    const plp = '#98abf5';
    const [pur, setcolos] = useState(plp);
    const [cbtn, setName] = useState('Click');
    
    const clickD = () => {
        setTimeout(function()
        {
        let set = 'Clicked';
        setName(set);
        let newC = '#e00aad';
        setcolo(newC);
        let names = "Prabhat Welcome To Our Website";
        setNew(names);
        let colos="#9d00d1";
        setcolos(colos);
        },3000);
        
    };
    return (
        <>
            <div style={{ backgroundColor: pur }}>
                <h1>Hello !! {name}</h1>
                <button style={{ backgroundColor: purp }} onClick={clickD}>{cbtn}</button>
            </div>
        </>
    );
};
export default App;