import { Link } from "react-router-dom";

import "./button.style.css";

const Button = ({ userDetail }) => {
  return (
    <div>
      <Link className="btn-primary" to={`/detailed-component/${userDetail.id}`}>
        MORE DETAILS
      </Link>
    </div>
  );
};

export default Button;
