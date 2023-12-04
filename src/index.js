import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   return <h1>Hello World</h1>;
// }

function Greeting() {
  return (
    <>
      <div>
        <h1>This is heading</h1>
        <p>This is paragraph</p>
      </div>

      <section>
        <div>this is heading2</div>
        <p>loremloremmm</p>
        <input type="text" />
        <img src="" alt="title" />
      </section>

      <React.Fragment>
        <div>hellooo</div>
        <div>hi this is testing</div>
      </React.Fragment>
    </>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));