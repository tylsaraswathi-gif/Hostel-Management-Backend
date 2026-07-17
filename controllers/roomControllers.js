let rooms = [
  {
    roomNo: 201,
    hostelBlock: "A Block",
    roomType: "3 Sharing",
    capacity: 3,
    occupied: 2,
    status: "Available"
  }
];

// Get Rooms

export function getRooms(req, res) {

  res.status(200).json(rooms);

}

// Get Room By Number

export function getRoomById(req, res) {

  const roomNo = Number(req.params.roomNo);

  const room = rooms.find(
    (room) => room.roomNo === roomNo
  );

  if (!room) {

    return res.status(404).json({
      success: false,
      message: "Room Not Found"
    });

  }

  res.status(200).json({
    success: true,
    room
  });

}

// Add Room

export function addRoom(req, res) {

  const room = req.body;

  const existingRoom = rooms.find(
    (r) => r.roomNo === room.roomNo
  );

  if (existingRoom) {

    return res.status(400).json({
      success: false,
      message: "Room Already Exists"
    });

  }

  rooms.push(room);

  res.status(201).json({
    success: true,
    message: "Room Added Successfully",
    room
  });

}

// Update Room

export function updateRoom(req, res) {

  const roomNo = Number(req.params.roomNo);

  const updatedRoom = req.body;

  let roomFound = false;

  rooms = rooms.map((room) => {

    if (room.roomNo === roomNo) {

      roomFound = true;

      return {
        ...room,
        ...updatedRoom
      };

    }

    return room;

  });

  if (!roomFound) {

    return res.status(404).json({
      success: false,
      message: "Room Not Found"
    });

  }

  res.status(200).json({
    success: true,
    message: "Room Updated Successfully"
  });

}

// Delete Room

export function deleteRoom(req, res) {

  const roomNo = Number(req.params.roomNo);

  const room = rooms.find(
    (room) => room.roomNo === roomNo
  );

  if (!room) {

    return res.status(404).json({
      success: false,
      message: "Room Not Found"
    });

  }

  rooms = rooms.filter(
    (room) => room.roomNo !== roomNo
  );

  res.status(200).json({
    success: true,
    message: "Room Deleted Successfully"
  });

}