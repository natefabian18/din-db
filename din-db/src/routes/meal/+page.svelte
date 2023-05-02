<script lang="ts">
	import Quill from '../../Lib/Quill.svelte'
</script>

<style>
	.Add,form {
		height: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
	}
</style>

<div class="Add">
	<form>
		<div class="container">
			<label for="MealName">
				Name of Meal
				<input type="text" placeholder="Bushes Baked Beans" maxlength="255">
			</label>
		</div>

		<div class="container" style="height: 100%">
			<Quill />
		</div>
	</form>
</div>