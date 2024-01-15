const baseUrl =
  process.env.NODE_ENV !== "production"
    ? `http://localhost:${process.env.PORT}`
    : "https://faeshare.herokuapp.com";

export default baseUrl;
