import React from 'react'
import './project-card.css';

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && <a>
                        <div></div>
                    </a>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
