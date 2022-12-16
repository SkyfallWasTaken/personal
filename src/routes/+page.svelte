<script>
	import Icon from '../components/home/Icon.svelte';
	import IconList from '../components/home/IconList.svelte';
</script>

<div class="p-8">
	<h1 class="text-4xl font-black">Hi, I'm Skyfall!</h1>
	<p class="mt-2 mb-6">I'm just your average nerd.</p>

	<IconList categoryName="Games I play">
		<Icon title="Rocket League" src="/icons8/rocket-league.svg" />
        <Icon title="Minecraft" src="/mojang/mcblock.png" />
        <Icon title="Stardew Valley" src="/concernedape/stardew-valley.webp" />
	</IconList>
</div>
