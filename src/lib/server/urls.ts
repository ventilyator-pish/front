export const urls = {
    authLogin: () => `/api/auth/token/login/`,
    authLogout: () => `/api/auth/token/logout/`,
    students: () => '/api/profiles/',
    studentById: (id: string) => `/api/profiles/${id}/`,
    projects: () => '/api/projects/'
}
