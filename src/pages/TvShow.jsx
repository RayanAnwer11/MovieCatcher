import { useEffect, useState } from "react";
import TrendMovieList from "../api/TrendMovieList";
import { Link } from "react-router-dom";

const TvShow = () => {
    const [tvShow, setTvShow] = useState([]);
    useEffect(() => {
        tvShowHandler();
    }, []);

    const tvShowHandler = () => {
        const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setTvShow(json)
            });
    };
    return <div>
    <div className="flex flex-col md:ml-10 md:lg:ml-80 md:mt-0 md:w-2/3 text-center md:text-left">
            <div className="mt-0 text-center md:text-left">
                    <Link to="/">
                        <button className="rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">Back to Home</button>
                    </Link>
                    </div>
                    </div>
        {tvShow.results && <TrendMovieList trendMovies={tvShow.results} />}

    </div>;
};
export default TvShow;
