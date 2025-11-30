import axios from "axios";

// Fetch GitHub user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // returns the user object
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error; // throw to handle it in the component
  }
};
