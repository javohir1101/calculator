import React, { useState } from "react";
import { StyledApp } from "./style/AppStyled";

export default function App() {
  const [count, setCount] = useState<number>(0);
  let display : any = document.getElementById("display");

  function foo(num : string) {
    display.innerHTML = display.innerHTML + num;
  }
  function as() {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
  function del() {
    display.innerHTML = "";
  }
  function teng() {
    var a = display.innerHTML;
    var b = eval(a);
    display.innerHTML = b;
  }
  
  return (
    <StyledApp>
      <div className="container">
      <div className="calculator dark">
            <div className="theme-toggler active">
                <i className="toggler-icon"></i>
            </div>
            <div className="display-screen">
                <div id="display"></div>
            </div>
            <div className="buttons">
                <table >
                    <tr>
                        <td><button className="btn-operator" onClick={del} id="clear">C</button></td>
                        <td><button className="btn-operator" onClick={()=>foo('/')} id="/">&divide;</button></td>
                        <td><button className="btn-operator" onClick={()=>foo('*')} id="*">&times;</button></td>
                        <td><button className="btn-operator" onClick={as} id="backspace">AC</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn-number" onClick={()=>foo("7")} id="7">7</button></td>
                        <td><button className="btn-number" onClick={()=>foo("8")} id="7">8</button></td>
                        <td><button className="btn-number"  onClick={()=>foo("9")} id="7">9</button></td>
                        <td><button className="btn-operator"  onClick={()=>foo('-')} id="7">-</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn-number"  onClick={()=>foo("4")} id="4">4</button></td>
                        <td><button className="btn-number" onClick={()=>foo("5")} id="5">5</button></td>
                        <td><button className="btn-number" onClick={()=>foo("6")} id="6">6</button></td>
                        <td><button className="btn-operator" onClick={()=>foo('+')} id="+">+</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn-number" onClick={()=>foo("1")} id="1">1</button></td>
                        <td><button className="btn-number" onClick={()=>foo("2")} id="2">2</button></td>
                        <td><button className="btn-number" onClick={()=>foo("3")} id="3">3</button></td>
                        <td rowSpan={2}><button className="btn-equal" onClick={teng} id="equal">=</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn-operator" onClick={()=>foo("(")} id="(">(</button></td>
                        <td><button className="btn-number" onClick={()=>foo("0")} id="0">0</button></td>
                        <td><button className="btn-operator" onClick={()=>foo(")")} id=")">)</button></td>
                    </tr>
                </table>
            </div>
        </div>
      </div>
    </StyledApp>
  );
}
