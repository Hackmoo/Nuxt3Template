export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = false // Temporary just to see if it works
    
    if (to.path === '/login') {
        // If the user is trying to access the login page, let them proceed
        return
    }
    
    if (isLoggedIn) {
        // If the user is logged in, allow them to proceed to their desired destination
        return
    }

    // If the user is not logged in and trying to access any page other than the login page,
    // redirect them to the login page
    return '/login'
})