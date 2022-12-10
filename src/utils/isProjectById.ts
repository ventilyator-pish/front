export const isProjectById = (pathname: string) => {
    const regexp = /\/project\/[0-9]/
    return regexp.test(pathname)
}
