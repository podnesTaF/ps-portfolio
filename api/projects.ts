import axios from "axios";
import qs from "qs";
import { Category, ProjectsResponse, StrapiResponse } from "./types";

const url = process.env.NEXT_PUBLIC_API_URL

export const api_url = `${url}/api`

export const getImageUrl = (imagePath?: string): string => {
  return imagePath ? `${url}${imagePath}` : '/images/no-image.jpg'
}

export const getProjects = async (tag?: string) => {
  const filters = tag
    ? { categories: { name: { $eq: tag } } }
    : {}

  const query = qs.stringify({
    filters,
    populate: {
      tags: '*',
      thumb: {
        populate: "*"
      },
      categories: "*"
    },
  }, { encodeValuesOnly: true })

  const { data } = await axios.get<ProjectsResponse>(`${api_url}/projects?${query}`);

  return data.data
}


export const getProjectDetails = async (slug: string) => {
  const query = qs.stringify({
    filters: {
      slug: { $eq: `/projects/${slug}` },
    },
    populate: {
      tags: '*',
      links: {
        populate: "*"
      },
      categories: '*',
      body: {
        populate: '*',
      },
    }

  }, { encodeValuesOnly: true })


  const { data } = await axios.get<ProjectsResponse>(`${api_url}/projects?${query}`);

  return data.data[0]
}


export const getCategories = async () => {
  const { data } = await axios.get<StrapiResponse<Category[]>>(`${api_url}/categories`);

  return data.data
}