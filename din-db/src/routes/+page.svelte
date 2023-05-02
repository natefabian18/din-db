<script lang="ts">
</script>

<style>
	.Home {
		display: grid;
		place-items: center;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		width: 100%;
	}

	article {
		margin: 0.5em 0.25em;
	}
</style>

<div class="Home">
	<div class="MealCount">
		<article>
			<header>stats</header>
			You have a total of 21 Meals indexed
		</article>
	</div>
	<div class="MealsToMake">
		<article>
			<header>On your list to make</header>
			<ul>
				<li>Spaghetti</li>
				<li>Cheese</li>
				<li>Bushes baked beans</li>
			</ul>
		</article>
	</div>
	<div class="FamilyInfo">
		<article>
			<header>Family Info</header>
			<p>You are Nate</p>
			<p>Your family has 2 members</p>
		</article>
	</div>
	<div class="TopMeals">
		<article>
			<header>
				Your top most made meals are
			</header>
			<ol>
				<li>Cheese</li>
				<li>Beans</li>
				<li>Burgers</li>
			</ol>
		</article>
	</div>
</div>