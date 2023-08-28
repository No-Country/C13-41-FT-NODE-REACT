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

- If the `.env` file doesn't export the variables correctly, you can manually export them by running the following commands in the terminal:

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

## API Endpoints :page_with_curl:

The API exposes the following endpoints:

- **POST /api/v1/auth/medic**: Medic autentication.
- **POST /api/v1/medic**: Medic registration.
- **POST /api/v1/auth/patient**: Patient autentication.
- **POST /api/v1/patient**: Patient registration.
- **POST /api/v1/consult**: Consult registration.

## Request Examples :notebook:

Here are some examples of how to make requests to the API endpoints:

- Register a new medic:
**POST** */api/v1/medic*

**Request Body:**
```json
{
  "fullname": "Jhon Doe",
  "password": "12345",
  "email": "jhondoe@mail.com",
  "country": "Colombia",
  "gender": "male",
  "nid": "12312",
  "profesionalid": "12334521",
  "birthdate": "2023-05-11"
}

```

**Response Body:**
```json
{
  "data": {
    "medic": {
      "id": "0343446c-7fd2-427a-a922-d0949ffc629e",
      "fullname": "Jhon Doe",
      "password": "$2b$10$v2Nu9lE7cmhExJfxHQ1uzurOKUYrdmlNls18OWYYi/4EdveKSolMa",
      "email": "jhondoe@mail.com",
      "country": "Colombia",
      "gender": "male",
      "nid": "12312",
      "profesionalid": "12334521",
      "birthdate": "2023-05-11T00:00:00.000Z",
      "updatedAt": "2023-08-28T14:27:13.509Z",
      "createdAt": "2023-08-28T14:27:13.509Z",
      "resume": null,
      "avatar": null
    }
  },
  "message": "Medic Created"
}

```

- Register a new patient:
**POST** */api/v1/patient*

**Request Body:**
```json
{
  "fullname": "Jhon Doe",
  "password": "12345",
  "email": "jhondoee@mail.com",
  "country": "Colombia",
  "gender": "male",
  "nid": "12312",
  "avatar": "unavatar.com",
  "birthdate": "2023-05-11"
  }

```

**Response Body:**
```json
{
  "message": "Patient created",
  "patient": {
    "id": "a9dc545d-78f3-42e0-893e-78d9c7e51f8b",
    "fullname": "Jhon Doe",
    "password": "$2b$10$UPBZnexaetlRISGObca8NuRKw9jp5LyhT3kQuBbr4oVDcf35A74RC",
    "email": "jhondoee@mail.com",
    "country": "Colombia",
    "nid": "12312",
    "gender": "male",
    "birthdate": "2023-05-11T00:00:00.000Z",
    "updatedAt": "2023-08-28T15:23:43.474Z",
    "createdAt": "2023-08-28T15:23:43.474Z",
    "avatar": null,
    "resume": null
  }
}

```
