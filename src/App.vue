<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<TodoList :todos="todos" />
				<div class="todo-create-btn-container">
					<Modal />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import playground from "./playground";
import TodoList from "@/components/TodoList.vue";
import Modal from "@/components/Modal.vue";

export default {
	name: "App",
	components: {
		TodoList,
		Modal,
	},
	data() {
		return {
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
		};
	},
	created() {
		playground();
	},
	methods: {},
};
</script>

<style lang="scss">
$color-black: black; //just for example,
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $color-black;
	margin-top: 60px;
}
.app-button {
	font-size: 20px;
	padding: 10px;
	border-radius: 10px;
	background-color: #795899;
	color: white;
	font-weight: bold;

	&:hover {
		cursor: pointer;
	}
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
		min-height: 400px;
		background-color: #ededed;
		border-radius: 10px;
	}
}
</style>
