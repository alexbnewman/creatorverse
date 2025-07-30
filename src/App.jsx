import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ShowCreator from './pages/ShowCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ShowCreators/>
    },
    {
      path: "/:id",
      element:<ShowCreator/>
    },
    {
      path:"/edit/:id",
      element: <EditCreator/>
    },
    {
      path:"/new",
      element: <AddCreator/>
    }
  ]);

  return ( 

    <div className="App max-w-5xl mx-auto p-6">
      <div className="header flex flex-col sm:flex-row items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">Creatorverse</h1>
        <div className="flex gap-4">
          <Link to="/">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
              Creator Gallery
            </button>
          </Link>
          <Link to="/new">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition">
              Make a New Creator
            </button>
          </Link>
        </div>
      </div>

      {element}
    </div>


  )
}

export default App
