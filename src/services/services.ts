import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../../contents/url"
import requests from "../utils/requests"

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl
  }),
  endpoints: (builder) => ({
    getMovieStreamsById: builder.query<string, string>({
      query: (id) => {
        return requests.fetchMovieStreamsById(id)
      }
    }),
    getMovieDetailById: builder.query<string, string>({
      query: (id) => {
        return requests.fetchMovieDetailById(id)
      }
    }),
    getMovieCastAndCrewById: builder.query<string, string>({
      query: (id) => {
        return requests.fetchMovieCastAndCrewById(id)
      }
    }),
    getMoviesSimilarById: builder.query<string, string>({
      query: (id) => {
        return requests.fetchMoviesSimilarById(id)
      },
      transformResponse: (res: any) => res.results
    }),
    getMoviesByParams: builder.query<
      number | string,
      {
        genre: number
        year: number
        value: number
      }
    >({
      query: (arg) => {
        const { genre, year, value } = arg
        return requests.fetchMoviesByParams(genre, year, value)
      },
      transformResponse: (res: any) => res.results
    })
  })
})

export const {
  useGetMovieStreamsByIdQuery,
  useGetMovieDetailByIdQuery,
  useGetMovieCastAndCrewByIdQuery,
  useGetMoviesSimilarByIdQuery,
  useGetMoviesByParamsQuery
} = moviesApi
export const moviesApiReducer = moviesApi.reducer
