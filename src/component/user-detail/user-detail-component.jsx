import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./user-detail.style.css";
const DetailedComponent = () => {
  const { id } = useParams();

  const [userDataDetailed, setUserDataDetailed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchSingleUserData() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    response.json().then((response) => {
      setUserDataDetailed(response);
      setIsLoading(true);
    });
  }

  useEffect(() => {
    fetchSingleUserData();
  }, []);

  return (
    <div className="user-detail-container">
      <ul className="user-detail-container-list">
        <li>
          <h2>{`name:${userDataDetailed.name}`}</h2>
        </li>
        <li>
          <h2>{`username:${userDataDetailed.username}`}</h2>
        </li>
        <li>
          <h2>{`email:${userDataDetailed.email}`}</h2>
        </li>
        <li>
          <h2>{`phone:${userDataDetailed.phone}`}</h2>
        </li>
        <li>
          {" "}
          <h2>{`company:${
            isLoading ? userDataDetailed.company.name : "no value arrived yet"
          }`}</h2>
        </li>
        <li>
          <h2>{`website:${userDataDetailed.website}`}</h2>
        </li>
        <li>
          <h2>address :</h2>
        </li>
        <ul>
          <li>{`street:${
            isLoading ? userDataDetailed.address.street : "no value arrived yet"
          }`}</li>
          <li>{`company:${
            isLoading ? userDataDetailed.address.suite : "no value arrived yet"
          }`}</li>
          <li>{`company:${
            isLoading ? userDataDetailed.address.city : "no value arrived yet"
          }`}</li>
          <li>{`company:${
            isLoading
              ? userDataDetailed.address.zipcode
              : "no value arrived yet"
          }`}</li>
        </ul>
      </ul>

      <Link className="btn-primary" to="/">
        BACK
      </Link>
    </div>
  );
};

export default DetailedComponent;
