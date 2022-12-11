import React, {FC, useCallback, useEffect, useState} from 'react';
import {useStore} from "effector-react";
import styles from "@components/cards/projectCard/ProjectCard.module.scss";
import {$projects, getProjects} from "@store/projects/projectsStore";
import {Button, Form} from "react-bootstrap";
import {Project} from "@src/utils/api/types/main";
import {useLocation, useNavigate} from "react-router-dom";
import {isProjectById} from "@src/utils/isProjectById";
import CustomSelect from "@components/UI/CustomSelect";
import EmptyImage from "@components/plugs/EmptyImage";
import {PROJECT} from "@src/routes/routes";
import {$modals, handleIsShowFinancingProjectModal} from "@store/modal/modalStore";
import CreatingProjectModal from "@components/modals/creatingProject/CreatingProjectModal";
import {$me} from "@store/me/meStore";
import FinancingModal from "@components/modals/financingModal/FinancingModal";

interface ProjectCardProps {
    role: 'redactor' | "viewer"
    project: Project
}
const values = [
    { value: 'IT', label: 'IT' },
    { value: 'ML', label: 'ML' },
    { value: 'Frontend', label: 'Frontend' },
];
export const ProjectCard: FC<ProjectCardProps> = ({role, project}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const me = useStore($me)
    console.log(project, me)
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
        <div className={styles.student} onClick={() => navigate(PROJECT + project.id)}>
            <FinancingModal />
            {
                image ? <div className={styles.avatar}><img src={image} alt="photo" className={styles.avatarImage}/></div> : <EmptyImage type={'project'}/>
            }
            <Form.Control value={nameValue} className={styles.name} disabled={!isRedactor()} onChange={nameHandler}/>
            <Form.Control as={'textarea'} disabled={!isRedactor()} className={styles.about} value={descriptionValue}
                          onChange={descriptionHandler}/>
            {
                isProjectById(pathname) &&
                <div className={styles.profileOpportunities}>
                    <CustomSelect options={values} defaultValue={values[0]} isDisabled={true}/>
                    <div className={styles.label}>Категория</div>
                    <Button className={styles.sendMessageBtn}>Отправить сообщение</Button>
                    <Button className={styles.sendMessageBtn} onClick={() => handleIsShowFinancingProjectModal(true)}>Запросить финансирование</Button>
                </div>
            }
        </div>
    );
};


interface ProjectCardsProps {
    company_id?: number
    student_id?: number
}

export const ProjectCards: FC<ProjectCardsProps> = ({company_id, student_id}) => {
    const [ projects, setProjects ] = useState<Project[]>([]);
    const modals = useStore($modals)
    useEffect(() => {
        getProjects().then((projects) => {
            setProjects(projects.filter((project) => (
                (!company_id && !student_id)
                || (company_id && project?.company_id === company_id)
                || (student_id && project?.student_id === student_id)
            )))
        })
    }, [company_id, student_id, modals.isShowCreatingProjectModal])

    return (
      <>
          <CreatingProjectModal type={'student'}/>
          <div className={styles.projects}>
              {projects.map((project) => (
                <ProjectCard role={'viewer'} key={project.id} project={project}/>))}
          </div>
      </>

    )
};

