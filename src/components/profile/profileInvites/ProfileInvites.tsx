import { ProjectCard } from "@components/cards/projectCard/ProjectCard";
import { ProjectRequest } from "@src/utils/api/types/main";
import { getStudentProjectRequests } from "@store/projecRequests/projectRequests";
import { FC, useEffect, useState } from "react";


interface ProfileInvitesProps {
    student_id: string | undefined;
}


const ProfileInvites: FC<ProfileInvitesProps> = ({student_id}) => {
    const [invites, setInvites] = useState<ProjectRequest[]>();

    useEffect(() => {
        if(!student_id) return;
        getStudentProjectRequests(student_id).then((result) => {
            setInvites(result);
        })
    }, [student_id])

    if(!invites) {
        return <div></div>
    } 

    return <div>
        <h3>приглашения</h3>
        {invites.map(
            (invite) => <div key={invite.id}>
                <ProjectCard role="viewer" project={invite.project}/>
                <button>Принять приглашение</button>
                <button>Отколнить приглашение</button>
            </div>
        )}
    </div>
}


export default ProfileInvites;
