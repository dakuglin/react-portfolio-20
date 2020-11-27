import React from "react";
import "./project.css"

function Project(props) {
    return (
        <>
        <div className="card">
            <div className="img-container">
            {/* <img alt={props.name} src={props.image} /> */}
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Project-</strong> {props.name}
                    </li>
                    {/* <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                     <li>
                        <strong>Location:</strong> {props.location}
                    </li> */}
                </ul>
            </div>
        </div>
       
     
        {/* <div className="container-fluid">
            <div class="card">
                <div class="card-header">
                    {props.groceries.map(item => (
                        {item.name}
                    ))}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div> */}
            
        
      </>
    )
}

export default Project;


// import React from "react";

// // Whenever we try to render an array containing JSX, React knows to render each JSX element separately
// function List(props) {
//   return (
//     <ul className="list-group">
//       {props.groceries.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default List;


// const groceries = [
//     {
//       id: 1,
//       name: "Milk",
//       purchased: true
//     },
//     {
//       id: 2,
//       name: "Eggs",
//       purchased: true
//     },
//     {
//       id: 3,
//       name: "Cheese",
//       purchased: false
//     },
//     {
//       id: 4,
//       name: "Cake Mix",
//       purchased: false
//     },
//     {
//       id: 5,
//       name: "Carrots",
//       purchased: false
//     },
//     {
//       id: 6,
//       name: "Juice",
//       purchased: true
//     }
//   ];
  
//   function App() {
//     return <List groceries={groceries} />;
//   }
  