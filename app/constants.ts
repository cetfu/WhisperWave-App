const NODE_ENV = process.env.NODE_ENV
export const API_URL = NODE_ENV === "production" ? "http://backend:3200" : NODE_ENV === "development" ? "http://localhost:3200" : ""