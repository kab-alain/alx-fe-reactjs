import axios from "axios";

export const fetchUsersAdvanced = async (username, location, minRepos) => {
  try {
    // Construct query string
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // array of user objects
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
