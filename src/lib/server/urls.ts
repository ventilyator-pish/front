export const urls = {
    authLogin: () => `/api/auth/jwt/create/`,
    authLogout: () => `/api/auth/token/logout/`,
    me: () => `/api/auth/users/me`,
    students: () => '/api/profiles/',
    studentById: (id: string) => `/api/profiles/${id}/`,
    projects: () => '/api/projects/',
    reviews: (id: string) => `/api/reviews/?student=${id}`,
    tags: (keyword: string) => `/api/tags/?keyword=${keyword}`
}
