import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import { GetProjectRequest, ProjectRequest } from "@src/utils/api/types/main";

const projectRequests = createDomain();

export const getStudentProjectRequests = projectRequests.createEffect(async (student_id: string) => {
    const res = await http.get<GetProjectRequest>(urls.invites(student_id, "company"));
    return res.data;
});


export const getProjectResponses = projectRequests.createEffect(async (project_id: string) => {
    const res = await http.get<GetProjectRequest>(urls.invites(project_id, "student"));
    return res.data;
});
