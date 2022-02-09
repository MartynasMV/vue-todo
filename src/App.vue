<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<TodoList />
			</div>
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
	created() {
		playground();
	},
};
</script>

<style lang="scss">
$color-gray: #ededed; //just for example,
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $color-gray;
	margin-top: 60px;
}
.todo {
	&-wrapper {
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		width: 100%;
	}
	&-container {
		width: 400px;
		min-height: 400px;
		background-color: $color-gray;
		border-radius: 10px;
	}
}
</style>
