import {ServerResponse} from "@src/utils/api/types/global";

export type Student = {
    id: number;
    email: string;
    image: string | undefined;
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
    interest_tags?: Tag[];
    skills?: Tag[]
};

export type Project = {
    id: number;
    image?: string;
    name: string;
    description: string;
    is_verified?: boolean;
    company?: number;

    team?: Student[];
    student_id?: number;
    company_id?: number;
};

export type Tag = {
    id: number;
    keyword: string;
    color: string;
}

export type CreatingProjectType = {
    file: string;
    name: string;
    description: string;
}

export type Company = {
    id: number;
    name: string;
    description: string;
    is_verified: boolean;
    interest_tags: any;
    image: null | string;
    skills: any;

}

export type User = {
    id: number;
    email: string;
    username: string;
    interest_tags?: number[];
    skills?: number[]
    studentprofile: Student;
    company: Company | null
}

export type Review = {
    id: number;
    company: Company;
    updated_at: string;
    review: string;
}

export type ProjectRequest = {
    id: number
    initiator: string
    datetime: string
    state: string
    company: number
    student: Student
    project: Project
}

export type GetStudents = Student[];
export type GetProjects = Project[];
export type GetProjectRequest = ProjectRequest[];
