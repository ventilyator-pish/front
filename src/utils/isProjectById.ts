export const isProjectById = (pathname: string) => {
    const regexp = /\/project\/\n/
    return regexp.test(pathname)
}
