import React, { useEffect, useState } from "react";
import { getPostComments } from "../api";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostComments(postId).then((data) => setComments(data.comments));
  }, [postId]);

  return (
    <div>
      <h2 className="text-xl font-bold">Post Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
