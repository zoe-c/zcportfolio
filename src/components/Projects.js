import React, { Component } from 'react';

// components
import Project1 from './Project1.js';
import Project2 from './Project2.js';
import Project3 from './Project3.js';

// styles
import '../styles/Projects.css';


// Without accordion if wanted later
// export default class Projects extends Component {
//   render() {
//     return (
//       <div className="proj-container" id="work">
//         <div id="proj1" className="projects">
//           <h1 className="title">Title Of Project</h1>
//           <div className="vis-and-blurb">
//             <div className="proj-visual">visual. consider divs to mock devices with proj image within.</div>
//             <div className="proj-blurb">description</div>
//           </div>
//           <div className="build-set">tool kit</div>
//           <div>links</div>
//         </div>
//         <div id="proj2" className="projects">
//           <h1 className="title">Title Of Project</h1>
//           <div className="vis-and-blurb">
//             <div className="proj-visual">visual. consider divs to mock devices with proj image within.</div>
//             <div className="proj-blurb">description</div>
//           </div>
//           <div className="build-set">tool kit</div>
//           <div>links</div>
//         </div>
//         <div id="proj3" className="projects">
//           <h1 className="title">Title Of Project</h1>
//           <div className="vis-and-blurb">
//             <div className="proj-visual">visual. consider divs to mock devices with proj image within.</div>
//             <div className="proj-blurb">description</div>
//           </div>
//           <div className="build-set">tool kit</div>
//           <div>links</div>
//         </div>
//       </div>
//     )
//   }
// }

export default class Projects extends Component {

  render() {
    return (
      <div className="container-fluid work">
        <Project1 className="project-containers"/>
        <Project2 className="project-containers"/>
        <Project3 className="project-containers"/>
      </div>
    );
  }
}
