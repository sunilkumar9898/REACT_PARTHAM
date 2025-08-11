export const login = (user) => ({
    type: "LOGIN",
    payload:user,

})


export const logOut = () => ({
    type: "LOGOUT"
})