
# Marvel-Characters-API

Consuming Marvel API with nodeJs and Angular 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MARVEL_PUBLIC_KEY`

`MARVEL_PRIVATE_KEY`


## Install & Run Locally

Install the API project with

```bash
  cd API
  npm install
```

Run  to start nodemon server
```bash
  npm install
```

Install the Angular project with

```bash
  cd FrontEnd
  npm install
```

Run to lauch application in the browser
```bash
  ng serve
```
    
    
    
    
## API Reference

#### Get all characters(limited by Marvel API itself)

```http
  GET api/characters/
```

#### Get one Character

```http
  GET /api/characters/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of character to fetch |


#### Get Comics from Character

```http
  GET /api/characters/${id}/comics
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of character to fetch |

## Tech Stack

**Client:** Angular, HTML, Scss

**Server:** Node, Express

