import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Component to fetch and display posts
const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(
    "posts",
    async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return data;
    },
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
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

// Main App wrapped in QueryClientProvider
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

// Render the App directly from App.jsx
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
