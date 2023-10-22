import {  useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TrendTVList from "../api/TrendTVList";
import TVDetailsList from "../api/TVDetailsList";



const TVDetailsPages = () => {
    // const location = useLocation();
    // const { title } = location.state || {};
    const [details, setDetails] = useState([]);
    const [similarMoviesapi, setSimilarMoviesapi] = useState([]);
    const [recommendedMoviesapi, setRecommendedMoviesapi] = useState([]);
    const location = useLocation()
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    

    useEffect(() => {
        
        loadDeatils()
        similarMovies()
        recommendedMovies()
        
    }, [location])

    const loadDeatils = () => {
        const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setDetails(json)
            })
            .catch(err => console.error('error:' + err));
    }

    const similarMovies = () => {
        const url = `https://api.themoviedb.org/3/tv/${id}/similar?page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setSimilarMoviesapi(json)
                console.log("similar:", json)
            })
            .catch(err => console.error('error:' + err));
    }

    const recommendedMovies = () => {
        const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log("recommended:", json)
                setRecommendedMoviesapi(json)
            })
            .catch(err => console.error('error:' + err));
    }

    return (
        <div >
            {console.log(details)}
            {details && <TVDetailsList detailed={details} />}
            <div className="max-w-[1640px] mx-auto sm:max-w-screen-xl ">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500 font-semibold mt-20">Similar TV Shows</h1>
                {similarMoviesapi && similarMoviesapi.results && <TrendTVList trendMovies={similarMoviesapi.results} />}
            
            <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500 font-semibold mt-20">Recommended TV Shows</h1>
                {recommendedMoviesapi && recommendedMoviesapi.results &&<TrendTVList trendMovies={recommendedMoviesapi.results}/>}
            </div>
            </div>
        </div>
    )
}
export default TVDetailsPages