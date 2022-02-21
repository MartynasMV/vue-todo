import Vue from "vue";
const INITIAL_DATA = {
	todos: [
		{
			_id: "1",
			title: "Take a dog for a walk",
			description: "Go to the park",
		},
		{
			_id: "2",
			title: "Go shopping",
			description: "Go to the shop",
		},
		{
			_id: "3",
			title: "Learn",
			description: "Learn coding",
		},
	],
};
const store = {
	state: {
		todos: [],
	},
	actions: {
		initStore(state) {
			const todos = localStorage.getItem("my_todos");
			if (!todos) {
				Vue.set(state, "todos", INITIAL_DATA.todos);
			} else {
				Vue.set(state, "todos", JSON.parse(todos));
			}
			return state.todos;
		},
		createTodo(state, todo) {
			todo._id = Math.random().toString(36).substing(2, 7);
			state.todos.push(todo);
			return state.todos;
		},
		updateTodo(state, todoToUpdate) {
			const currentIndex = state.todos.findIndex((todo) => {
				return todo._id === todoToUpdate._id;
			});
			//  this does not work: state.todos[currentIndex] = todoToUpdate; need to use the line below
			Vue.set(state.todos, currentIndex, todoToUpdate);
			//above  (data I want to access| index or in other cases objects on which i want to update| the value I want to insert)
			return state.todos;
		},
		deleteTodo(state, todoId) {
			const currentIndex = state.todos.findIndex((todo) => {
				return todo._id === todoId;
			});
			state.todos.splice(currentIndex, 1);
			return state.todos;
		},
	},
};
function persistData(value) {
	const stringifiedValue = JSON.stringify(value);
	localStorage.setItem("my_todos", stringifiedValue);
}
store.dispatch = function (action, payload) {
	if (!this.actions[action]) {
		throw new Error(`Action ${action} is not defined in the store`);
	}
	const result = this.actions[action](this.state, payload);
	if (!result) return;
	persistData(result);
	return result;
};

export default store;

/* editTodo() {
	store.dispatch("updateTodo", { ...this.todo });
	this.editMode = false; */
