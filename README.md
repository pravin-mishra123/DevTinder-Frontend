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