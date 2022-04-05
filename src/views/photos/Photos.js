import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Photos = () => {
  const [allPhotos, setPhotos] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((getPhotos) => {
        setPhotos(getPhotos.data);
        /*     console.log(getPhotos.data); */
      })
      .catch((error) => console.log(error));
  }, []);

  return allPhotos ? (
    <div>
      <Link className="myLink" to="/">
        Go back
      </Link>
      {allPhotos.slice(0, 20).map((photo) => {
        return (
          <div className="container mt-4">
            <div className="col-sm-6" style={{ width: "18rem" }}>
              <img src={photo.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <p className="card-text">
                  Cupcake ipsum dolor sit amet cheesecake pudding. Dragée
                  macaroon croissant powder bonbon dragée. Fruitcake croissant
                  cake gummies ice cream toffee wafer topping.
                </p>
                <Link to="/comments" className="btn btn-primary">
                  See comments
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="mt-2 text-center">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Photos;
