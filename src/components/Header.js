import PropTypes from 'prop-types'
import Button from './Button'

//This is where header component is created 
//Header is object  and title is a prop
const Header = ({ title }) => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

//creates default prop if no title is entered in app.js
Header.defaultProps = {
    title: 'Task Tracker'
}

//uses import - this is for practice purposes
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header

