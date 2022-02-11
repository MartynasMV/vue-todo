import Vue from "vue";
const store = {
	state: {
		todos: [
			{
				_id: "1",
				title: "Walk the dog",
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
	},
	actions: {
		createTodo(state, todo) {
			todo._id = Math.random().toString(36).substr(2, 7);
			state.todos.push(todo);
		},
		updateTodo(state, todoToUpdate) {
			const currentIndex = state.todos.findIndex((todo) => {
				return todo._id === todoToUpdate._id;
			});
			//  this does not work: state.todos[currentIndex] = todoToUpdate; need to use the line below
			Vue.set(state.todos, currentIndex, todoToUpdate);
			//above  (data I want to access| index on which i want to update| the value I want to insert)
		},
		deleteTodo(state, todoId) {
			const currentIndex = state.todos.findIndex((todo) => {
				return todo._id === todoId;
			});
			state.todos.splice(currentIndex, 1);
		},
	},
};
store.dispatch = function (action, payload) {
	if (!this.actions[action])
		throw new Error(`Action ${action} is not defined in the store`);
	return this.actions[action](this.state, payload);
};

export default store;
