import PropTypes from "prop-types";
import rayanImg from "../../assets/Rayan.jpg";
import jaeImg from "../../assets/Jae.jpg";
import koreyImg from "../../assets/Korey.jpg";
import SholaImg from "../../assets/Shola.jpg";
import kamronImg from '../../assets/Kamron.png'

const AboutLocalApiItem = (props) => {
    let postImage = "";

    switch (props.image) {
        case "rayan":
            postImage = rayanImg;
            break;
        case "jae":
            postImage = jaeImg;
            break;
        case "korey":
            postImage = koreyImg;
            break;
        case "shola":
            postImage = SholaImg;
            break;
        case 'kamron':
            postImage = kamronImg
            break;
    }

    return (
        <li className="flex items-center justify-center mb-10">
            {/* Card Containder */}

            <div className="flex flex-col p-6 m-3 space-y-10 bg-slate-600 rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
                {/* image Div */}
                <div className="flex">
                    <img
                        src={postImage}
                        className="h-96 w-80 mx-auto object-cover shadows-2xl rounded-2xl duration-200 hover:scale-105"
                    ></img>
                </div>

                {/* Content */}
                <div className="flex flex-col space-y-6">
                    {/* Label & Description Container */}
                    <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                        <div>
                            <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                                {props.name}
                            </div>
                        </div>
                        {/* Description */}
                        <div className="flex-flex-col">
                            <div className="max-w-sm text-2xl font-medium">
                                Java Fullstack Developer
                            </div>
                            {/* Skill Set */}
                            <div>
                                <p className="text-sm font-bold text-grey-400">
                                    Html, CSS, Javascript, React Js, Tailwindcss, Java,
                                    SpringBoot, Github
                                </p>
                            </div>
                            {/* Socials */}
                            <div className="flex flex-row mt-2 mb-2 space-x-3 rounded-full items-center justify-center">
                                <button onClick={()=>{window.open(props.linkedin,"_blank")}}>
                                    <p className="text-orange-400 hover:text-orange-700 p-3 hover:underline decoration-2 decoration-blue-200">
                                        LinkedIn
                                        
                                    </p>
                                </button>
                                <button onClick={()=>{window.open(props.github,"_blank")}}>
                                    <p className="text-orange-400 hover:text-orange-700 p-3 hover:underline decoration-2 decoration-blue-200">
                                        Github
                                    </p>
                                </button>
                            </div>
                        </div>
                        {/* About Section */}
                        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <div className="text-2xl font-light text-grey-100">
                                About {props.name}
                            </div>
                            <p className="text-lg font-normal text-white max-w-lg">
                                {props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

AboutLocalApiItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};
export default AboutLocalApiItem;
