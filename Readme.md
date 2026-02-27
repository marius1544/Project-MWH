# Project Title: Dropsafe

## Concept

I am building a platform where users can log into their personal file storage system. To access uploaded data, users must **register an account**. Once registered, they can log in to view and manage their files.

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

Responsible only for handling HTTP requests and responses. - Receives
input from the client - Sends output back to the client - Contains **no
domain logic**

### 2. Service Layer (Domain Logic)

Responsible for application rules: - Validates username - Requires user
consent to Terms of Service - Decides whether a user operation is
allowed

This allows rules to exist in one place instead of being duplicated in
multiple routes.

### 3. Database Layer (Storage)

Responsible only for communicating with PostgreSQL: - `INSERT` create
user - `SELECT` retrieve user - `UPDATE` modify user - `DELETE` remove
user

Because of this separation, the storage system could later be replaced
(for example CSV storage) without changing the routes.

## 4. User Interface
- **Settings page** where the user can:  
  - Switch between light mode and dark mode  
  - Change language from English to Norwegian (and vice versa)  
  - Preferences are saved to local storage  

---

------------------------------------------------------------------------

## API Endpoints

Base path: `/user`

  Method   Endpoint    Description
  -------- ----------- ---------------
  POST     /user       Create user
  GET      /user/:id   Retrieve user
  PUT      /user/:id   Update user
  DELETE   /user/:id   Delete user

------------------------------------------------------------------------

## Terms of Service

Users must accept the Terms of Service before an account can be
created.\
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

The application is deployed as a Render Web Service using the free tier.

Environment variable required:

    DATABASE_URL=<Render PostgreSQL External URL>

Live URL:

    <<INSERT RENDER URL HERE>>

------------------------------------------------------------------------

## Links
- **AWS S3:** [https://aws.amazon.com/s3/](https://aws.amazon.com/s3/)  
- **Jira plan:** [https://mariuswhansenmh.atlassian.net/jira/software/projects/KAN/boards/2](https://mariuswhansenmh.atlassian.net/jira/software/projects/KAN/boards/2?atlOrigin=eyJpIjoiYzEyZTA3ZjFhZDFmNDBjNGJlYTNmMTFmNDMzZjdmZTYiLCJwIjoiaiJ9)  
- **Miro post-it board:** [https://miro.com/app/board/uXjVGO8IXGY=/?share_link_id=941630076718](https://miro.com/app/board/uXjVGO8IXGY=/?share_link_id=941630076718)
