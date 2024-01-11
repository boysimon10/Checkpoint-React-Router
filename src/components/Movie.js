import React from 'react';
import { useParams } from 'react-router-dom';
import MovieData from './MovieData';
import Navbar from './Navbar';

function Movie() {
  const { id } = useParams();
  const movie = MovieData.find((m) => m.id === parseInt(id));

  return (
    <div>
      <Navbar />
      {movie ? (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
              <div className="h-48 overflow-visible w-1/2">
                <img
                  className="rounded-3xl shadow-lg"
                  src={movie.poster}
                  alt=""
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold">{movie.title}</h2>
                  <div className="bg-yellow-400 font-bold rounded-xl p-2">
                    {movie.notation}.0
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Films</div>
                </div>
                <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                  {movie.description}
                </p>
              </div>
            </div>
          </div>
          <div className="py-12 sm:max-w-xl sm:mx-auto mt-12">
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-red-500">Movie not found</h1>
        </div>
      )}
    </div>
  );
}

export default Movie;
