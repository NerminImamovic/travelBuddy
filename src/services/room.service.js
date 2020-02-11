const { Room } = require("../models/room.model");
RoomService = {
    /**
     * Add book.
     * @param data
     * @return book 
     */
    async addRoom (data) {

        room = new Room({
            type: data.type,
            city: data.city,
            name: data.name,
            date: data.date,
          });
        await room.save();        

        return room;
    },
    /**
     * Get All Rooms.
     * @return Rooms
     */
    async getAllRooms() {
        const rooms = await Room.find({});

        return rooms;
    },
};

exports.RoomService = RoomService;