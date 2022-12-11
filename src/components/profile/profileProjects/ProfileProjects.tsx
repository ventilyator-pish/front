import { ProjectCards } from '@components/cards/projectCard/ProjectCard';
import styles from './ProfileProjects.module.scss'
import {Button} from "react-bootstrap";
import {handleIsShowCreatingProjectModal} from "@store/modal/modalStore";
import React from "react";


const ProfileProjects = () => {
    return <div>
        <div className={styles.flexHeader}>
            <h3 className={styles.subtitle}>Проекты студента</h3>
            <Button className={styles.createProject} onClick={() => handleIsShowCreatingProjectModal(true)}>Создать проект</Button>
        </div>

        <ProjectCards />
    </div>
}

export default ProfileProjects;
