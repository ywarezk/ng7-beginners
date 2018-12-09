## Angular Routing

### Lesson Plan

- Routing in SPA
- Routing as modules split
- refresh should return to the same url
- url as passing params and SEO releated stuff
- Route pass to component, Home, About Error404
- Navigating to routes
- navigating to modules and lazy loading
- nested components
- Passing route params
- Router service
- ActivatedRoute

### EX

- The app module should contain the following routes
- / => Home component
- /about => About component
- There should be a Todo module with the following routes
- /todo => will display TodoList
- /todo/:pk => will display a single todo item

- The todo list should also contain a search component that the user can enter a search string and it will append the search string to the url:
- /todo?search=what-user-typed
- the todo server can accept a search query param: https://nztodo.herokuapp.com/api/task/?format=json&search=search-string
- the /todo route contain a component to display a list which is connected to changes in the query params.
- if reloading the /todo route the search should be populated according to the url
- if reloading the /todo route the list should maintained filtered.
- the /todo route also contains a form to create a new todo task
- each item in the todo list contains a button to delete the task
- the route /todo/:pk contain form to update the todo task. 
