# To-Do List API
A simple REST API for managing a to-do list.

- **Live Demo**: [https://todo-api-o4am.onrender.com]
- **Endpoints**:
  - `GET /`: Welcome message
  - `GET /todos`: List all todos
  - `POST /todos`: Create a todo (body: `{ "task": "string" }`)
  - `PUT /todos/:id`: Update a todo
  - `DELETE /todos/:id`: Delete a todo
- **Test with**: `curl` or Postman