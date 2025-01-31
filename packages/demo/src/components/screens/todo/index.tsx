import { Layout } from "../../layouts"

export const Todo = () => {
  return (
    <Layout>
      <div>Todo</div>
    </Layout>
  )
}

// // components/TodoList/TodoList.tsx
// import React, { useEffect, useState } from 'react'
// import { Todo } from '@juno-react/service/datastore/types'
// import { TodoService } from '@juno-react/service/datastore/todo'

// export const TodoList = () => {
//   const [todos, setTodos] = useState<Todo[]>([])
//   const [newTodoTitle, setNewTodoTitle] = useState('')
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   const todoService = new TodoService()

//   // Load initial todos
//   useEffect(() => {
//     loadTodos()
//   }, [])

//   const loadTodos = async () => {
//     try {
//       setLoading(true)
//       const result = await todoService.listTodos()
//       setTodos(result)
//       setError(null)
//     } catch (err) {
//       setError('Failed to load todos')
//       console.error('Error loading todos:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!newTodoTitle.trim()) return

//     try {
//       const newTodo = await todoService.createTodo(newTodoTitle.trim())
//       setTodos(prev => [newTodo, ...prev])
//       setNewTodoTitle('')
//       setError(null)
//     } catch (err) {
//       setError('Failed to create todo')
//       console.error('Error creating todo:', err)
//     }
//   }

//   const handleToggle = async (todo: Todo) => {
//     try {
//       const updatedTodo = await todoService.toggleTodoComplete(todo)
//       setTodos(prev => prev.map(t => t.key === todo.key ? updatedTodo : t))
//       setError(null)
//     } catch (err) {
//       setError('Failed to update todo')
//       console.error('Error updating todo:', err)
//     }
//   }

//   const handleDelete = async (todo: Todo) => {
//     try {
//       await todoService.deleteTodo(todo)
//       setTodos(prev => prev.filter(t => t.key !== todo.key))
//       setError(null)
//     } catch (err) {
//       setError('Failed to delete todo')
//       console.error('Error deleting todo:', err)
//     }
//   }

//   if (loading) {
//     return <div className="text-center p-4">Loading todos...</div>
//   }

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Todo List</h1>

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="mb-6">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={newTodoTitle}
//             onChange={(e) => { setNewTodoTitle(e.target.value) }}
//             placeholder="What needs to be done?"
//             className="flex-1 px-4 py-2 border rounded"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Add
//           </button>
//         </div>
//       </form>

//       <ul className="space-y-2">
//         {todos.map(todo => (
//           <li
//             key={todo.key}
//             className="flex items-center gap-2 p-4 border rounded"
//           >
//             <input
//               type="checkbox"
//               checked={todo.data.completed}
//               onChange={() => handleToggle(todo)}
//               className="h-5 w-5"
//             />
//             <span className={`flex-1 ${todo.data.completed ? 'line-through text-gray-500' : ''}`}>
//               {todo.data.title}
//             </span>
//             <button
//               onClick={() => handleDelete(todo)}
//               className="text-red-500 hover:text-red-700"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       {todos.length === 0 && !loading && (
//         <p className="text-center text-gray-500 mt-4">
//           No todos yet. Add one above!
//         </p>
//       )}
//     </div>
//   )
// }
