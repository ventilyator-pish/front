import {ServerResponse} from "@src/utils/api/types/global";

export type Student = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    coverage?: string;
    isu: string;
    course: number;
    qualification_name: string;
    specialization_name: string;
    faculty_name: string;
    is_public?: boolean;
    is_verified?: boolean;
    user: number;

};

export type Project = {
    id: number;
    image?: string;
    name: string;
    description: string;
    is_verified?: boolean;
    company?: number;
};

export type GetStudents = ServerResponse<Student>
export type GetProjects = ServerResponse<Project>
