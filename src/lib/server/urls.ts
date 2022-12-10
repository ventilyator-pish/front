export const urls = {
    authLogin: () => `/api/auth/jwt/create/`,
    authLogout: () => `/api/auth/token/logout/`,
    me: () => `/api/auth/users/me`,
    students: () => '/api/profiles/',
    studentById: (id: string) => `/api/profiles/${id}/`,
    projects: () => '/api/projects/',
    tags: (keyword: string) => `/api/tags/?keyword=${keyword}`
}
