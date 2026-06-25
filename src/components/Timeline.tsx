import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional and Academic Journey So Far</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="April 2025 - August 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Eviotec Technologieentwicklung · Schmalkalden, Germany</h4>
            <p>
              Developed embedded control firmware and supported system design,
              simulation, prototyping, and experimental validation for a
              sensor-driven electromechanical UVC system.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="October 2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.Sc. Mechatronics and Robotics</h3>
            <h4 className="vertical-timeline-element-subtitle">Hochschule Schmalkalden · Germany</h4>
            <p>
              Graduate studies focused on robotics, embedded systems, intelligent
              control, simulation, and applied machine learning.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2022 - September 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Production Engineer — PPC</h3>
            <h4 className="vertical-timeline-element-subtitle">Prime Graphite Pvt. Ltd. · Nashik, India</h4>
            <p>
              Managed cross-functional production planning across design,
              procurement, and manufacturing departments.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2017 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.E. Mechanical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">K. K. Wagh Institute · Nashik, India</h4>
            <p>
              Built a multidisciplinary foundation in mechanical design and
              engineering, culminating in a disaster-response robot thesis project.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
