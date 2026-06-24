import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const roboticsTools = [
    "ROS", "ROS 2", "Python", "C++", "MoveIt 2",
    "Gazebo", "PyBullet", "Linux"
];

const embeddedTools = [
    "Embedded C", "STM32", "Arduino", "PLC", "SolidWorks",
    "Fusion 360", "KiCad", "3D Printing"
];

const intelligentSystemsTools = [
    "PyTorch", "OpenCV", "Reinforcement Learning", "Imitation Learning",
    "YOLO", "LangChain", "Hugging Face", "Ollama"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x"/>
                        <h3>Robotics Software &amp; Control</h3>
                        <p>I develop robotic systems from simulation to hardware, including motion planning, inverse kinematics, sensor integration, digital twins, and remote operation.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {roboticsTools.map((label) => (
                                <Chip key={label} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                        <h3>Embedded Systems &amp; Prototyping</h3>
                        <p>I combine firmware, electronics, mechanical design, and rapid prototyping to build and validate reliable mechatronic systems.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {embeddedTools.map((label) => (
                                <Chip key={label} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>Robot Learning &amp; Computer Vision</h3>
                        <p>I apply reinforcement learning, imitation learning, computer vision, and language models to robotic perception, manipulation, and human-robot interaction.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {intelligentSystemsTools.map((label) => (
                                <Chip key={label} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
