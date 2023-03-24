
import React, {useState} from "react";
import './App.css';
import MyCoolTitleComponent from "./components/MyCoolTitleComponent";
import Button from '@mui/material/Button';

/*function MyCoolTitle2(props) {

    return (
        <div>
            <h2>Result is: {props.rs} </h2>

        </div>
    );

}*/
function App() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [calcAnswer, setCalcAnswer] = useState(0);

    const check = false;
    const check2 = true;


    function Addition() {
        let result = parseInt(num1) + parseInt(num2);
        setCalcAnswer(result);
        return;
    }

    function Subtraction() {
        let result = parseInt(num1) - parseInt(num2);
        setCalcAnswer(result);
        return;
    }
    function Multiplication() {
        let result = parseInt(num1) * parseInt(num2);
        setCalcAnswer(result);
        return;
    }
    function Division() {
        let result = parseInt(num1) / parseInt(num2);
        setCalcAnswer(result);
        return;
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
        <main>

            <input id="num1" type="number" onChange={(e) => {
                console.log(e.target.value);
                setNum1(e.target.value)

            }}></input><br/>

            <input id="num2" type="number" onChange={(e) => {
                console.log(e.target.value)
                setNum2(e.target.value)
            }}></input><br/>
            <br/>

            <Button id="add" variant="outlined" sx={{marginBottom: "20px", }} onClick={() => Addition()}>Addition</Button><br/>
            <Button id="sub" variant="outlined" sx={{marginBottom: "20px", }} onClick={() => Subtraction()}>Subtraction</Button><br/>
            <Button id="mult" variant="outlined" sx={{marginBottom: "20px", }} onClick={() => Multiplication()}>Multiplication</Button><br/>
            <Button id="div" variant="outlined" sx={{marginBottom: "20px", }} onClick={() => Division()}>Division</Button>

            {/*<h2>Result is: {calcAnswer}</h2>*/}

            <MyCoolTitleComponent rs={calcAnswer}></MyCoolTitleComponent>


            {(check === true || check2 === true) &&
                <MyCoolTitleComponent rs="23"></MyCoolTitleComponent>
            }


            {/*<MyCoolTitle2 rs="23"></MyCoolTitle2>*/}


        </main>
    </div>
  );
}

export default App;
