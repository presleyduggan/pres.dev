<script lang="ts">
	import StonksTable from '$lib/components/StonksTable.svelte';

	import David from '../../assets/stonkers/2023/david.jpg';
	import Dhiraj from '../../assets/stonkers/2023/dhiraj.jpg';
	import Jack from '../../assets/stonkers/2023/jack.jpg';
	import Josh from '../../assets/stonkers/2023/josh.jpg';
	import Logan from '../../assets/stonkers/2023/logan.jpg';
	import Mark from '../../assets/stonkers/2023/mark.jpg';
	import Mitch from '../../assets/stonkers/2023/mitch.jpg';
	import Poles from '../../assets/stonkers/2023/poles.jpg';
	import Presley from '../../assets/stonkers/2023/presley.jpg';
	import Rex from '../../assets/stonkers/2023/rex.png';
	import Sean from '../../assets/stonkers/2023/sean.jpg';

	import { ProgressRadial } from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	export let data;
	//console.log(data);

	let refreshKey = 0;
	const initialSPY = 382.43;
	let loadingText = 'Loading Stonks Data...';

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
<title>Stonks 2024</title>
<h1 class="flex justify-center text-3xl md:text-4xl lg:text-7xl font-bold">
	Stonks Competition 2023
</h1>
<!-- Responsive Container (recommended) -->
<div class="flex flex-col justify-center sm:px-6 lg:px-8 py-16">
	{#await data.streamed.users}
		<div class="flex flex-col items-center">
			<h2 class="text-4xl">{loadingText}</h2>
			<ProgressRadial class="py-4" value={undefined} track="stroke-primary-600" />
		</div>
	{:then users}
		<StonksTable {users} />
	{:catch}
		<h2 class="text-3xl text-center">Can't load user statistics.. tell Presley 😭</h2>
	{/await}
	<div class="flex justify-center py-12">
		{#await data.streamed.spy}
			<div />
			<!-- <div class="flex flex-col items-center">
				<h2 class="text-4xl">{loadingText}</h2>
				<ProgressRadial class="py-4" value={undefined} track="stroke-primary-600" />
			</div> -->
		{:then spy}
			{#if spy.price - initialSPY >= 0}
				<h2 class="text-2xl lg:text-4xl">
					$SPY is up <span class="text-green-500"
						>{parseFloat((((spy.price - initialSPY) / initialSPY) * 100).toFixed(2))}%</span
					> YTD
				</h2>
			{:else}
				<h2 class="text-2xl lg:text-4xl">
					$SPY is down <span class="text-red-500"
						>{parseFloat((((spy.price - initialSPY) / initialSPY) * 100).toFixed(2))}%</span
					> YTD
				</h2>
			{/if}
		{:catch}
			<h2 class="text-3xl text-center">An error occured loading $SPY.... 😭</h2>
		{/await}
	</div>
	{#await data.streamed.users}
		<div />
		<!-- <h2 class="text-2xl lg:text-4xl text-center">Your current Stonks KING is: Loading...</h2> -->
	{:then users}
		<div class="flex justify-center py-12">
			<h2 class="text-2xl lg:text-4xl">Your current Stonks KING is: {users[0].name}</h2>
		</div>
		<div class="flex justify-center py-2">
			{#if users[0].name === 'Dhiraj'}
				<img src={Dhiraj} alt="" height="400" width="400" />
			{:else if users[0].name === 'David'}
				<img src={David} alt="" height="400" width="400" />
			{:else if users[0].name === 'Jack'}
				<img src={Jack} alt="" height="400" width="400" />
			{:else if users[0].name === 'Josh'}
				<img src={Josh} alt="" height="400" width="400" />
			{:else if users[0].name === 'Logan'}
				<img src={Logan} alt="" height="400" width="400" />
			{:else if users[0].name === 'Mark'}
				<img src={Mark} alt="" height="400" width="400" />
			{:else if users[0].name === 'Mitch'}
				<img src={Mitch} alt="" height="400" width="400" />
			{:else if users[0].name === 'Poles'}
				<img src={Poles} alt="" height="400" width="400" />
			{:else if users[0].name === 'Presley'}
				<img src={Presley} alt="" height="400" width="400" />
			{:else if users[0].name === 'Rex'}
				<img src={Rex} alt="" height="400" width="400" />
			{:else if users[0].name === 'Sean'}
				<img src={Sean} alt="" height="400" width="400" />
			{/if}
		</div>
	{:catch}
		<h2 class="text-3xl text-center">We'll never know who the king is 😭</h2>
	{/await}
</div>
