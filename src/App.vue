<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<TodoList :todos="todos" />
				<div class="todo-create-btn-container">
					<div class="app-button">Create</div>
				</div>
			</div>
		</div>
		<div class="modal">
			<div class="modal-content">Modal window</div>
		</div>
	</div>
</template>

<script>
import playground from "./playground";
import TodoList from "@/components/TodoList.vue";

export default {
	name: "App",
	components: {
		TodoList,
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
.modal {
	display: none;
	position: fixed;
	z-index: 9999;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
	background-color: #fefefe;
	margin: 15% auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
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
