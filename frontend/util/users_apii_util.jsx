//Fetch user info from backend
export const fetchUser = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
)