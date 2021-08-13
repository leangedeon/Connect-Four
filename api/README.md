# Installation

Execute ```npm install```to install dependencies and then run ```npm run start``` to start proyect.

- Route [http://localhost:3001/game](http://localhost:3000/game)

### Available methods

- Create a Game
```
curl --location --request POST 'http://localhost:3001/game' \
--header 'Content-Type: application/json' \
--data-raw ''
```

- Get an available Game
```
curl --location --request GET 'http://localhost:3001/game' \
--header 'Content-Type: application/json' \
--data-raw ''
```

- Get an especific Game ID
```
curl --location --request GET 'http://localhost:3001/game/6116ae2d330e4d945f2a0703' \
--header 'Content-Type: application/json' \
--data-raw ''
```

- Update an especific Game
```
```

- Add a move to an existing Game
```
curl --location --request POST 'http://localhost:3001/game/61157a28ec0dbe895b93753b/move/5' \
--header 'Content-Type: application/json' \
--data-raw '{"player":1}'
```

- Delete all Games
```
curl --location --request DELETE 'http://localhost:3001/games' \
--header 'Content-Type: application/json' \
--data-raw ''
```