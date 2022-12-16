import axios from "axios";

export const getStore = async () => {
  const response = await axios.get("http://localhost:3002/store");
  if (response) return response.data;
};

export const getStoreSingle = async (id: string) => {
  const response = await axios.get(`http://localhost:3002/store/${id}`);
  if (response) return response.data;
};
