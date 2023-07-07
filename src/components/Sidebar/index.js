import './index.scss'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <NavLink exact="true" activeclassName="active" to="/">
                    <FontAwesomeIcon icon = {faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassName="active" className="about-link"to="/about">
                    <FontAwesomeIcon icon = {faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassName="active" className="contact-link"to="/contact">
                    <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e" />
                </NavLink>

            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/shagunslokre/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/shagunslokre'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.github.com/Lokre2299'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;