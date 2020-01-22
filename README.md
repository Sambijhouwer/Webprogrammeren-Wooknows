# WEBIK_Hooknows_2020
Trivia Project for Webik 2020 @uva

### How to install 
- pip install -r requirements.txt
- run: python application.py (flask run won't work)

# Projectleden

- Steijn Wehman 
- Sam Bijhouwer
- Sascha Kolthof
- Anasimon Wissa

# Samenvatting

Hoo Knows is een multiplayer Trivia spel. Spelers kunnen een unieke username aanmaken en een room aanmaken
of een al bestaande room joinen. In deze room zitten 3 (of minder) andere spelers. Zij krijgen allemaal
een vraag te zien en moeten zo snel mogelijk goed antwoord geven op de vraag. Het thema van de vragen 
wordt gekozen door één van de spelers, de quizmaster. Deze wordt random gekozen na een random aantal rondes.
Na een variabel aantal vragen wordt de winnaar bepaald.

# Views
- Zie doc

# Features

- Username bedenken
- Room aanmaken
- Room joinen
- The Quizmaster

# MVP

De volgende functies moeten worden geimplementeerd worden om aan onze minimale eisen te voldoen.
- usernames kunnen kiezen
- quizmaster
- rooms maken/joinen
- Vragen kunnen beantwoorden
- interessant winsysteem

# Afhankelijkheden

- bulma.io
- opentdb.com
- github
- vuejs.org
- flask(socket.io)

# concurrerende websites

- kahoot.com
- vraevrae.nl

# Controllers

-index
    This is the main page, here you can create a room, join a room and choose your username
-game
    This is the page where the rooms are hosted and the game takes place.



# plugins and frameworks

- Flask
    https://flask.palletsprojects.com/en/1.1.x/
- SocketIO
    https://socket.io/docs/
- bulma
    https://bulma.io/documentation/
- Vue
    https://vuejs.org/v2/guide/

# schetsen
homepage before username
![homepage before username](doc/homepage1.png)
homepage after username
![homepage after username](doc/homepage2.png)
game lobby
![game lobby](doc/lobby.png)

