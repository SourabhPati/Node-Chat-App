const socket = getSocket()

const $activeRooms = document.querySelector('#active-rooms')
const $activeRoomId = document.querySelector('active-room-id')
const $roomId = document.querySelector('#room-id')

const activeRoomsTemplate = document.querySelector('#active-rooms-template').innerHTML

socket.on('liveRooms', (liveRooms) => {
    const html = Mustache.render(activeRoomsTemplate, {
        liveRooms
    })
    $activeRooms.insertAdjacentHTML('beforeend', html)
})
