var GRID_SIZE = 10

var myRover = {
  position: [0,0],
  direction: 'N'
};

//Add some random obstacles
var obstacles = [];
obstacles.push([4,2]);
obstacles.push([1,2]);

function isInArray(array, value) {
  var match = false;
  array.forEach(function(obstacle){
    if (value[0] == obstacle[0] && value[1] == obstacle[1]) {
      match = true;
    }
  });
  return match;
}

function moveRover(rover, direction) {

  oldPosition = rover.position;

  switch(rover.direction) {
    case 'N':
      direction == 'f' ? rover.position[0]++ : rover.position[0]--
      rover.position[0] = (rover.position[0] + GRID_SIZE) % GRID_SIZE
      break;
    case 'E':
      direction == 'f' ? rover.position[1]++ : rover.position[1]--
      rover.position[1] = (rover.position[1] + GRID_SIZE) % GRID_SIZE
      break;
    case 'S':
      direction == 'f' ? rover.position[0]-- : over.position[0]++
      rover.position[0] = (rover.position[0] + GRID_SIZE) % GRID_SIZE
      break;
    case 'W':
      direction == 'f' ? rover.position[1]-- : rover.position[1]++
      rover.position[1] = (rover.position[1] + GRID_SIZE) % GRID_SIZE
      break;
  }

  if (isInArray(obstacles, rover.position)) {
    return false;
  }
  else {
    return true;
  }

}

function turnRover(rover, direction) {

  switch(rover.direction) {
    case 'N':
      rover.direction = direction == 'l' ? 'W' : 'E'
      break;
    case 'E':
      rover.direction = direction == 'l' ? 'N' : 'S'
      break;
    case 'S':
      rover.direction = direction == 'l' ? 'E' : 'W'
      break;
    case 'W':
      rover.direction = direction == 'l' ? 'S' : 'N'
      break;
    };

    //console.log("New Rover Direction: " + rover.direction);
}

function executeMovements(commands) {
  console.log('Rover position: ' + myRover.position + ', Facing direction: ' + myRover.direction)
  for (var i = 0; i < commands.length; i++) {
    command = commands[i];
    if (command == 'f' || command == 'b') {
      if (!moveRover(myRover, command)) {
        console.log('Obstacle hit')
        break;
      }
    }
    else if (command == 'l' || command == 'r') {
      turnRover(myRover, command);
    }
    console.log('Movement: ' + command + ',  Rover position: ' + myRover.position + ', Facing direction: ' + myRover.direction)
  }
}

executeMovements('fffrfflfffbb');
