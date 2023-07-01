/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/
// // Wanting to change the "quick notes text" inside button. 
// let notesBtn = document.getElementsByClassName("btn btn-sm btn-primary");
// notesBtn.textContent = "Read Me First"; 
// let playerInput = document.getElementById("user-input");

class Room {
    constructor(name, description, directions, inventory, sign) {
            this.name = name,
            this.description = description,
            this.directions = directions,
            this.inventory = inventory,
            this.sign = sign
} 
}

const mainLobby = new Room(
    "Main Lobby",
    "You are standing on an Italian marble floor in the Main Lobby of the Schermerhorn Symphony Center.  There is a concert tonight, and you want to attend but you don't have a ticket to enter. You see a Box Office to the West, an Usher blocking the entrance to the Concert Hall to the South, and an East Lobby to the East. The usher is holding a sign.",
    ["east", "south", "west"],  //anything else is a locked door (default/else??)      
    [],
    true,
); 
const eastLobby = new Room(
        "East Lobby",
        "You are standing in the East Lobby of the Schermerhorn Symphony Center. You see door into another room to the South, a the Main Lobby to the West. There is a Wooden Box on the floor.",
        ["south", "west"],
        ["silverCoin"],
        false,
);
const greenRoom = new Room( 
        "Green Room",
        "You are standing in the Green Room.  You see a couch, a violin, a painting of Kenneth Schermerhorn, and a window. To the North is the East lobby.",
        ["east"],
        ["violin", "goldenCoin"],
        false,
);
const boxOffice = new Room(
        "Box Office",
        "You are standing at the box office window. There is a sign on the glass. You smell food and coffee nearby.  You see a restaurant in the West Lobby to the South, the Main Lobby is to the East, and a Courtyard with a fountain is to the West.",
        ["south", "west", "east"],
        ["ticket"],
        true,       
);
const westLobby = new Room(
        "West Lobby",
        "You are standing in the West Lobby.  You see a restaurant counter selling coffee and pastries. Are you hungry?  You see a sign at the counter.  You also see a fountain in the courtyard to the West and a Box Office to the North.",
        ["west", "north"],
        ["goldCoin2", "pastry"],
        true,
);
const courtyard = new Room(
        "Courtyard",
        "You have entered the beautiful courtyard. You hear the water flowing through the fountain, you see a silver shine in the fountain, and you see blooming rose bushes.",
        ["east"]
        ["flower", "silverCoin2"],
        false,
);
    
const concertHall = new Room(
        "Concert Hall",
        "Congratulations! You made it to the concert on time! You hear musicians warming up and make your way to have a seat in the front row. Enjoy the concert! Following the concert, please exit to the North.",
        ["north"],
        ["program"],
        true
);


let locationStates = {
    mainLobby: [eastLobby, boxOffice],
    eastLobby: [mainLobby, greenRoom],
    greenRoom: [eastLobby],
    boxOffice: [mainLobby, westLobby],
    westLobby: [boxOffice, courtyard],
    courtyard: [westLobby]
};

// mainLobby = "Main Lobby";
// eastLobby = "East Lobby";
// greenRoom = "Green Room";
// boxOffice = "Box Office";
// westLobby = "West Lobby";
// courtyard = "Courtyard";
// concertHall = "Concert Hall";

let currentRoom = "mainLobby";
// console.log("You are currently in the " + currentRoom);
// let currentInventory = {
//     inventory: [],
// }



// used notes from 05_ state to help on this.

export const gameDetails = {   
    title: 'The Schermerhorn Symphony Center Game',
    desc: 'Welcome to the Schermerhorn Symphony Center, home of the Nashville Symphony Orchestra.  You are attending the concert tonight, but do not have a ticket!  Travel through the rooms, inspect items, read signs, etc until you find what you need for your ticket to enter! Good luck!',
    author: 'Laura Shaw',
    cohort: 'SBPT-2023',
    startingRoomDescription: "You are standing on an Italian marble floor in the Main Lobby of the Schermerhorn Symphony Center.  There is a concert tonight, and you want to attend but you don't have a ticket to enter. You see a Box Office to the West, an Usher blocking the entrance to the Concert Hall to the South, and the East Lobby to the East. The usher is holding a sign.",
    playerCommands: ['INSPECT', 'GIVE', 'READ', 'PICKUP', 'ENTER', 'DROP']
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
};

/* Rooms:
    - Main Lobby
    - East Lobby
    - Green Room
    - Concert Hall
    - Box Office 
    - West Lobby
    - Courtyard
*/

// startingRoomDescription = mainLobby.description;


