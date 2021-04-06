import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

 
const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <header className = 'header'>
        <h1>{title}</h1>
        {location.pathname === '/' && 
            <Button color = {showAdd ? 'Red' : 'Green'} text = {showAdd ? 'Close': 'Add'} onClick = {onAdd}/>}
        </header>
    )
}

//default title for the project 
Header.defaultProps = {
    title: 'Task Tracker'
}

//Property type
Header.propTypes = {
    name: PropTypes.string,
};

//css in js 
// const headingStyle = {
//     color: 'blue',
// }

export default Header
