## HttpClient

In this lesson we will learn how to use the http client module to communicate with a server.

### EX.

- create a new feature module called Todo.
- Create a model class representing our todo item, the constructor will get a json like the one we are getting from the server and will populate the properties of the instance based on that json. place that model in **models** directory in the todo folder
- Create a service in that module called Task.
- our service has a method which sends a get request to our todo task rest server.
- the method will get a search string as argument
- the method will send request to the following url: **https://nztodo.herokuapp.com/api/task/?format=json&search=searchArgument**
- The method should return **Observable<TodoItem[]>**
- create a component in our Todo module called **TodoList**
- That component will contain a ul li list
- the component will also contain a search text input
- the component will display the full list of todo tasks, when we type a search string the list is filtered according to the filtered list the server is returning.
- Try to make the requests to be sent 1 sec after the user stopped typing text in the field.