import '../styles/Card.css'

function Card({ person }) {
    return (
      <>
        <div className="card-box">
            <div className="nameholder">
              {person.name}   
            </div>
  
            <div className="designation">
              {person.designation}
            </div>
        </div>
      </>
    )
  }

export default Card;