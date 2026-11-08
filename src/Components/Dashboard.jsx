
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

async function getTasks() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch tasks')
  }

  return response.json()
}

function Dashboard() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
    staleTime: 60_000,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (data.length === 0) return <div>No tasks found</div>

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Momentum Dashboard
        </h1>
        <Link
          to="/about"
          className='mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800'
          >
            About Page
          </Link>
        <p className="mt-2 text-gray-500">
          Welcome to your Task & Productivity Manager!
        </p>
      </div>


      <ul className="mt-4 space-y-3">
        {data.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <Link
              to={`/tasks/${task.id}`}
              className="text-gray-700 hover:text-blue-600"
            >
              {task.title}
            </Link>

            <span
              className={`shrink-0 rounded-full px-3 py-1 text-sm ${
                task.completed
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
