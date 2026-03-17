# API Documentation

## Base URL

https://project-mwh.onrender.com/

This API is built for learning purposes.\
All data is stored **in memory** and will reset when the server
restarts.\
No database is used.

The application also includes **internationalization (i18n)** and **PWA
support**, meaning the application can cache resources and partially
function offline.

------------------------------------------------------------------------

# Language API

The application supports multiple languages.\
The server detects the browser language using the `Accept-Language`
header.

If the browser language is Norwegian (`no`), Norwegian translations are
returned.\
Otherwise English is used.

## GET /lang

Returns the translation object used by the frontend.

**Request** - Method: `GET` - URL: `/lang`

The language returned is based on the browser's `Accept-Language`
header.

**Example response (English)**

``` json
{
  "submitButton": "Submit",
  "privacypolicy": "Privacy Policy",
  "privacylink": "Read privacy policy",
  "droptext": "Drop file here"
}
```

**Example response (Norwegian)**

``` json
{
  "submitButton": "Send inn",
  "privacypolicy": "Personvernerklæring",
  "privacylink": "Les personvernerklæringen",
  "droptext": "Slipp fil her"
}
```

**Description**\
This endpoint is used by the frontend to dynamically load translations.\
If the application is offline, previously cached responses may be used.

------------------------------------------------------------------------

# Files API

All file-related endpoints use `:id` as a URL parameter to identify a
file.\
File operations are **simulated only** and files are not stored
permanently.

## POST /files/:id

Creates (simulates) a new file.

**Request** - Method: `POST` - URL: `/files/:id`

**Body**

``` json
{
  "filename": "myPicture.png"
}
```

The filename is validated using a simple file type validation function.

**Response**\
Status: `201 Created`

``` json
{
  "message": "Added file 123",
  "filename": "picture1.png",
  "filestatus": "not uploaded"
}
```

**Description**\
Simulates creating a file with the given `id`.\
The file is not stored and only exists in the response.

------------------------------------------------------------------------

## GET /files/:id

Retrieves (simulates) a file.

**Request** - Method: `GET` - URL: `/files/:id`

**Response**\
Status: `200 OK`

``` json
{
  "id": "Retrieved file 123",
  "filename": "picture1.png",
  "filestatus": "not uploaded"
}
```

**Description**\
Simulates retrieving a file using its `id`.

------------------------------------------------------------------------

## PUT /files/:id

Updates (simulates) a file or file status.

**Request** - Method: `PUT` - URL: `/files/:id`

**Response**\
Status: `200 OK`

Changed the file or the status on file 123

**Description**\
Simulates updating file information or its upload status.\
No validation or persistence is performed.

------------------------------------------------------------------------

## DELETE /files/:id

Deletes (simulates) a file.

**Request** - Method: `DELETE` - URL: `/files/:id`

**Response**\
Status: `200 OK`

Successfully deleted file 123

**Description**\
Simulates deleting a file by its ID.

------------------------------------------------------------------------

# Users API

The Users API handles account creation, consent, updating usernames and
deletion.

Users are identified by a generated **unique ID**.

Base path: `/user`

All users exist only in memory and are deleted when the server restarts.

## POST /user

Creates a new user.

**Request** - Method: `POST` - URL: `/user`

**Body**

``` json
{
  "username": "exampleUser",
  "filename": "filename.png",
  "consent": true
}

User must type filename and consent, but does not have to type in username. The identification is made on the unique id.
```

**Response**\
Status: `201 Created`

``` json
{
  "id": "abc123",
  "username": "exampleUser",
  "consent": true,
  "filename": "filename.png"
}
```

**Description**\
Creates a new user account.\
User creation is only allowed if consent is provided.

------------------------------------------------------------------------

## GET /user

Retrieves stored users.

**Request** - Method: `GET` - URL: `/user`

**Response**\
Status: `200 OK`

``` json
{
  "abc123": {
    "id": "abc123",
    "username": "exampleUser"
  }
}
```

**Description**\
Returns users currently stored in memory.

------------------------------------------------------------------------

## PUT /user

Updates a user's username.

**Request** - Method: `PUT` - URL: `/user`

**Body**

``` json
{
  "id": "abc123",
  "username": "newName"
}
```

**Response**\
Status: `200 OK`

``` json
{
  "message": "User updated successfully",
  "user": {
    "id": "abc123",
    "username": "newName",
    "consent": true
  }
}
```

**Description**\
Updates the username of an existing user.

------------------------------------------------------------------------

## DELETE /user/:id

Deletes a user and retracts consent.

**Request** - Method: `DELETE` - URL: `/user/:id`

**Response**\
Status: `200 OK`

User abc123 deleted.

**Description**\
Deletes the user account and removes stored personal data.

------------------------------------------------------------------------

# Settings API

The Settings API is planned but not currently implemented.

------------------------------------------------------------------------

# Status Codes Used

  Status Code       Meaning
  ----------------- ------------------------------------------
  200 OK            Request successful
  201 Created       Resource created
  400 Bad Request   Invalid input or missing required fields
  404 Not Found     Resource not found
