import PropTypes from 'prop-types'
import AboutLocalApiItem from './AboutLocalApiItem'



const AboutLocalApiList = (props) => {
    return (
        <div>
            <h1 className='text-6xl text-center mb-10'>Tech Guild</h1>
            <ul className=''>
                {props.bioList.map((bio) => (
                    <AboutLocalApiItem
                        Key={bio.id}
                        name={bio.name}
                        description={bio.description}
                        image={bio.image}
                        linkedin={bio.linkedin}
                        github={bio.github}
                    />
                ))}
            </ul>
        </div>
    )
}

AboutLocalApiList.propTypes = {
    bioList: PropTypes.any,
}
export default AboutLocalApiList