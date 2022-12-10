import React from 'react';
import styles from "@pages/profile/Profile.module.scss";
import {projects} from "@components/cards/projectCard/Projects.mock";
import ProjectAbout from "@components/project/projectAbout/ProjectAbout";
import ProjectActivity from "@components/project/projectActivity/ProjectActivity";
import ProjectWhoNeed from "@components/project/projectWhoNeed/ProjectWhoNeed";
import {ProjectCard} from "@components/cards/projectCard/ProjectCard";

const Project = () => {
    return (
        <div className={styles.wrapper}>
            {/*<div></div>*/}
            <ProjectCard role={'redactor'} project={projects[0]} />
            {/*<StudentCard role={'redactor'} id={student.id} name={student.name} course={student.course} direction={student.direction} photo={student.photo}/>*/}
            <div className={styles.about}>
                <ProjectAbout />
                <ProjectActivity />
                <ProjectWhoNeed />
            </div>
        </div>
    );
};

export default Project;