export const domDisplay = (playerInput) => { 
    let playerCommands = playerInput.toLowerCase();

    if (playerCommands.includes('east')) {
        // function moveRoom() ?
        return(eastLobby.description);
    } else if (playerCommands.includes('west')) {
        return(boxOffice.description);
        // console.log('went west');
    } else if (playerCommands.includes('south')) {
        return("The Usher is holding a sign.  Would you like to read it?");
        // console.log('went south'); //works
    } else {
        return ("This is an unrecognized command");
    }
};
// playerCommands = commandInput

function moveRoom(newRoom) {
    let validRooms = locationStates.currentRoom;
    let valid = validRooms[newRoom];

    if(valid.includes(newRoom)) {
        currentRoom = newRoom;
        return(currentRoom);
        // console.log(currentRoom);
    } else {
        return(`You may not move from the ${currentRoom} to ${newRoom}.`);
    }
}

// moveRoom('westLobby');

const listInventory = () => {

    let itemsToTake = {
        "Main Lobby": [],
        "East Lobby": ["silverCoin"],
        "Green Room": ["violin", "goldenCoin"],
        "Box Office": ["ticket"],
        "West Lobby": ["goldenCoin2", "pastry"],
        "Courtyard": ["silverCoin2", "flower"],
        "Concert Hall": ["program"]
    }

    console.log(itemsToTake);

    return [itemsToTake];
}

listInventory();

let myInventory = "my inventory"

function checkInventory() {

}





// let rooms = {
//     "Main Lobby": {
//         description: "You are standing on an Italian marble floor in the Main Lobby of the Schermerhorn Symphony Center.  There is a concert tonight, and you want to attend but you don't have a ticket to enter. You see a Box Office to the West, an Usher blocking the entrance to the Concert Hall to the South, and an East Lobby to the East. The usher is holding a sign.",
//         directions: {
//             "East": "East Lobby",
//             "South": "Concert Hall",
//             "West": "Box Office"
//         },
//         inventory: [],
//         sign: true
        
//     },
//     "East Lobby": { 
//         description: "You are standing in the East Lobby of the Schermerhorn Symphony Center. You see door into another room to the South, a the Main Lobby to the West. There is a Wooden Box on the floor.",
//         "directions": {
//             "South": "Green Room",
//             "West": "Main Lobby",
//             "East": "Locked Doors",
//             "North": "Locked Doors"
//         },
//         inventory: [silverCoin],
//         sign: false
//     },
//     "Green Room": { 
//         description: "You are standing in the Green Room.  You see a couch, a violin, a painting of Kenneth Schermerhorn, and a window. To the North is the East lobby.",
//         directions: {
//             "South": "Locked Doors",
//             "West": "Locked Doors",
//             "East": "Locked Doors",
//             "North": "East Lobby"
//         },
//         inventory: [violin, goldenCoin],
//         sign: false
//     },
//     "Box Office": {
//         "description": "You are standing at the box office window. There is a sign on the glass. You smell food and coffee nearby.  You see a restaurant in the West Lobby to the South, the Main Lobby is to the East, and a Courtyard with a fountain is to the West.",
//         directions: {
//             "South": "West Lobby",
//             "West": "Courtyard",
//             "East": "Main Lobby",
//             "North": "Locked Doors"
//         },
//         inventory: [ticket],
//         sign: true       
//     },
//     "West Lobby": {
//         description: "You are standing in the West Lobby.  You see a restaurant counter selling coffee and pastries. Are you hungry?  You see a sign at the counter.  You also see a fountain in the courtyard to the West and a Box Office to the North.",
//         directions: {
//             "South": "Locked Doors",
//             "West": "Courtyard",
//             "East": "Locked Doors",
//             "North": "Box Office"
//         },
//         inventory: [goldCoin2, pastry],
//         sign: true
//     },
//     "Courtyard": {
//         description: "You have entered the beautiful courtyard. You hear the water flowing through the fountain, you see a silver shine in the fountain, and you see blooming rose bushes.",
//         directions: {
//             "South": "Locked Doors",
//             "West": "Locked Gate",
//             "East": "West Lobby",
//             "North": "Locked Gate"
//         },
//         inventory: [flower, silverCoin2],
//         sign: false
//     },
    
//     "Concert Hall": {
//         description: "Congratulations! You made it to the concert on time! You hear musicians warming up and make your way to have a seat in the front row. Enjoy the concert! Following the concert, please exit to the North.",
//         directions: {
//             "North": "Main Lobby"
//         },
//         inventory: [program],
//         sign: true
//     }
// }




 // Your code here








// export const domDisplay = (playerInput) => { 

// playerCommands = commandInput


/*
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here

