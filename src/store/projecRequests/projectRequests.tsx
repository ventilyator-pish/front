import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import { GetProjectRequest, ProjectRequest } from "@src/utils/api/types/main";
import { number } from 'yup';
import Cookies from 'js-cookie';

const projectRequests = createDomain();


interface responseDecisionProps {
    request_id: number;
    decision: string;
}


export const getStudentProjectRequests = projectRequests.createEffect(async (student_id: string) => {
    const res = await http.get<GetProjectRequest>(urls.invites(student_id, "company"));
    return res.data;
});


export const getProjectResponses = projectRequests.createEffect(async (project_id: string) => {
    const res = await http.get<GetProjectRequest>(urls.invites(project_id, "student"));
    return res.data;
});


export const setResponse = projectRequests.createEffect(async ({request_id, decision}: any) => {
    const res = await http.post<ProjectRequest>(urls.decideRequest(request_id), {
        decision: decision
    }, {
        headers: {
            "X-CSRFToken": Cookies.get("csrftoken")
        }
    });
    return res.data;
})
