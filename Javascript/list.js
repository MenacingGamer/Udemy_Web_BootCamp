var todos = ["Buy cat food"];

var input = prompt("What would you like to do?");




	while(input !== "quit"){

		if(input === "list")	{
			ListTodos();
				}else if (input === "new"){
			/*ask for new todo*/
				addTodo();
		console.log("Added Todo")
		}else if (input === "delete"){
			deleteTodo();
		}
		 input = prompt("What would you like to do?");
		}
	
		console.log("Ok, You Quit The App");

	 function ListTodos(){
	 			console.log("*************")
			todos.forEach(function(todo, i){
				console.log(i + ": " + todo);
			});
			console.log("*************")
	 }
	 function addTodo(){
	 	var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
	 }
	 function deleteTodo(){
	 	var index = prompt("Enter index of todo to delete");
			todos.splice(index,1);
			console.log("todo deleted");
	 }