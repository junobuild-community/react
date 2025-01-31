import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import router from "./router"

function App() {
  return (
    <Router>
      {router}
    </Router>
  )
}

export default App


// App.tsx
// import { initSatellite } from '@junobuild/core'
// import { useEffect, useState } from 'react'
// import { TodoList } from './components/TodoList/TodoList'

// function App() {
//   const [initialized, setInitialized] = useState(false)

//   useEffect(() => {
//     const init = async () => {
//       try {
//         // Replace with your satellite ID
//         await initSatellite({
//           satelliteId: 'your-satellite-id-here'
//         })
//         setInitialized(true)
//       } catch (error) {
//         console.error('Failed to initialize Juno:', error)
//       }
//     }

//     init()
//   }, [])

//   if (!initialized) {
//     return <div>Initializing Juno...</div>
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <TodoList />
//     </div>
//   )
// }

// export default App