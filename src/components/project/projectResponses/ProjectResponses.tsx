import { StudentCard } from "@components/cards/studentCard/StudentCard";
import { ProjectRequest } from "@src/utils/api/types/main";
import { getProjectResponses } from "@store/projecRequests/projectRequests";
import { FC, useEffect, useState } from "react";

interface ProjectResponsesProps {
    project_id: string
}


const ProjectResponses: FC<ProjectResponsesProps> = ({project_id}) => {
    const [responses, setResponses] = useState<ProjectRequest[]>([]); 

    useEffect(() => {
        getProjectResponses(project_id).then((result) => {
            setResponses(result);
        })
    })

    if(!responses) {
        return <div></div>
    }

    return <div>
        <h3>Отклики</h3>

        {responses.map((response) => <div key={response.id}>
                <StudentCard student={response.student} role="viewer"/>
                <button>Принять заявку</button>
                <button>Отколонить заявку</button>
            </div>
        )}
    </div>
}


export default ProjectResponses;