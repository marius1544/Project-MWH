# Project Title: Dropsafe

## Concept

Dropsafe is a platform where users can register and log in to their personal file storage system. After creating an account, users can manage their stored information and export their data in different formats.

The application is built with a layered backend architecture using Node.js, Express, and PostgreSQL.

------------------------------------------------------------------------

## Persistence and Storage (PostgreSQL)

The application now stores user information in an externally hosted
**PostgreSQL database on Render**.

When a user account is created, the following flow occurs:

Client → API → Service Layer → Database → API → Client

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

- Recieves input from the client
- Sends output back to the client
- Forwards requests to the service layers

### 2. Service Layer (Domain Logic)

Responsible for application rules: 

- Validates username 
- Requires user consent to the Terms of Service. If the user fails to disagree, it will display in the database as false.
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

Because of this separation, the storage system could later be replaced
(for example CSV storage) without changing the routes.

## 4. User Interface

The application includes a **Settings page** where the user can:

 - Export stored user data
 - Retract consent and delete account
 - Change username based on the users' id.

---
## Data Export

The platform supports exporting stored user data in multiple formats.

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

------------------------------------------------------------------------

------------------------------------------------------------------------

## API Endpoints

Base path: `/user`

  Method   Endpoint    Description
  -------- ----------- ---------------
  POST     /user       Create user
  GET      /user/:id   Retrieve user
  PUT      /user/:id   Update user
  DELETE   /user/:id   Delete user

Export endpoints:

  Method   Endpoint           Description
  -------- ------------------ --------------------------
  GET      /export/json/:id   Export user data as JSON
  GET      /export/csv/:id    Export user data as CSV


------------------------------------------------------------------------

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
- **AWS S3:** [https://aws.amazon.com/s3/](https://aws.amazon.com/s3/)  
- **Jira plan:** [https://mariuswhansenmh.atlassian.net/jira/software/projects/KAN/boards/2](https://mariuswhansenmh.atlassian.net/jira/software/projects/KAN/boards/2?atlOrigin=eyJpIjoiYzEyZTA3ZjFhZDFmNDBjNGJlYTNmMTFmNDMzZjdmZTYiLCJwIjoiaiJ9)  
- **Miro post-it board:** [https://miro.com/app/board/uXjVGO8IXGY=/?share_link_id=941630076718](https://miro.com/app/board/uXjVGO8IXGY=/?share_link_id=941630076718)
