# Project Title: Dropsafe

## Concept

Dropsafe is a platform where users can send files to store it in the database. After creating an account, users can manage their stored information and export their data in different formats.

The application is built with a layered backend architecture using Node.js, Express, and PostgreSQL.

------------------------------------------------------------------------

## Persistence and Storage (PostgreSQL)

The application stores user information in an externally hosted
**PostgreSQL database on Render**.

When a user account is created, the following flow occurs:

1.  The client sends a `POST /user` request containing:

    ``` json
    { "username": "...", "consent": true }
    ```

2.  The Express API receives the request.

3.  The request is forwarded to a **service layer** responsible for
    validation and domain rules.

4.  The service validates the user (e.g. Terms of Service must be
    accepted).

5.  The database layer performs an SQL `INSERT` query.

6.  PostgreSQL stores the user as a new row.

7.  The API returns the created user as JSON.

Because the data is stored in PostgreSQL, it persists even if the server
stops or crashes.

------------------------------------------------------------------------

## Architecture

The backend is separated into layers to make the system maintainable and
replaceable.

### 1. Routes (HTTP Layer)

Responsible only for handling HTTP requests and responses. 

- Receives  input from the client
- Sends output back to the client
- Forwards requests to the service layers

### 2. Service Layer (Domain Logic)

Responsible for application rules: 

- Validates username 
- Requires user consent to the Terms of Service. If the user does not accept the Terms of Service, the account will not be created.
- Decides whether a user operation is allowed
- Validates uploaded file types before proceding.

This allows rules to exist in one place instead of being duplicated in
multiple routes.

### 3. Database Layer (Storage)

Responsible only for communicating with PostgreSQL:

 - `INSERT` create user 
 - `SELECT` retrieve user 
 - `UPDATE` modify user 
 - `DELETE` remove user


## 4. User Interface

The application includes a **Settings page** where the user can:

 - Export stored user data
 - Retract consent and delete account
 - Change username based on the users' id.

---
## Data storage

Users get the filename of their file stored in the database with the id they use. The file is not stored anywhere, but can be retrieved by the user id.

---
## Data Export

The platform supports exporting stored user data in JSON and CSV formats.

### JSON Export

User data can be exported in **JSON format**, which is useful for APIs
and system integrations.

Endpoint:

    GET /export/json/:id

Example response:

``` json
{
  "id": 1,
  "username": "user123",
  "consent": true
}
```

### CSV Export

User data can also be exported in **CSV format**, which is useful for
spreadsheets and data analysis.

Endpoint:

    GET /export/csv/:id

Example output:

    id,username,consent
    1,user123,true

CSV export converts database rows into a comma-separated format
containing headers and values.

------------------------------------------------------------------------

## File Validation

The system includes a **validateFileType** mechanism to ensure that only
supported file types can be uploaded.

This validation helps:

-   Prevent unsupported file formats
-   Improve application security
-   Ensure predictable file handling

Before a file is accepted or processed, the system checks the file type.
If the file format is not allowed, the upload is rejected.

Storing .exe is sceptical, but I chose to do it.

------------------------------------------------------------------------

## Security

Instead of comparing passwords in plaintext, the system uses a hashing approach based on HMAC (SHA-256) together with a secret key stored in environment variables.

The secret key is stored in the PostgreSQL database.
A validation step compares this hash with a stored hash (ADMIN_PASSWORD_HASH)

This solution improves security compared to plaintext password handling, but it is still a simplified approach.
------------------------------------------------------------------------

## API Endpoints (can be found in api-docs.md)


## Info about files: 
File operations only store the name of the file.

The filename is validated using a simple file type validation function found in server -> server-routes -> middleware -> validateFiletype.

The file functionality is implemented into the user creation

## Terms of Service

Users must accept the Terms of Service before an account can be created.
The documents are accessible from the UI:

-   Terms of Service
-   Privacy Policy

The service layer enforces this rule. If consent is false, the user will
not be created.

------------------------------------------------------------------------

## Tech Stack

-   **Frontend:** HTML, CSS, JavaScript
-   **Backend:** Node.js (Express)
-   **Database:** PostgreSQL (Render hosted)

------------------------------------------------------------------------

## Render Deployment

Live URL: https://project-mwh.onrender.com/

------------------------------------------------------------------------

## Links
- **Jira plan:** [https://mariuswhansenmh.atlassian.net/jira/software/projects/KAN/boards/2] 
- **Miro post-it board:** [https://miro.com/app/board/uXjVGO8IXGY=/?share_link_id=941630076718]

Dropbox background picture is taken from: https://medium.com/dropbox-design/illustrating-a-more-human-brand-part-2-d2e9494cc8a3 by author Michael Jeter.
Logo is made with the use og Artifical intelligence programs from OpenAi.