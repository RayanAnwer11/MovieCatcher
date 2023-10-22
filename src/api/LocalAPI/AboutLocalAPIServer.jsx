import { useEffect, useState } from "react"
import AboutLocalApiList from "./AboutLocalApiList"
import { Link } from "react-router-dom";

const AboutLocalApiServer = () => {
    const [bioData, setBioData] = useState([]);

    const baseURL = 'http://localhost:8080/bio/'
    useEffect(() => {
        fetchBio('all')
    }, [])
    const fetchBio = async (name) => {
        let url = baseURL
        if (name) {
            url += `name/${name}`
        }
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            setBioData(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
<<<<<<< HEAD
            <button className="rounded-md bg-gradient-to-r scroll-smooth md:scroll-auto focus:scroll-auto from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">
=======
            <button className="rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">
>>>>>>> 25c80ec18b83581b057f4c191da9ab23543c8f4f
                <Link to="/" >
                Go Back
                </Link>
                </button>
            <AboutLocalApiList bioList={bioData} />
        </div>
    )
}
export default AboutLocalApiServer