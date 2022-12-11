import { StudentCard } from "@components/cards/studentCard/StudentCard";
import { Project } from "@src/utils/api/types/main";
import { FC } from "react";


interface ProjectTeamProps {
    project: Project
}


const ProjectTeam: FC<ProjectTeamProps> = ({project}) => {
    
    return <div>
        <h3>Команда проекта</h3>

        {project?.team?.map((student) => 
        <StudentCard key={student.id} role="viewer" student={student}/>    
    )}</div>
}


export default ProjectTeam;