import React from "react";
import '../assets/styles/Project.scss';

const projects = [
    {
        title: "Remote Robotics Training Platform",
        period: "April 2025 - Present",
        description: "A ROS 2 digital twin and remote experimentation platform for real-time co-simulation and closed-loop control of a 4-DOF robotic arm.",
        technologies: ["ROS 2", "MoveIt 2", "Docker", "XPRA", "Teensy"]
    },
    {
        title: "Curriculum-Based SAC for 7-DOF Manipulation",
        period: "February 2026 - March 2026",
        description: "A Soft Actor-Critic learning pipeline for continuous control of a KUKA iiwa, reaching around 80% task success within 500 training episodes.",
        technologies: ["PyTorch", "PyBullet", "SAC", "Curriculum Learning"]
    },
    {
        title: "Fruit Sorting Robot",
        period: "May 2026",
        description: "An imitation-learning fruit sorting system trained from 150 demonstrations across three fruit categories using an ACT policy.",
        technologies: ["LeRobot", "ACT", "Hugging Face", "AWS"]
    },
    {
        title: "Autonomous Navigation on Unitree Go1",
        period: "October 2025 - December 2025",
        description: "A multi-sensor state-estimation and indoor navigation pipeline combining LiDAR, IMU, TF, and AMCL on a legged robot.",
        technologies: ["ROS 1", "ROS 2", "LiDAR", "IMU", "AMCL"]
    },
    {
        title: "LLM-Controlled UR5e Cobot",
        period: "July 2025 - November 2025",
        description: "A conversational robot-control system that converts natural-language commands into safe joint and Cartesian motions in approximately five seconds.",
        technologies: ["ROS 2", "UR5e", "MoveIt 2", "LangChain", "LLM"]
    },
    {
        title: "Disaster Response Robot",
        period: "October 2020 - May 2021",
        description: "A sensor-equipped unmanned ground vehicle with ESP32-CAM and YOLO-based human detection, achieving more than 88% detection accuracy.",
        technologies: ["SolidWorks", "YOLO", "Arduino", "Sensor Fusion"]
    }
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Featured Projects</h1>
            <p className="projects-intro">
                Selected robotics projects spanning control, simulation, robot learning,
                perception, and embedded systems. Detailed media and repositories are coming next.
            </p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project" key={project.title}>
                        <div className="project-media" aria-label={`${project.title} media placeholder`}>
                            <span>Project media coming soon</span>
                        </div>
                        <p className="project-period">{project.period}</p>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Project;
