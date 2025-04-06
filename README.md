# Wisdom Nugget Service API
A simple RESTful API service built using Node.js, Express.js, and MongoDB to manage a collection of inspirational "Wisdom Nuggets".



## Tech Stack
- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Environment Variables:** .env file



## Features
Retrieve all wisdom nuggets  
Get a random wisdom nugget  
Add a new nugget  
Delete a nugget by ID  
Data persistence via MongoDB



## Installation & Setup
**1. Clone the Repository**
git clone https://github.com/your-username/wisdom-nugget-api.git
cd wisdom-nugget-api

**2. Install Dependencies**
npm install

**3. Setup .env File**
MONGO_URI=mongodb://127.0.0.1:27017/wisdom_nuggets_db
PORT=5000
Replace the Mongo URI with your MongoDB Atlas URI if you’re using a cloud database.

**4. Seed Initial Data (Optional)**
npm run seed

**5. Start the Server**
npm run dev
The server will start at http://localhost:5000



## API Endpoints
All responses and requests use JSON.  
**1. GET** All Nuggets  
__Method:__ GET  
__URL:__ /nuggets  
__Response:__  
[  
  {  
    "id": "1",  
    "text": "Life is what happens when you're busy making other plans.",  
    "author": "John Lennon"  
  }  
]  

**2. GET** a Random Nugget  
__Method:__ GET  
__URL:__ /nuggets/random  
__Response:__  
{  
  "id": "2",  
  "text": "Be yourself; everyone else is already taken.",  
  "author": "Oscar Wilde"  
}  

**3. POST** a New Nugget  
__Method:__ POST  
__URL:__ /nuggets  
__Request:__  
{  
  "text": "Knowledge speaks, but wisdom listens.",  
  "author": "Jimi Hendrix"  
}  
__Response:__  
{  
  "id": "6",  
  "text": "Knowledge speaks, but wisdom listens.",  
  "author": "Jimi Hendrix"  
}  

**4. DELETE** a Nugget by ID  
__Method:__ DELETE  
__URL:__ /nuggets/{id}  
__Response:__  
{  
  "message": "Nugget deleted successfully"  
}  

## Error Handling
400 Bad Request: Invalid or missing text/author in POST  
404 Not Found: No nugget found with provided ID  



## Screenshots:
![Screenshot 2025-04-06 164652](https://github.com/user-attachments/assets/a2755d4c-a218-4ef3-a735-276181b3be96)
![Screenshot 2025-04-06 164718](https://github.com/user-attachments/assets/0378a888-0fc3-4e9f-8ff0-7cd8f8187175)
![Screenshot 2025-04-06 165013](https://github.com/user-attachments/assets/fc3ea6dd-19a1-47ca-a6ac-aba64f574991)
![Screenshot 2025-04-06 165135](https://github.com/user-attachments/assets/2b73b32a-a8b7-45f9-9dc8-f690ee0fba1f)
