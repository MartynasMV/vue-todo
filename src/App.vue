<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<TodoList :todos="todos" />
				<div class="todo-create-btn-container">
					<TodoCreate @formSubmitted="createTodo" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoCreate from "@/components/TodoCreate.vue";
import store from "@/store/index.js";
export default {
	name: "App",
	components: {
		TodoList,
		TodoCreate,
	},
	data() {
		return {
			todos: store.state.todos,
		};
	},
	created() {
		this.todos = store.dispatch("initStore");
	},
	methods: {
		createTodo(todo) {
			store.dispatch("createTodo", todo);
		},
	},
};
</script>

<style lang="scss">
$color-black: black; //just for example,
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: $color-black;
	margin-top: 60px;
}
.app-error {
	color: red;
}
.app-form {
	.label {
		display: block;
		font-size: 18px;
		font-weight: bold;
	}
	.form-input {
		padding: 10px;
		font-size: 17px;
	}
	.form-control {
		margin-bottom: 10px;
		&-last {
			margin-bottom: 0px;
		}
	}
}

.app-button {
	font-size: 20px;
	padding: 10px;
	border-radius: 10px;
	background-color: #795899;
	color: white;
	font-weight: bold;
	border: none;
	&.is-primary {
		background-color: #47ca47;
	}
	&:hover {
		cursor: pointer;
	}
}
.is-warning {
	background-color: #ffa753;
}
.is-danger {
	background-color: #ff5a5a;
}
.todo {
	&-wrapper {
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		width: 100%;
	}
	&-create-btn-container {
		margin: 10px;
	}
	&-container {
		display: flex;
		flex-direction: column;
		width: 400px;
		min-height: 200px;
		background-color: #ededed;
		border-radius: 10px;
	}
}
</style>
