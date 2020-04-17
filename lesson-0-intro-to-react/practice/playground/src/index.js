console.log("Hello World");
// import React from "react";
// import ReactDOM from "react-dom";

// function ChefTemplate() {
//   // js land
//   return (
//     // jsx
//     <div class="card p-2 col-sm-4 col-xs-12 shadow-sm" id="chef">
//       <div class="card-body d-flex flex-column align-items-center">
//         <h5 class="card-title text-muted">placeholder name</h5>

//         <div>
//           <i class="fas fa-star"></i>
//           <i class="fas fa-star"></i>
//           <i class="fas fa-star"></i>
//           <i class="fas fa-star"></i>
//           <i class="fas fa-star-half-alt"></i>
//         </div>

//         <span class="badge badge-secondary">cuisine</span>

//         <p class="text-muted overflow-hidden line-clamp mt-3">this is a bio</p>

//         <button
//           class="btn btn-primary btn-lg d-block mt-auto rounded-pill chef-btn"
//           data-chef-id="${chef.id}"
//         >
//           Details
//         </button>
//       </div>
//     </div>
//   );
// }

const app = document.getElementById("app");
const title = document.createElement("h1");
title.innerText = "Hello World";
app.appendChild(title);

// lets view how to create element
// const headerText = React.createElement("span", {}, "Hello World by React");
// const h1 = React.createElement("h1", {}, headerText);
//unpkg.com/@babel/standalone/babel.min.js
// lets view how we can pass props to a react element
const h1 = React.createElement(
  "h1",
  {
    className: "randomClass",
    id: "header",
    style: {
      color: "black",
    },
  },
  headerText
);

ReactDOM.render(h1, document.getElementById("react-app"));

// create a react element, that is a div,
// lets 2 child paragraph,
// 1st p background of color blue
// 2nd p font italic

// props would come next
// bring in concept of using functions that return the elements
// talk about capitalizing func names because they resemble an instance of a component
// pass in props and show how to create dynamic react elements
// encourage students to write a function that returns a button with dynamic text
// this is called a component
// end with showing how react.createElement is cumbersome to use, and functional components help with that
// show JSX, babel, and discuss syntactic sugar

// lets view how to create componenets
// ReactDOM.render(<ChefTemplate />, document.getElementById("app"));

// talk about "less lines of code", simpler api
