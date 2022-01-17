import axios from "axios";

export const getCinemas = () => axios.get("/api/cinemas");