## BackEnd Commands 
| Command  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| npm run database| Excecute all commands for deploy database |
| npm start| Run the api |

## BackEnd .Env File 

>These are the variables that backend need

| Variable Name  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| PORT | Port number which back end will be deployed
| JWT_SECRET | The salt necessary for the token|
|NODE_ENV| The currently enviroment|
|PRO_DB_USER| Production user database|
|PRO_DB_HOST| Production host database|
|PRO_DB_PASSWORD| Production password database|
|PRO_DB_PORT| Production port database|
|PRO_DB_NAME| Production name database|
|DEV_DB_USER| Development user database|
|DEV_DB_HOST| Development host database|
|DEV_DB_PASSWORD| development password database|
|DEV_DB_PORT| development port database|
|DEV_DB_NAME| development name database|

## Node Installation :space_invader:


### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation Steps

**1.** Clone the repository

**2.** Set up environment variables:

- Create a file with `.env` extension in the root directory of the project.
- Open the `.env` file and update the necessary variables:

```env
PORT=5000
NODE_ENV=development
PRO_DB_USER=postgres
PRO_DB_HOST=localhost
PRO_DB_PASSWORD=root
PRO_DB_USER=klinika
DEV_DB_USER=postgres
DEV_DB_HOST=localhost
DEV_DB_PASSWORD=root
DEV_DB_NAME=klinika
JWT_SECRET=bWVjaGFyY292ejIyLzAyLzIwMjNAw7E
```

- If the `.env` file doesn't export the variables correctly, you can manually export them by running the following commands in the terminal (replace `<value>` with the actual value for each variable):

```bash
export PORT=5000
export NODE_ENV=development
export PRO_DB_USER=postgres
export PRO_DB_HOST=localhost
export PRO_DB_PASSWORD=root
export PRO_DB_USER=klinika
export DEV_DB_USER=postgres
export DEV_DB_HOST=localhost
export DEV_DB_PASSWORD=root
export DEV_DB_NAME=klinika
export JWT_SECRET=bWVjaGFyY292ejIyLzAyLzIwMjNAw7E
```

Make sure to export the variables correctly to ensure the project works as expected.
