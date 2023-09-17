const DIRECTIONS = {
    NORTH: "north",
    SOUTH: "south",
    EAST: "east",
    WEST: "west",
  };
  function checkIfObstacle(x, y, obstacles) {
      return obstacles.some(([obsX, obsY]) => x === obsX && y === obsY);
  }
  function moveRover( command, x, y, direction ){
      const commandArray = command.split(''); // FFFLFRFF
  
      for( let i = 0; i<commandArray.length; i++){
  
          if(direction == DIRECTIONS.WEST){
              
              if(commandArray[i] == 'F'){
                  x--;
  
                  if(checkIfObstacle(x, y)){
                      x++
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
  
                  }
                  
              }else if(commandArray[i] == 'B'){
                  x++;
  
                  if(checkIfObstacle(x, y)){
                      x--
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
                  }
          
              }else if(commandArray[i] == 'L'){
                  direction = DIRECTIONS.SOUTH;
              
              } else if (commandArray[i] == 'R'){
                  direction = DIRECTIONS.NORTH;
              
              }
          } else if (direction == DIRECTIONS.NORTH){
              if(commandArray[i] == 'F'){
                  y++;
                  if(checkIfObstacle(x, y)){
                      y--;
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
                  }
          
              }else if(commandArray[i] == 'B'){
                  y--;
                  if(checkIfObstacle(x, y)){
                      y++;
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
                  }
          
              }else if(commandArray[i] == 'L'){
                  direction = DIRECTIONS.WEST;
              
              } else if (commandArray[i] == 'R'){
                  direction = DIRECTIONS.EAST;
              
              }  
          } else if (direction == DIRECTIONS.EAST){
              if(commandArray[i] == 'F'){
                  x++;
                  if(checkIfObstacle(x, y)){
                      x--;
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
                  }
          
              }else if(commandArray[i] == 'B'){
                  x--;
                  if(checkIfObstacle(x, y)){
                      x++;
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
                  }
          
              }else if(commandArray[i] == 'L'){
                  direction = DIRECTIONS.NORTH;
              
              } else if (commandArray[i] == 'R'){
                  direction = DIRECTIONS.SOUTH;
              
              }
          } else if (direction == DIRECTIONS.SOUTH){
              if(commandArray[i] == 'F'){
                  y--;
                  if(checkIfObstacle(x, y)){
                      y++;
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
                  }
          
              }else if(commandArray[i] == 'B'){
                  y++;
                  if(checkIfObstacle(x, y)){
                      y--;
                      return "(" + x + ", " + y + ") " + direction + " rover stopped because of an obstacle"
                  }
  
          
              }else if(commandArray[i] == 'L'){
                  direction = DIRECTIONS.EAST;
              
              } else if (commandArray[i] == 'R'){
                  direction = DIRECTIONS.WEST;
              
              }
          }
  
  
      }
  
      return  "(" + x + ", " + y + ") " + direction
  
  }
  
  
  console.log(moveRover('FFFFFL', 3, 5, 'east'))
  // 5, 4, 'west'
  