import axios from "axios";
import { GetCards } from "./types/GetCards";

export default class API {
  static async getCards(): Promise<GetCards[]> {
    const response = await axios.get(
      "https://62c7e7bf8c90491c2ca9d3d9.mockapi.io/api/v1/card"
    );

    return response.data;
  }
}
