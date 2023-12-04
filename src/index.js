import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   return <h1>Hello World</h1>;
// }

function Greeting(){
  return(
    <div>
      <h1>This is heading</h1>
      <p>This is paragraph</p>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));