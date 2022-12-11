import { ProjectCards } from '@components/cards/projectCard/ProjectCard';
import styles from './ProfileProjects.module.scss'
import {Button} from "react-bootstrap";
import {handleIsShowCreatingProjectModal} from "@store/modal/modalStore";
import React from "react";
import { useStore } from 'effector-react';
import { $me } from '@store/me/meStore';


const ProfileProjects = () => {
    const me = useStore($me)

    return <div>
        <div className={styles.flexHeader}>
            <h3 className={styles.subtitle}>Проекты студента</h3>
            <Button className={styles.createProject} onClick={() => handleIsShowCreatingProjectModal(true)}>Создать проект</Button>
        </div>

        <ProjectCards student_id={me?.studentprofile?.id}/>
    </div>
}

export default ProfileProjects;
