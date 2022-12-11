export const urls = {
    authLogin: () => `/api/auth/jwt/create/`,
    authLogout: () => `/api/auth/token/logout/`,
    me: () => `/api/auth/users/me`,
    students: () => '/api/profiles/',
    studentById: (id: string) => `/api/profiles/${id}/`,
    projects: () => '/api/projects/',
    projectById: (id: string) => `/api/projects/${id}/`,
    tags: (keyword: string) => `/api/tags/?keyword=${keyword}`,
    filterStudents: (tagsIds: string) => `/api/profiles?tags=${tagsIds}`,
    reviews: (id: string) => `/api/reviews/?student=${id}`,
    createReview: () => `/api/reviews/`,
    invites: (id: string, initiator: string) => `/api/student_requests/?student=${id}&initiator=${initiator}`,
    companyById: (id: string) => `/api/companies/${id}/`,
    decideRequest: (id: number) => `/api/student_requests/${id}/make_response/`,
    crowdfounding: () => '/api/crowdfounding/',

}
