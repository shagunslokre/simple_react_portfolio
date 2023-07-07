import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>ABOUT ME</h1>
        <p>
          I am a highly Motivated fresher student with a keen interest in
          Software Development field. Eager to learn, collaborate, and make
          positive impact in a fast-paced environment.
        </p>
        <p>
          With my skills in JavaScript, HTML5, CSS, NodeJS, C, Java, and Core
          Python, I have developed robust applications with responsive user
          interfaces.
        </p>

        <p>
          I have experience in using tools such as Kubernetes, AWS, EC2, Chef,
          Docker, GIT, MySQL, and Balsamic mockups to create scalable,
          efficient, and high-performance applications. As a result, I can
          effectively navigate different technical environments and deliver
          top-quality solutions that meet the needs of clients and end-users. As
          a troubleshooter and system administrator, I have developed a strong
          sense of attention to detail, which has enabled me to identify,
          diagnose, and resolve complex technical problems. My experience in
          benchmarking has also given me the skills to optimize applications for
          better performance, scalability, and reliability.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
