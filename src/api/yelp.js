import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GjYDMqcU4hbjQuGzyyQBWKmvXTZqsjrlxl-Jk26BSgL6ZumwYCSjGKOpqO_6bLyRiT6mYTlNVV07pljZsZP-aZaZ8O_VSnkBOXt9MaKADhU8MJBWQZaT0qGYXOPvYnYx",
  },
});
