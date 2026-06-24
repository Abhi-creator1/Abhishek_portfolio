import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faRobot } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience &amp; Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="June 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faRobot} />}
          >
            <h3 className="vertical-timeline-element-title">Assistive Robot Hackathon</h3>
            <h4 className="vertical-timeline-element-subtitle">HackLab · Berlin, Germany</h4>
            <p>
              Built an agentic robotic assistant for natural-language object manipulation using the Claude Agent SDK, MCP, computer vision, and the NormaCore Station API.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2025 - August 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Eviotec Technologieentwicklung · Schmalkalden, Germany</h4>
            <p>
              Developed embedded control firmware and supported system design, simulation, prototyping, and experimental validation for a sensor-driven electromechanical UVC system.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.Sc. Mechatronics and Robotics</h3>
            <h4 className="vertical-timeline-element-subtitle">Hochschule Schmalkalden · Germany</h4>
            <p>
              Graduate studies focused on robotics, embedded systems, intelligent control, simulation, and applied machine learning.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2017 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.E. Mechanical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">K. K. Wagh Institute · Nashik, India</h4>
            <p>
              Built a multidisciplinary foundation in mechanical design and engineering, culminating in a disaster-response robot thesis project.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
