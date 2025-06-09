import axios from "axios";
import qs from "qs";
import { api_url } from "./projects";
import { HomeResponce } from "./types";

export const getHomeData = async () => {
  const query = qs.stringify({
    populate: {
      experiences: {
        populate: "*"
      }
    },
  }, { encodeValuesOnly: true })
  const { data } = await axios.get<HomeResponce>(`${api_url}/home?${query}`)

  return data.data
}