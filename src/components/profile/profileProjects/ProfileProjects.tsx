import { ProjectCards } from '@components/cards/projectCard/ProjectCard';
import styles from './ProfileProjects.module.scss'


const ProfileProjects = () => {
    return <div>
        <h3 className={styles.link}>Мои проекты</h3>
        <ProjectCards />
    </div>
}

export default ProfileProjects;