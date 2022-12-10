import React, {FC, useCallback, useEffect, useState} from 'react';
import {useStore} from "effector-react";
import styles from "@components/cards/studentCard/StudentCard.module.scss";
import {$projects, getProjects} from "@store/projects/projectsStore";
import {Form} from "react-bootstrap";
import {Project} from "@src/utils/api/types/main";
import {useLocation} from "react-router-dom";

interface ProjectCardProps {
    role: 'redactor' | "viewer"
    project: Project
}
export const ProjectCard: FC<ProjectCardProps> = ({role, project}) => {
    const location = useLocation()
    console.log(location)
    const {description, image, name, id, company, is_verified} = project
    const [nameValue, setName] = useState(name)
    const [descriptionValue, setDescriptionValue] = useState(description)
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(e.target.value)
    }
    const descriptionHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDescriptionValue(e.target.value)
    }
    const isRedactor = useCallback(() => {
        return role === 'redactor'
    }, [role])
    return (
        <div className={styles.student}>
            {
                image ? <img src={image} alt="photo" className={styles.avatar}/> : <div></div>
            }
            <Form.Control value={nameValue} className={styles.name} disabled={!isRedactor()} onChange={nameHandler}/>
            <Form.Control as={'textarea'} disabled={!isRedactor()} className={styles.about} value={descriptionValue}
                          onChange={descriptionHandler}/>
        </div>
    );
};

export const ProjectCards = () => {
    const projects = useStore($projects)
    useEffect(() => {
        getProjects().then()
    }, [])
    return (
        <div className={styles.projects}>
            {projects.map((project) => (
                <ProjectCard role={'viewer'} key={project.id} project={project}/>))}
        </div>
    )
};

