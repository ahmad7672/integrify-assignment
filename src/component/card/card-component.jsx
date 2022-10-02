import Button from "../button/button-component";
import "./card.style.css";

const Card = ({ userData }) => {
  return (
    <div className="card">
      <div className="card-circle-top">{userData.name[0]}</div>

      <div className="card-body">
        <h5 className="card-name">{userData.name}</h5>
        <p className="card-username">{`@${userData.username}`} </p>
        <p className="card-website-link">{`http://${userData.website}`} </p>

        <Button userDetail={userData} />
      </div>
    </div>
  );
};

export default Card;
