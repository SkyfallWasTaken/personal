<script lang="ts">
	import { tippy } from 'svelte-tippy';

	export let title: string;
	export let src: string;
</script>

<img {src} alt={title} use:tippy={{ content: title, placement: 'bottom' }} />
