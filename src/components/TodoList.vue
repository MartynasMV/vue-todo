<template>
	<div class="todo-list">
		<div v-if="todos && todos.length > 0">
			<TodoItem
				v-for="todo in todos"
				:key="todo._id"
				:_id="todo._id"
				:title="todo.title"
				:description="todo.description"
			/>
		</div>
		<div v-else class="no-todos">There are no tasks to display</div>
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
.no-todos {
	padding: 20px;
	font-size: 23px;
	font-weight: bold;
	text-align: center;
}
</style>
