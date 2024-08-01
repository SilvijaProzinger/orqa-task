# Employee table and chart

This is a web app that displays a table list of employees with infinite scroll, fetched from a locally served API. It allows the user to search for employees by name and displays a graph which shows the hierarchy of employees based on position. It was made in React (Vite), styled with Material-UI and uses react-orgchart to display the chart. The data is served on a local API run by Docker Desktop, that can be found at `http://localhost:8000/api/employees`, which my app connects to with api url saved in `.env` file.

## Features

- Home component where the user can select the route to `Zaposlenici` or `Dijagram` page
- List of employees in a table with infinite scroll and lazy loading
- Search employees by name
- Organizational chart made with [react-orgchart](https://github.com/nater1067/react-orgchart/tree/master)

## How to run frontend

- Clone the repository or download the ZIP file.
- Inside the downloaded folder open a Node.js command prompt.
- Run `npm install` to install all the dependencies required for running this project.
- Run `npm run dev` to launch the web app locally in your browser at [http://localhost:5173](http://localhost:5173).
- The API is provided in the task and once the provided api is run as container in Docker Desktop, my React app connects to `http://localhost:8000/api/employees`
- The API url is saved in my `.env` file

## Potential improvements:

These are some things I'd implement if I wanted to make this app more production ready:
- Use of libraries such as react-query and its caching option, which would especially be useful for caching chart data
- Editing the logic behind generating the chart so that there is a common line for all third level employees which have the same superior (or using a different library)

## Dependencies

- `vite`
- `material-ui`
- `react-orgchart`
- `provided api`
