const users = []

const addUser = ({ id, username, room }) => {
    //Clean the data
    username = username.trim()
    room = room.trim()

    //Validate the data
    if (!room || !username) {
        return {
            error: 'Username and room are required'
        }
    }

    //Check for existing user
    const existingUser = users.find((user) => {
        return user.room.toLowerCase() === room.toLowerCase() && user.username.toLowerCase() === username.toLowerCase()
    })

    //Validate username
    if (existingUser || username.toLowerCase().includes('system')) {
        return {
            error: 'Username is in use or reserved!'
        }
    }

    //Store User
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room.toLowerCase() == room.trim().toLowerCase())
}

const getRooms = () => {
    const rooms = new Map()
    users.forEach((user) => {
        room = user.room
        if (rooms.has(room))
            rooms.set(room, rooms.get(room)+1)
        else
            rooms.set(room, 1)
    })
    return rooms
}

module.exports = {
    addUser,
    getUser,
    getUsersInRoom,
    removeUser,
    getRooms
}