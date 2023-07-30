import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TopicDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <h4 onClick={() => navigate(-1)}>Back</h4>
      Topic details ! {id}
    </div>
  );
};
export default TopicDetail;
