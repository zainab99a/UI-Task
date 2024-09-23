import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsDetails = () => {
  const { data } = useQuery({
    queryKey: ["projects"],
    enabled: false,
  });

  return (
    <div className='h-[100vh]'>
      <div className="grid grid-rows-4 lg:grid-rows-none lg:grid-cols-4 gap-4 mt-8 mx-28">
        {data && data.map((item) => (
          <Link to={`/card/${item.id}`} state={{ data: item }} key={item.id}>
            <div>
              <img
                className="w-full h-full rounded-lg"
                src={item.Image.url}
                alt=""
              />
              <h1 className='text-center mt-4 text-white text-2xl'>{item.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDetails;
