import Tags from "../Tags/Tags.jsx";
import "./Card.scss";

function Card({ labelText, detailsTitle, children, tags }) {
    return (
        <div className="card">
            <span className="date label-text">{ labelText }</span>
            <div className="details">
                <p className="details-title">{ detailsTitle }</p>
                <p className="details-content">
                    { children }
                </p>
                <Tags tags={ tags } />
            </div>
        </div>
    );
}

export default Card;