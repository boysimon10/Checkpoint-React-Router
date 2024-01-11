import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="flex items-center mx-4 justify-center h-screen">
      <div className="mx-auto bg-white rounded-3xl shadow-xl">
        <div className="grid rounded-3xl max-w-[320px] shadow-sm bg-slate-100 flex-col">
          <img
            src={movie.poster}
            width={375}
            height={200}
            className="rounded-t-2xl justify-center grid h-96 object-cover"
            alt={movie.title}
          />
          <div className="group p-6 grid z-10">
            <p
              href={movie.trailer}
              className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2"
            >
              {movie.title}
            </p>
            <span className="text-slate-400 pt-2 font-semibold">
              ({movie.notation})
            </span>

            <div className="grid-cols-2 flex group justify-between">
              <div className="font-black flex flex-col">
                <span className="text-yellow-500 text-xl">SCORE</span>
                <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                  {movie.notation}
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path */}
                  </svg>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <div className="h-7">
                  <span className="text-3xl font-bold gap-x-2 text-slate-300">
                    #{movie.id}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;