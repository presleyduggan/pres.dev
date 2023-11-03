<script lang="ts">
	import StonksTable from '$lib/components/StonksTable.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	export let data;
	console.log(data);

	let refreshKey = 0;
	const initialSPY = 382.43;
	let loadingText = 'Loading...';

	/* onMount(() => {
		const interval = setInterval(() => {
			loadingText = 'Refreshing Stonks Data...';
			invalidateAll();
			refreshKey++;
		}, 60000);

		return () => {
			clearInterval(interval);
		};
	}); */
</script>

<br />
<br />
<title>Stonks 2023</title>
<h1 class="flex justify-center text-3xl md:text-4xl lg:text-7xl font-bold">
	Stonks Competition 2023
</h1>
<!-- Responsive Container (recommended) -->
<div class="flex flex-col justify-center sm:px-6 lg:px-8 py-16">
	{#key refreshKey}
		<StonksTable {data} />
	{/key}
	<div class="flex justify-center py-8">
		{#await data.streamed.spy}
			<div class="flex flex-col items-center">
				<h2 class="text-4xl">{loadingText}</h2>
				<ProgressRadial class="py-4" value={undefined} track="stroke-primary-600" />
			</div>
		{:then spy}
			{#if spy.price - initialSPY >= 0}
				<h2 class="text-4xl">
					$SPY is up <span class="text-green-500"
						>{parseFloat((((spy.price - initialSPY) / initialSPY) * 100).toFixed(2))}%</span
					> YTD
				</h2>
			{:else}
				<h2 class="text-4xl">
					$SPY is down <span class="text-red-500"
						>{parseFloat((((spy.price - initialSPY) / initialSPY) * 100).toFixed(2))}%</span
					> YTD
				</h2>
			{/if}
		{:catch}
			<h2 class="text-3xl">An error occured.... 😭</h2>
		{/await}
	</div>
</div>
