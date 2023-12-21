<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="btn btn-sm" href="/stonks">Stonks 2023</a>
		<a class="btn btn-sm" href="/stonks/fame">Hall of Fame</a>
		<a class="btn btn-sm" href="/stonks/shame">Hall of Shame</a>
		<a class="btn btn-sm" href="/stonks/info">Info</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- <a class="btn btn-sm variant-ghost-surface" href="/admin/inventory/create"
            >Member lookup</a
        > -->
	</svelte:fragment>
</AppBar>
<slot />
