# Todo API

A RESTful Todo API built with **Express.js** and **TypeScript** for managing your todo tasks efficiently.

## 🚀 Features

- ✅ List all todos
- ✅ Get a specific todo by ID
- ✅ Create new todos
- ✅ Update todo titles
- ✅ Mark todos as completed
- ✅ Delete todos
- ✅ TypeScript for type safety
- ✅ Clean error handling
- ✅ JSON responses

## 🛠 Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **In-memory storage** - Simple data persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/dconco/express-todo-app.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📚 API Endpoints

### Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description | Body | Query |
|--------|----------|-------------|------|-------|
| `GET` | `/` | Get all todos | - | - |
| `GET` | `/:id` | Get todo by ID | - | - |
| `POST` | `/new` | Create new todo | `{ "title": "string" }` | - |
| `PATCH` | `/update` | Update todo title | `{ "title": "string" }` | `id=123` |
| `PATCH` | `/completed` | Mark todo as completed | - | `id=123` |
| `DELETE` | `/delete` | Delete todo | - | `id=123` |

## 📝 API Examples

### Get All Todos
```bash
GET /api/
```
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Learn TypeScript",
      "completed": false
    }
  ]
}
```

### Create New Todo
```bash
POST /api/new
Content-Type: application/json

{
  "title": "Build awesome API"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 123456789,
    "title": "Build awesome API",
    "completed": false
  }
}
```

### Get Specific Todo
```bash
GET /api/1
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn TypeScript",
    "completed": false
  }
}
```

### Update Todo Title
```bash
PATCH /api/update?id=1
Content-Type: application/json

{
  "title": "Master TypeScript"
}
```
**Response:**
```json
{
  "success": true,
  "data": "Title Updated"
}
```

### Mark Todo as Completed
```bash
PATCH /api/completed?id=1
```
**Response:**
```json
{
  "success": true,
  "data": "TODO Completed"
}
```

### Delete Todo
```bash
DELETE /api/delete?id=1
```
**Response:**
```json
{
  "success": true,
  "data": "Deleted Successfully."
}
```

## 🚨 Error Responses

All error responses follow this format:
```json
{
  "message": "Error description"
}
```

### Common Error Codes:
- `400 Bad Request` - Missing required fields (title, id)
- `404 Not Found` - Todo with specified ID doesn't exist

## 🔧 Development

### Available Scripts
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Start production server
```

### Type Definitions
```typescript
type Todo = {
  id: number
  title: string
  completed: boolean
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

Built with ❤️ by a senior developer 🔥

---

**Happy coding!** 🚀