import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAws,
    faDocker,
    faGitAlt,
    faGithub,
    faLinux,
    faPython
} from '@fortawesome/free-brands-svg-icons';
import {
    faBrain,
    faCamera,
    faCode,
    faCube,
    faCubes,
    faMicrochip,
    faNetworkWired,
    faRobot,
    faTerminal
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';

type Tool = {
    name: string;
    icon: React.ReactNode;
};

type ExpertiseItem = {
    title: string;
    description: string;
    icon: React.ReactNode;
    tools: Tool[];
};

const icon = (toolIcon: any) => <FontAwesomeIcon icon={toolIcon} />;

const expertiseItems: ExpertiseItem[] = [
    {
        title: "Robotics Software & Control",
        description: "I develop robotic systems from simulation to hardware, including motion planning, inverse kinematics, sensor integration, digital twins, and remote operation.",
        icon: icon(faRobot),
        tools: [
            { name: "ROS / ROS 2", icon: icon(faNetworkWired) },
            { name: "Python", icon: icon(faPython) },
            { name: "C++", icon: icon(faCode) },
            { name: "MoveIt 2", icon: icon(faRobot) },
            { name: "Gazebo", icon: icon(faCube) },
            { name: "PyBullet", icon: icon(faCubes) },
            { name: "Linux", icon: icon(faLinux) },
            { name: "Docker", icon: icon(faDocker) },
            { name: "Git", icon: icon(faGitAlt) }
        ]
    },
    {
        title: "Embedded Systems & Prototyping",
        description: "I combine firmware, electronics, mechanical design, and rapid prototyping to build and validate reliable mechatronic systems.",
        icon: icon(faMicrochip),
        tools: [
            { name: "Embedded C", icon: icon(faCode) },
            { name: "STM32", icon: icon(faMicrochip) },
            { name: "Arduino", icon: icon(faMicrochip) },
            { name: "PLC systems", icon: icon(faTerminal) },
            { name: "SolidWorks", icon: icon(faCube) },
            { name: "Fusion 360", icon: icon(faCubes) },
            { name: "KiCad", icon: icon(faMicrochip) },
            { name: "3D printing", icon: icon(faCube) }
        ]
    },
    {
        title: "Robot Learning & Computer Vision",
        description: "I apply reinforcement learning, imitation learning, computer vision, and language models to robotic perception, manipulation, and human-robot interaction.",
        icon: icon(faBrain),
        tools: [
            { name: "PyTorch", icon: icon(faBrain) },
            { name: "OpenCV", icon: icon(faCamera) },
            { name: "Reinforcement learning", icon: icon(faRobot) },
            { name: "Imitation learning", icon: icon(faNetworkWired) },
            { name: "YOLO", icon: icon(faCamera) },
            { name: "Hugging Face", icon: icon(faGithub) },
            { name: "AWS", icon: icon(faAws) },
            { name: "Ollama / local LLMs", icon: icon(faTerminal) }
        ]
    }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-list">
                    {expertiseItems.map((item) => (
                        <article className="skill-row" key={item.title}>
                            <div className="skill-copy">
                                <div className="skill-heading-icon">{item.icon}</div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="tool-rail" aria-label={`${item.title} tools`}>
                                {item.tools.map((tool) => (
                                    <div
                                        className="tool-icon"
                                        key={tool.name}
                                        title={tool.name}
                                        aria-label={tool.name}
                                    >
                                        {tool.icon}
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
