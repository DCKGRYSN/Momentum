import { Link } from 'react-router-dom'
function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-gray-800">
        About Momentum
      </h1>

      <p className="mb-6 text-gray-500">
        Stay organized. Stay focused. Keep moving.
      </p>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <p className="mb-4 text-gray-700">
          Momentum is a simple task and productivity manager designed to help
          you organize your daily responsibilities and keep track of your
          progress.
        </p>

        <p className="mb-6 text-gray-700">
          Whether you're managing personal goals, school activities, or
          everyday tasks, Momentum helps you stay on top of what matters.
        </p>

        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Our Goal
        </h2>

        <p className="text-gray-700">
          To make task management simple, accessible, and less overwhelming,
          one task at a time.
        </p>
      </div>
      <Link
          to="/"
          className='mt-6 inline-block text-sm font-medium text-blue-600 hover:textblue-800'
        >
          Back to Dashboard
        </Link>
    </div>
  )
}

export default About




