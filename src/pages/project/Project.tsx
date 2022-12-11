import React from 'react';
import styles from "@pages/profile/Profile.module.scss";
import {projects} from "@components/cards/projectCard/Projects.mock";
import ProjectAbout from "@components/project/projectAbout/ProjectAbout";
import ProjectActivity from "@components/project/projectActivity/ProjectActivity";
import ProjectWhoNeed from "@components/project/projectWhoNeed/ProjectWhoNeed";
import {ProjectCard} from "@components/cards/projectCard/ProjectCard";
import ProjectTeam from '@components/project/projectTeam/ProjectTeam';
import ProjectResponses from '@components/project/projectResponses/ProjectResponses';


const Project = () => {
    const id = projects[0].id;
    const project = projects[0];

    return (
        <div className={styles.wrapper}>
            {/*<div></div>*/}
            <ProjectCard role={'redactor'} project={project} />
            {/*<StudentCard role={'redactor'} id={student.id} name={student.name} course={student.course} direction={student.direction} photo={student.photo}/>*/}
            <div className={styles.about}>
                <ProjectAbout />
                <ProjectActivity />
                <ProjectWhoNeed />
                <ProjectTeam project={project}/>
                <ProjectResponses  project_id={id.toString()}/>
            </div>
        </div>
    );
};

export default Project;
