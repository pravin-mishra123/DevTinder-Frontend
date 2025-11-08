### Git configuration

##### …or create a new repository on the command line

- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/pravin-mishra123/DevTinder-Frontend.git
- git push -u origin main

##### …or push an existing repository from the command line

- git remote add origin https://github.com/pravin-mishra123/DevTinder-Frontend.git
- git branch -M main
- git push -u origin main

### Episode - 15 || DevTinder UI - part1

- Create a Vite + React Application
- Remove unecessory code and create a Hello World App
- install tailwind css => npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p
- install daisyUI and do all the configuration properly
- Add Navbar component to the App.jsx
- Create NavBar.jsx seprate file and import into App.jsx
- install react router dom package to use it for routing
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your body component
- Create a footer component

### Episode - 16 || DevTinder UI - part2

- Create a login page
- install axios
- CORS - install cors in backend => add middleware to with configuration: origin, credentials:true
- When making api call in the frontend axios => {withCredentials:true} => that will allow to set the cooking in the browser
- Redux Tool Kit (documentation) => https://redux-toolkit.js.org/tutorials/quick-start
- install redux tool kit using this command => npm install @reduxjs/toolkit react-redux
- configureStore => Provider => createSlice => add reducer to slice
- Add redux dev tool as chrome extesnsion
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder + pages folderd

### Episode - 17 || DevTinder UI - part2

- You should not be access other routes without login
- If token is not present, redirect user to login page
- Created logout feature
- Created UserCard component to show Card in the feed page
- imported UserCard in feed page
- Get the feed and add the feed in the store
- build the user card in the feed
- Create EditProfile component
- Build EditProfile feature and code formatting.
- Show toast message on saving profile
- Create connections page
- New page - See all connections
- New page - See all my connection Requests
- Feature - Accept / Reject Connection Request
- send / ignore the user card from feed

Remaining :


- SignUp new User
- E2E Testing
