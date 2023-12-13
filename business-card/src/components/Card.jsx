import '../styles/Card.css'
import { Component } from 'react';

function BusinessCard(props) {
  return (
    <>
      <div className='cardbox'>
        <div className='cardbox--nameholder'>
          {props.name}
        </div>
        
        <div className='cardbox-designation'>
          {props.designation}
        </div>
      </div>
    </>
  )
}


// class Card extends Component {
//   render() {
//     return (
//       <>
//         <div className="cardbox">
//             <div className="cardbox--nameholder">
//               {this.props.name}   
//             </div>
  
//             <div className="cardbox--designation">
//               {this.props.designation}
//             </div>
//         </div>
//       </>
//     )
//   }    
// }

export default Card;