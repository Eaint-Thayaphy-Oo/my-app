import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

// function Greeting() {
//   return <h1>Hello World</h1>;
// }

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h1>This is heading</h1>
//         <p>This is paragraph</p>
//       </div>

//       <section>
//         <div>this is heading2</div>
//         <p>loremloremmm</p>
//         <input type="text" />
//         <img src="" alt="title" />
//       </section>

//       <React.Fragment>
//         <div>hellooo</div>
//         <div>hi this is testing</div>
//       </React.Fragment>
//     </>
//   );
// }

// ReactDom.render(<Greeting />, document.getElementById("root"));

const cardOne = {
  image: "https://via.placeholder.com/150/92c952",
  title: "card title one",
  description: "cardone description",
};

const cardTwo = {
  image: "https://via.placeholder.com/150/92c952",
  title: "card title two",
  description: "cardtwo description",
};

function CardList() {
  return (
    <main className="card-list">
      <Card title="hello" text="card description" number={2} />
      <Card image={cardOne.image} title={cardOne.title} description={cardOne.description} />
      <Card image={cardTwo.image} title={cardTwo.title} description={cardTwo.description} />
      <p>lorem</p>
    </main>
  );
}

function Card({ image, title, description, children }) {
  // console.log(props);
  // const title = "Card Title";
  // const { image, title, description } = props;
  return (
    <section className="card">
      <img src={image} alt="card-image" />
      <h1 style={{ marginTop: "1rem" }}>{title}</h1>
      {/* <p>{props.text}</p>
      <p>{props.number}</p> */}
      <p>{description}</p>
      <h2>{2 + 2}</h2>
      <Description />
      {children}
    </section>
  );
}

function Description() {
  return <p style={{ marginTop: "1rem" }}>lorem lorem lorem lorem</p>
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<CardList />);
// root.render(<Card />);