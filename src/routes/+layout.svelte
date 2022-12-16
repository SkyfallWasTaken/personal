<script>
	import Attributions from '../components/general/Attributions.svelte';
    
	import 'virtual:windi.css';
    import '../css/tippy-theme.css';
</script>

<main>
	<slot />
</main>
<Attributions />

<style>
	:global(.tippy-content) {
		@apply bg-crust rounded-md;
	}

    :global(.tippy-box > .tippy-arrow::before) {
        @apply text-crust;
    } 
</style>
