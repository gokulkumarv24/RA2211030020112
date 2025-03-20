const BASE_URL = "http://20.244.56.144/test";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc2MTYwLCJpYXQiOjE3NDI0NzU4NjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRiNGEwNzdjLTNiNjktNGExMC1iZjliLWY4ZjJmODQxNWYyNCIsInN1YiI6Imd2NTk0MkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI0YjRhMDc3Yy0zYjY5LTRhMTAtYmY5Yi1mOGYyZjg0MTVmMjQiLCJjbGllbnRTZWNyZXQiOiJXeEJUUFlRb0ZpVnFsdnZjIiwib3duZXJOYW1lIjoiR09LVUwgS1VNQVIgViIsIm93bmVyRW1haWwiOiJndjU5NDJAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjIxMTAzMDAyMDExMiJ9.dA6cl-Ti4iBXvMN3T4fWfOCMLJXOzxVwZNj98bOaPQU";

// 🛠 Fetch Users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

// 🛠 Fetch Posts
export const getUserPosts = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/posts`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

// 🛠 Fetch Comments
export const getPostComments = async (postId) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
