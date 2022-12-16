<script lang="ts">
	export let categoryName: string;
</script>

<div>
	<h3 class="uppercase font-bold tracking-wide mb-2">{categoryName}</h3>
	<div class="flex gap-3">
        <slot />
    </div>
</div>
