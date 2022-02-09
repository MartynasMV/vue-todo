<template>
	<div class="todo-list">
		<TodoItem />
		<TodoItem />
		<TodoItem />
	</div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
	components: {
		TodoItem,
	},
};
</script>

<style scoped lang="scss"></style>
