# realmic-dnd-gen
This is a web based solution to creating characters easy for Realmic-Style DnD, a watered down version of Dungeons and Dragons for playing over Teamspeak with or without a game board. The page is intended to work client side.

##Features
* Add create your character by giving basic information.
* The page contacts RANDOM.ORG for its stats, giving the most random number possible without sacrificing for an excessive amount of wait time.
* Outputs XML for Excel input of character information.

###Todo
* Improve XML Output.
* Create character sheet for download based on information.

# THIS REQUIRES A PERSONAL RANDOM.ORG KEY TO BE ADDED.
Visit [Random.org](https://api.random.org/json-rpc/1/) for information on obtaining a key. Once you have your key, add a randomorgkey.js to the /js/ folder and define `var key = "YOURKEYHERE";` in the file.
