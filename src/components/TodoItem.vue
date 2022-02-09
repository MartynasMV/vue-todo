<template>
	<div class="todo-item">
		<div class="todo-item-content">
			<div class="todo-item-content-title">Walk the doggy</div>
			<div class="todo-item-content-description">Go for a walk</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.todo {
	&-item {
		background-color: gray;
		min-height: 70px;
		margin: 10px;
		padding: 10px;
		color: white;
		border-radius: 10px;
		font-size: 23px;

		&-content {
			&-title {
				font-weight: bold;
			}
			&-description {
				font-size: 19px;
			}
		}
	}
}
</style>
