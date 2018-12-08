## Angular Forms

Our web application needs to interact with the users and forms is the main instrument for users to input data in our application.
In this lesson we will learn how to build our forms and validations using angular forms.

### Lesson Plan

- Template driven forms
- ngModel
- ngModel validation
- grabbing ngModel instance
- ngForm
- ngForm Validation
- ngSubmit
- Reactive forms
- FormControl
- FormControl Validation
- AsyncValidation
- FormGroup
- FormBuilder

### EX

- We continue to work on the ex from the http client lesson
- In the TodoService add a method that will get a TodoItem model as argument in the method
- that method will send a post request with the body as that class and the method should return **Observable<TodoItem>**
- create a component in the Todo module called **TaskForm**
- That component should contain a form for creating a new todo task, the form should contain the following fields and validation:
- title - required, maxlength 100, alphanumeric pattern. This should be input of type text 
- description - required. This should be a text area.
- group - required, maxlength 20, alphanumeric
- when - input of date time calender, this field is required.
- when all the fields of the form are valid, the submit button should be enabled, otherwise it should be disabled. 
- when submitting the form we need to send the request to the server and create a new todo task and then refresh the todo list.



