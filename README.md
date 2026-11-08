# Momentum - Task & Productivity Manager

## About the Project

Momentum is a simple task and productivity manager designed to help users organize their daily tasks.

## Features 
- View all tasks on the dashboard with a simple pending/completed badge.
-Click task to view individual details per task.
- Leave a note per task to show the final action taken per task.
-Navigate between dashboard, task details, and about page.


## Application Routes

| Page | Route | Description |
|---|---|---|
| Dashboard | `/` | Displays the list of tasks and their current status. |
| Task Details | `/tasks/:id` | Displays an individual task based on its ID. |
| About | `/about` | Provides information about the Momentum application. |


## API

Momentum uses the JSONPlaceholder public API to retrieve task data.

**API Source:** https://jsonplaceholder.typicode.com/

**Endpoints used:**

- `GET /todos` - Retrieves the list of tasks displayed on the Dashboard.
- `GET /todos/:id` - Retrieves an individual task based on its ID.

The application uses the Fetch API to request data and TanStack Query to manage the retrieved data.



## Data Fetching and Caching

Momentum uses TanStack Query to manage API requests and retrieved task data.

The `useQuery` hook is used to fetch tasks from the JSONPlaceholder API.

The application uses query keys to identify and cache data:

- `['tasks']` - Stores the list of tasks retrieved for the Dashboard.
- `['tasks', id]` - Stores individual task details based on their ID.

A `staleTime` of 5 minutes is configured to keep fetched data fresh during that period and reduce unnecessary API requests when navigating between pages.


## UI State Handling

Momentum handles different UI states to provide feedback while retrieving task data.

- **Loading State:** Displays a loading message while waiting for the API response.
- **Error State:** Displays an error message if the API request fails.
- **Empty State:** Displays a message when no tasks are available.

These states help users understand what is happening when the application retrieves task data.


## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/DCKGRYSN/Momentum.git
   ```

2. Navigate to the project folder:

   ```bash
   cd momentum
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal to view the application.



## Technology Stack

- **React** - Used to build the user interface.
- **Vite** - Used as the development server and build tool.
- **Tailwind CSS** - Used for styling and responsive layouts.
- **React Router** - Used for navigation between application pages.
- **TanStack Query** - Used for API data fetching and caching.
- **JSONPlaceholder** - Used as the public API for task data.




## Screenshots

### Dashboard
![Momentum Dashboard](screenshots/dashboard.png)

### Task Details
![Momentum Task Details](screenshots/task-details.png)

### About
![About Momentum](screenshots/about.png)
