import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);

    const currentTime = new Date();
    return decoded.exp * 1000 < currentTime.getTime();
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};
