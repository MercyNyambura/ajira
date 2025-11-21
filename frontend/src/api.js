// src/api.js
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchJobs() {
  const response = await fetch(`${API_URL}/api/jobs`);
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return response.json();
}
