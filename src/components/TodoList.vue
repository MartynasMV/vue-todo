<template>
	<div class="todo-list">
		<TodoItem
			v-for="todo in todos"
			:key="todo._id"
			:title="todo.title"
			:description="todo.description"
		/>

		<!--<TodoItem :title="todoTitle" :description="todoDescription" />
		<TodoItem :title="'Learn'" :description="'Learn to code'" /> -->
	</div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
	components: {
		TodoItem,
	},
	props: ["todos"],
};
</script>

<style scoped lang="scss">
.todo-list {
	flex: 1;
}
</style>
