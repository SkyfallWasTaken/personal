<script lang="ts">
	import { tippy } from 'svelte-tippy';

	export let title: string;
	export let src: string;
	export let href: string | undefined = undefined;
</script>

<a {href}>
	<img
		{src}
		alt={title}
		use:tippy={{ content: title, placement: 'bottom' }}
		height="40"
		width="40"
		class="text-white"
	/>
</a>
