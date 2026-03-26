# API Documentation

## Base URL

https://project-mwh.onrender.com/

All data is stored in a postgreSQL database into a table called projectmwhtest 

------------------------------------------------------------------------

# Language API

The application supports multiple languages.
The server detects the browser language using the `Accept-Language`
header.

If the browser language is Norwegian (`no`), Norwegian translations are
returned.
Otherwise English is used. English is also the only language used if the app goes offline.

## GET /lang

Returns the translation object used by the frontend.

**Request** - Method: `GET` - URL: `/lang`

The language returned is based on the browser's `Accept-Language`
header.

**Example response (English)**

``` json
{
    "frontend": {
        "title": "Secure your files here",
        "submitButton": "Submit",
        "privacypolicy": "Read our privacy policy",
        "privacylink": "here",
        "droptext": "Or drag and drop a PNG here:",
    }
}

Here we are getting the whole translation in English as standard.

If we want it in Norwegian we use the Accept-Language header and specify "no"
```

**Description**
This endpoint is used by the frontend to dynamically load translations.

------------------------------------------------------------------------

# Users API

The Users API handles account creation, consent, updating usernames and
deletion.

Users are identified by a generated **unique ID**.

Base path: `/user`

All users exist in a postgreSQL database.

## POST /user

Creates a new user.

**Request** - Method: `POST` - URL: `/user`

**Body**

``` json raw body
{
  "username": "exampleUser",
  "filename": "filename.png",
  "consent": true
}

User must type filename and consent, but does not have to type in username. The identification is made on the unique id.

If the file is not allowed, you get a 500 internal
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

The user you want is put after user
meaning if their id is abc123 then it is /user/abc123

**Response**
Status: `200 OK`

``` json
{
    "id": "abc123",
    "username": "exampleUser",
    "consent": true,
    "filename": "filename.png"
  }
```

**Description**
Returns users currently stored in database.

------------------------------------------------------------------------

## PUT /user

Updates a user's username.

**Request** - Method: `PUT` - URL: `/user`

where the id comes after /user and the new username gpes in body.
If the id is abc123 -> /user/abc123
**Body**

``` json
{
  "username": "newName" (where the username here is their new username)
}
```

Consent is always true since the user had created its username before. 

**Response**\
Status: `200 OK`

``` json
{
  "message": "User updated successfully",
  "user": {
    "id": "abc123",
    "username": "newName",
    "consent": true,
    "filename": "img.png"
  }
}
```

**Description**
Updates the username of an existing user.

------------------------------------------------------------------------

## DELETE /user/:id

Deletes a user and retracts consent.

**Request** - Method: `DELETE` - URL: `/user/:id`

Where the users id comes after /user -> /user/abc123
**Response**\
Status: `200 OK`

User abc123 deleted.

**Description**\
Deletes the user account and removes stored personal data.

------------------------------------------------------------------------

# Settings API

The Settings API is for exporting user data

Exporting JSON data: 
https://project-mwh.onrender.com/export/json/id

where id here is the user id.

Exporting CSV data:

export/csv/id

where id here is the user id.

# Admin API

Method: `POST` URL: `/admin/login`

**Body**

``` json
{
  "password": "password"
}
```
If the password is correct you get a success message.
If the password is wrong: 

**Response**\
Status: `401 Unautorized`

{
    "error": "Wrong password"
}


**Admin can get all registered users:**

Method: `GET` URL: `/admin`

**Response**

 {
        "id": "your id",
        "username": "your username",
        "consent": true,
        "filename": "yourfile.jpeg"
    }



------------------------------------------------------------------------

# Status Codes Used

  Status Code       Meaning
  ----------------- ------------------------------------------
  200 OK            Request successful
  201 Created       Resource created
  400 Bad Request   Invalid input or missing required fields
  404 Not Found     Resource not found
