import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  //games/{game_pk}/additions',
  params: {
    key: "4fd3d302d8ba43e5b88100a1a46a2240",
  },
});
