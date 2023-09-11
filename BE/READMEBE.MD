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
|EMAIL_USER| Necessary to send emails notifications|
|EMAIL_PASSWORD| Necessary to send emails notifications|
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
PRO_DB_USER=
PRO_DB_HOST=
PRO_DB_PASSWORD=
PRO_DB_NAME=
DEV_DB_USER=
DEV_DB_HOST=
DEV_DB_PASSWORD=
DEV_DB_NAME=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASSWORD=
```

- If the `.env` file doesn't export the variables correctly, you can manually export them by running the following commands in the terminal:

```bash
export PORT=5000
export NODE_ENV=development
export PRO_DB_USER=
export PRO_DB_HOST=
export PRO_DB_PASSWORD=
export PRO_DB_USER=
export DEV_DB_USER=
export DEV_DB_HOST=
export DEV_DB_PASSWORD=
export DEV_DB_NAME=
export JWT_SECRET=
export EMAIL_USER=
export EMAIL_PASSWORD=
```

Make sure to export the variables correctly to ensure the project works as expected.

## API Endpoints :page_with_curl:

The API exposes the following endpoints:

- **POST /api/v1/auth/medic**: Medic autentication.
- **POST /api/v1/auth/patient**: Patient autentication.
---
- **POST /api/v1/medic**: Medic registration.
- **GET /api/v1/medic**: Get all or one Medic .
- **PUT /api/v1/medic**: Edit Medic.
- **DELETE /api/v1/medic**: Delete an Medic .
---
- **POST /api/v1/patient**: Patient registration.
- **GET /api/v1/patient**: Get all or one Patient.
- **PUT /api/v1/patient**: Edit Patient.
- **DELETE /api/v1/patient**: Delete an Patient.
---
- `POST /api/v1/consult`: Create Consult.
- `GET /api/v1/consult`: Get Consult by id or consults for medic.
- `PUT /api/v1/consult`: Edit Consult.
- `DELETE /api/v1/consult`: Delete Consult.
---
- **POST /api/v1/specialty**: Create Specialty.
- **GET /api/v1/specialty**: Get All Specialties.
- **PUT /api/v1/specialty**: Edit Specialty.
- **DELETE /api/v1/specialty**: Delete Specialty.
---
- **POST /api/v1/schedule**: Create Schedule.
- **GET /api/v1/schedule**: Get all schedules by medic.
- `PUT /api/v1/schedule`: Edit schedule.
- **DELETE /api/v1/schedule**: Delete Schedule.
---
- **POST /api/v1/socialnetwork**: Create social network for a  medic  .
- **GET /api/v1/socialnetwork**: Get all social network for a medic  .
- **PUT /api/v1/socialnetwork**: Edit social network.
- **DELETE /api/v1/socialnetwork**: Delete social network.
---
- **POST /api/v1/vacationdate**: Create vacation Date for a  medic.
- **GET /api/v1/vacationdate**: Get all vacation Date for a medic  .
- **PUT /api/v1/vacationdate**: Edit vacation Date.
- **DELETE /api/v1/vacationdate**: Delete vacation Date.
---
- **POST /api/v1/files**: update files on backend



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
