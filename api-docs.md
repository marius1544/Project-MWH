# API Documentation

## Base URL
```
http://localhost:8081
```

---

## Files API

All endpoints now use `:id` as a URL parameter to identify a file.  
Responses are simulated, and there are no database connected yet.

---

### POST /postFile/:id
Creates (simulates) a new file.

**Request**
- Method: `POST`
- URL: `/postFile/:id`

**Response**  
Status: `201 Created`
```json
{
  "message": "Added file 123",
  "filename": "picture1.png",
  "filestatus": "not uploaded"
}
```

**Description**  
Simulates uploading/creating a file with the given `id`.  
The response is hardcoded and not stored.

---

### GET /getFiles/:id
Retrieves (simulates) a file.

**Request**
- Method: `GET`
- URL: `/getFiles/:id`
where id can be any number

**Response**  
Status: `200 OK`
```json
{
  "id": "Retrieved file 123",
  "filename": "picture1.png",
  "filestatus": "not uploaded"
}
```

**Description**  
Simulates retrieving a file by its `id`.

---

### PUT /changeFiles/:id
Updates (simulates) a file or file status.

**Request**
- Method: `PUT`
- URL: `/changeFiles/:id`

**Response**  
Status: `200 OK`
```
Changed the file or the status on file 123
```

**Description**  
Simulates updating a file or its status.  
No validation or storage is performed.

---

### DELETE /deleteFiles/:id
Deletes (simulates) a file.

**Request**
- Method: `DELETE`
- URL: `/deleteFiles/:id`

**Response**  
Status: `200 OK`
```
Successfully deleted file 123
```

**Description**  
Simulates deleting a file with the given `id`.

---

## Settings API

The application also has a separate API for settings.

**Base path**
```
/settings
```

(This part is not critical at the initial stage.)

---

## Status Codes Used

| Status Code | Meaning |
|------------|--------|
| 200 | OK – Request successful |
| 201 | Created – Resource created |

---

## Possible Improvements

- Consolidate all file endpoints under `/files`
  - `POST /files/:id`
  - `GET /files/:id`
  - `PUT /files/:id`
  - `DELETE /files/:id`