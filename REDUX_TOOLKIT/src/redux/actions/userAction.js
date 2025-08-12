
export const getUsers = (user) => ({
    type: 'GETUSERS',
    payload: user
})



export const edituser = (user) => ({
    type: 'EDIT',
    payload:user
})

export const deleteUser = (user) => ({
    type: 'DELETE',
    payload:user
})