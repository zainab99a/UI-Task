import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ProjectsPage() {
  // Use React Query to fetch data
  const { isLoading, error, data } = useQuery({
    queryKey: ["projects"], // Use the query key as an array
    queryFn: async () => {
      const response = await axios.get(
        "https://x8ki-letl-twmt.n7.xano.io/api:DnONaUrH/projects"
      );
      return response.data; // Return the fetched data
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects!</div>;

  return (
    <div className="mt-40 mx-28">
      <div className="flex justify-between mt-5">
        <p className="dash text-white text-[1.2rem] mx-11">Our Last Projects</p>
        <Link
          to="/details"
          className="flex items-center text-lg font-bold text-yellow-400"
        >
          View More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FBBF24"
            className="w-6 h-6 ml-1 text-yellow-500 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-rows-4 lg:grid-rows-none lg:grid-cols-4 gap-4 mt-8">
        {data.map((item) => (
          <div key={item.id}>
            <img
              className="w-full h-full rounded-lg"
              src={item.Image.url}
              alt=""
            />
          </div>
        ))}
      </div>
      <Link to='/dashboard' className="flex mx-auto  items-center justify-center bg-yellow-400 rounded-2xl px-2 py-2 w-48   text-indigo-950 font-semibold mt-10">
      DashBord
      </Link>
    </div>
  );
}
