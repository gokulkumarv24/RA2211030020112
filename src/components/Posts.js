import React, { useEffect, useState } from "react";
import { getUserPosts } from "../api";

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUserPosts(userId).then((data) => setPosts(data.posts));
  }, [userId]);

  return (
    <div>
      <h2 className="text-xl font-bold">User Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
