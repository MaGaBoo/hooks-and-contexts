import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Comments = () => {
  const [allComments, setComments] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((getComments) => {
        setComments(getComments.data);
      });
  }, []);

  return allComments ? (
    <div>
      {allComments.map((comment) => {
        return (
          <div class="card mt-4" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{comment.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{comment.email}</h6>
              <p class="card-text">{comment.body}</p>
              <Link to="/photos" className="btn btn-outline-secondary">
                Back to photos
              </Link>
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

export default Comments;
