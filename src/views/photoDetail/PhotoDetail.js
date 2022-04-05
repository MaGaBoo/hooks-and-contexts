import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { photoDetail } from "../../services/PhotoService";

const PhotoDetail = () => {
  const [detail, setDetail] = useState[null];
  const { title } = useParams();

  useEffect(() => {
    photoDetail(title)
    .then(getDetail => {setDetail(getDetail)});
  }, [title]);

  return (
    <>
     <h1>{detail.title}</h1>
    </>
  );
};

export default PhotoDetail;
