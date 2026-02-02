# Project Title: Dropsafe

## Concept
I am building a platform where users can log into their personal file storage system. To access uploaded data, users must **register an account**. Once registered, they can log in to view and manage their files.

Key features include:

- A **drop area** for files
- A **submit button**
- A **success/failure message area**
- An **admin login** to delete users and remove all files associated with them
- A **settings page** where users can customize their experience, for example:
  - Switch between **light mode** and **dark mode**
  - Change language between **English** and **Norwegian**

---

## 1. Authentication Logic
The foundation is a custom authentication system built on **PostgreSQL**, handling the complete user lifecycle:

- **Storage:** User credentials (username, email, and hashed passwords) are stored persistently in a PostgreSQL database.
- **Reset Flow:** If a user forgets their password, they enter their email. The system validates the user against the database and generates a unique restoration token.
- **Update:** The token allows the user to access a restricted "Reset Page." When they submit a new password, the server executes a SQL UPDATE query, replacing the old hash with the new one directly in the database. This ensures users can always recover access to their accounts.

---

## 2. Feature Expansion (AWS S3)
To make the application useful beyond just logging in, it integrates **AWS S3 (Simple Storage Service)**:

- After logging in, users unlock a private dashboard
- Users can **Upload, Download, and Delete** personal files
- **Architecture:** PostgreSQL stores the file metadata (filenames, owner ID, upload date), while the actual files are stored in the AWS cloud. This mimics a professional, scalable production environment.

---

## 3. Tech Stack
- **Frontend:** HTML5, Vanilla CSS, JavaScript  
- **Backend:** Node.js  
- **Database:** PostgreSQL (User data & Tokens)  
- **Storage:** AWS S3 (or a server if needed)  

---

## 4. Admin Login
- Login page for administrators  
- Allows deletion of users and all associated files  

---

## 5. User Interface
- **Settings page** where the user can:  
  - Switch between light mode and dark mode  
  - Change language from English to Norwegian (and vice versa)  
  - Preferences are saved to local storage  

---

## 6. PWA (Progressive Web App)
- **Backend:** Node.js  
- **Database:** PostgreSQL (User data & Tokens)  
- **API:** All APIs are defined in the API file  

---

## 7. Offline Functionality
- Users can still drop files into the dropbox while offline  
- A **queue system** will remember the files and upload them when internet access is restored  

---

## Links
- **AWS S3:** [https://aws.amazon.com/s3/](https://aws.amazon.com/s3/)  
- **Jira plan:** [https://mariuswhansenmh.atlassian.net/jira/software/projects/KAN/boards/2](https://mariuswhansenmh.atlassian.net/jira/software/projects/KAN/boards/2?atlOrigin=eyJpIjoiYzEyZTA3ZjFhZDFmNDBjNGJlYTNmMTFmNDMzZjdmZTYiLCJwIjoiaiJ9)  
- **Miro post-it board:** [https://miro.com/app/board/uXjVGO8IXGY=/?share_link_id=941630076718](https://miro.com/app/board/uXjVGO8IXGY=/?share_link_id=941630076718)
