import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes cache
      cacheTime: 1000 * 60 * 10, // 10 minutes total cache
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul className="space-y-4">
        {data.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow-sm">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
