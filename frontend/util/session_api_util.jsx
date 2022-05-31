//Sign up a new user
export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
)

//Login an existing user
export const login = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    })
)

//Logout a user
export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
)