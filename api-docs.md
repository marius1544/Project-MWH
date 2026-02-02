# API Documentation

## Base URL
```
http://localhost:8081
```

This API is built for learning purposes.  
All data is stored in memory and is reset when the server restarts.  
No database is used.

---

## Files API

All file-related endpoints use `:id` as a URL parameter to identify a file.  
Responses are simulated and files are not persisted.

---

### POST /files/:id

Creates (simulates) a new file.

**Request**
- Method: `POST`
- URL: `/files/:id`
- Body:
```json
{
  "filename": "myPicture.png"
}
```

The filename is checked against a simple file type validation function.

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
Simulates creating a file with the given `id`.  
The file is not stored and exists only in the response.

---

### GET /files/:id

Retrieves (simulates) a file.

**Request**
- Method: `GET`
- URL: `/files/:id`

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

### PUT /files/:id

Updates (simulates) a file or file status.

**Request**
- Method: `PUT`
- URL: `/files/:id`

**Response**  
Status: `200 OK`
```
Changed the file or the status on file 123
```

**Description**  
Simulates updating a file or its status.  
No validation or storage is performed.

---

### DELETE /files/:id

Deletes (simulates) a file.

**Request**
- Method: `DELETE`
- URL: `/files/:id`

**Response**  
Status: `200 OK`
```
Successfully deleted file 123
```

**Description**  
Simulates deleting a file by its `id`.

---

## Users API

The Users API handles account creation, consent, and deletion.  
Users are identified by a generated unique ID.

**Base path**
```
/user
```

---

### POST /user

Creates a new user.

**Request**
- Method: `POST`
- URL: `/user`
- Body:
```json
{
  "id": "",
  "username": "exampleUser",
  "consent": true
}
```

**Response**  
Status: `201 Created`
```json
{
  "id": "abc123",
  "username": "exampleUser",
  "consent": true
}
```

**Description**  
Creates a user only if consent is given.  
Consent is required to use the service.

---

### DELETE /user/:id

Deletes a user and retracts consent.

**Request**
- Method: `DELETE`
- URL: `/user/id`

**Response**  
Status: `User "id" deleted`
```
User abc123 deleted.
```

**Description**  
Deletes the user account and removes personal data.  
Public contributions may remain in anonymized form.

---

### GET /user

Retrieves all users (for development/testing only).

**Request**
- Method: `GET`
- URL: `/user`

**Response**  
Status: `200 OK`
```json
{
  "abc123": {
    "id": "abc123",
    "username": "exampleUser",
    "consent": true
  }
}
```

**Description**  
Returns all users currently stored in memory.  
This endpoint would normally be protected or removed in production.

---

## Settings API

This is not currently functioning, but will be made when the application is near done.

## Status Codes Used

| Status Code | Meaning |
|------------|--------|
| 200 OK | Request successful |
| 201 Created | Resource created |
| 400 Bad Request | Invalid input or missing required fields |
| 404 Not Found | Resource not found |

---