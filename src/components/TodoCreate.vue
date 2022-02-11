<template>
	<Modal ref="modal">
		<form class="app-form">
			<div class="form-control">
				<label class="label">Title</label>
				<input v-model="form.title" class="form-input" type="text" />
			</div>
			<div class="form-control form-control-last">
				<label class="label">Description</label>
				<textarea
					v-model="form.description"
					cols="30"
					rows="5"
					class="form-input"
				>
				</textarea>
			</div>
			<div class="app-error">
				<div class="form-error">
					{{ formError }}
				</div>
			</div>
			<button @click="submitForm" type="button" class="app-button is-primary">
				Confirm
			</button>
		</form>
	</Modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
	components: {
		Modal,
	},
	data() {
		return {
			form: {
				title: "",
				description: "",
			},
			formError: "",
			forceClose: false,
		};
	},
	computed: {
		isFormValid() {
			return this.form.title.length > 8 && this.form.description.length > 10
				? true
				: false;
		},
		modal() {
			return this.$refs.modal;
		},
	},

	methods: {
		submitForm() {
			if (this.isFormValid) {
				this.$emit("formSubmitted", { ...this.form });
				this.modal.close();
				this.resetForm();
			} else {
				this.formError =
					"Title needs to be longer than 8 characters, description - longer than 10";
			}
		},
		resetForm() {
			this.form.description = "";
			this.form.title = "";
		},
	},
};
</script>

<style lang="scss" scoped>
.form-error {
	margin-bottom: 10px;
}
</style>
