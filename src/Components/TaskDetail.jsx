import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useState} from 'react'
// API_URL is the URL of the API that will be used to fetch the task
// getTask is a function that will be used to fetch the task
// id is the id of the task that will be fetched
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

// getTask is a function that will be used to fetch the task
// id is the id of the task that will be fetched
async function getTask(id) {
  const response = await fetch(`${API_URL}/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch task')
  }

  return response.json()
}

function TaskDetail() {
    const { id } = useParams()
    const[note,setNote] = useState('')
  
    const { data: task, isLoading, error } = useQuery({
      queryKey: ['tasks', id],
      queryFn: () => getTask(id),
      staleTime: 60_000
    })
  
    if (isLoading) return <p>Loading task...</p>
    if (error) return <p>Error: {error.message}</p>
    if (!task || !task.id) return <p>Task not found.</p>
  
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className='mb-6'>
          <h1 className='text-3xl font-bold text-gray-800'>
             Task Details 
            </h1>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <p className='mb-2 text-sm font-medium text-gray-500'>
                Task Name
              </p>
              <p className='text-lg font-semibold text-gray-800'>
                {task.title}
              </p>
                                  
              <span
                  className={`inline-block rounded-full px-3 py-1 text-sm ${
                    task.completed
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
               >
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>

            <div className='mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
              <h2 className='mb-3 text-lg font-semibold text-gray-800'>
                Task Notes
              </h2>
              <textarea
              value={note}
              onChange={(e)=>setNote(e.target.value)}
              placeholder="Write your notes here.."
              className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none"
              rows="4"
              />
              <button
                onClick={()=>alert("Note saved!")}
                className='mt-3 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'
                >
                  Save Note
                </button>
            </div>
                       <Link
                            to="/"
                           className='mt-6 inline-block text-sm font-medium text-blue-600 hover:textblue-800'
                        >
                         Back to Dashboard
                        </Link>
         </div> 
      </div>
    )
  }
  
  export default TaskDetail