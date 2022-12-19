# Zorkington

![zork game west of house splash screen](https://res.cloudinary.com/btvca/image/upload/v1623935793/zork-west-of-house_ugpgww.jpg "Zork, West of House")

[The game Zork](https://en.wikipedia.org/wiki/Zork) was not the first text adventure game, but it was the first to achieve commercial success.

In this project, you will create a version of Zork born from your own beautiful mind. In our example case, it's one that takes place in the faraway kingdom of Burlington, Vermont. Feel free to use it as well :)

## Links

* <https://en.wikipedia.org/wiki/Zork>
* <https://classicreload.com/zork-i.html> - Play Zork here!
* <http://mentalfloss.com/article/29885/eaten-grue-brief-history-zork>
* [Zork running in a web browser on an IBM 5050 PC emulator written in JavaScript.](https://www.pcjs.org/disks/pcx86/games/infocom/zork1/)

## Goals

* Use Functions, Methods, and Objects.
* Use Classes, and constructor functions to create Objects.
* Understand **state** and **state transitions**.
* Understand complex control flow, based on conditions and variables.

## Design

Your code will need to represent several distinct states, including:

* The current room
  * Room description (immutable)
  * Room connection (immutable)
  * Room inventory (mutable)
* Other rooms
  * Room description (immutable)
  * Room connection (immutable)
  * Room inventory (mutable)
* The player
  * Player inventory (mutable)
  * Player status (mutable)

Think about appropriate data structures for each of these. Note that you do not need to write code for these until you are actually implementing a story that requires them, but it is good to make a rough plan early on, to anticipate pitfalls and estimate how difficult upcoming stories will be.

Sometimes a data structure that works well for the simple case will need to be altered to work for the general case. In this project, the app will grow (more rooms, more commands) from story to story and your data structures should change to accommodate.

You **may** want to create a **State Machine** to represent potential room transitions.

## Remember to Demonstrate

After implementing a story, *before* starting work on the next story...

* Ask a teacher or fellow student if they have time to "play client" for a demo
* Launch the program and let the client use it
* The client should try to prove that the program does what the story says it's supposed to do
* If the client rejects your story, keep coding until it works right, then do another demo

And during the day take breaks, and play each others' games!

## Project Stories - Required

> Note: These stories build off of the **Design** section above. While the stories provided are meant to implement those concepts, artistic liberty in how these stories manifest is ultimately yours. If you're unsure if an idea or mechanic will fulfill a certain story, ask your instructor.

--- 
### One Room

**When** the user opens your game in the browser

**Then** the displays introductory text. This is built from the **gameDetails** object.

**example:**
```txt
182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign.
>_
```

**And** waits for input.

**And** if the user types an unknown command

**Then** the game should output "I don't know how to ____" (or something similar).

```txt
>_gargle
Sorry, I don't know how to gargle.
```

## Immovable Objects

**Given** the player is in the `starting room`

**When** the player attempts to take something that is not takeable

**Then** the game denies the player

```txt
>_take sign
That would be selfish. How will other students find their way?
```

(assume " **And** returns to the prompt" after this and all future stories)

<!--/BOX-->

<!--BOX-->

## Inventory

**Given** the player is in the `next room`

**And** the player has not yet picked up the item

**When** the player enters a command to pick it up

**Then** the game allows the player to do so

```txt
>_take paper
You pick up the paper and leaf through it looking for comics 
and ignoring the articles, just like everybody else does.
```

**And** the item is added to the player's `inventory`

<!--/BOX-->

<!--BOX-->

## Display Inventory

**Given** an item is in the player's 'inventory'

**When** the player types `i` or `inventory` or `take inventory`

**Then** the game displays the player's `inventory`

```txt
You are carrying:
A copy of the local paper
```

<!--/BOX-->

<!--BOX-->

## Create More Rooms

Create at least 4 more rooms, with their own connections, puzzles, and/or inventories

Each room should have:

* A limited number of other rooms it connects to (you can't move directly between some rooms without going through others)
* A unique description
* A separate Inventory (the inventory can be empty)
* Optionally you can add more puzzles, locked doors, and interactive items.
* Players should be able to view their own inventory.
  * Common Commands could be:
    * "look"
    * "view"
    * "inventory"
---   

# REMEMBER:

The main goal of this project is to make it functional, **NOT** to make it fun. After making this functional, then go back to see what you can add to it.

--- 


# Stretch Goals & Ice Box Challenges

--- 
## Locked Out

**Given** the player is in the `starting room`

**When** the player attempts to enter a new room

**Then** the game denies the player

```txt
>_open door
The door is locked. There is a keypad on the door handle.
```
--- 
## Unauthorized Access

**Given** the player is in the `starting room`

**When** the player fails the puzzle (e.g. enters the incorrect password)

**Then** the game denies the player entry

```txt
>_enter code 00000
Bzzzzt! The door is still locked.
```

**And** the player remains in the `starting room`

--- 

## Speak friend and enter

**Given** the player is in the `starting room`

**When** the player solves a puzzle (e.g. enters a correct password)

**Then** the game allows the player to enter the `next room`

```txt
>_enter code 12345
Success! The door opens.
You enter the foyer and the door shuts behind you.
```

**And** the player moves into the `next room`

<!--/BOX-->

<!--BOX-->

## Foyer

**Given** the player is in the `next room`

**Then** the game displays a description, with at least one (takeable) item in said description

```txt
You are in a foyer. Or maybe it's an antechamber. 
Or a vestibule. 
Or an entryway. 
Or an atrium. 
Or a narthex. 
But let's forget all that fancy vocabulary, and just call it a foyer.
Anyways, it's definitely not a mudroom.
A copy of the local paper lies in a corner.
```

## Interact With an Item

**Given** the player has been given introductory text

**When** the player enters a valid command, and target

**Then** the game should output accordingly

```txt
>_ read sign
The sign says "Welcome to the classroom!"
Come on up to the third floor.
If the door is locked, use the code 12345."
```

**And** puts the player in the `starting room`

**And** returns to the prompt
<!-- BOX -->

## Drop Inventory

**Given** an item is in the player's `inventory`

**When** the player types `drop <ITEM>`

**Then** that item is removed from the player's `inventory`

```txt
>_drop paper
You drop the paper
```

**And** that item is added to the current room's `inventory`

<!--/BOX-->

<!--BOX-->

## Keep Doors Open

**Given** you have unlocked a door

**When** you try and open the door again

**Then** the door should still be unlocked, and allow you to pass to the next room

<!--/BOX-->

<!--BOX-->
--- 

Create a **puzzle** that can be solved to win, or loose, the game.


