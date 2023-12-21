<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let settingsOpen = false;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-3xl"><a href="/">pres.dev</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div>
					<button
						use:popup={{ event: 'click', target: 'navigation-menu' }}
						type="button"
						class="btn btn-sm variant-ghost">Pages</button
					>
					<div class="card p-4" data-popup="navigation-menu">
						<a class="btn btn-sm" href="/">Home</a>
						<a class="btn btn-sm" href="/stonks">Stonks</a>
						<a class="btn btn-sm" href="/playground">Playground</a>
					</div>
				</div>

				<div>
					<button
						use:popup={{ event: 'click', target: 'settings' }}
						type="button"
						class="btn btn-sm variant-soft-primary">Settings</button
					>
					<div class="card p-4" data-popup="settings">
						<p>Dark/Light Mode</p>
						<div class="flex justify-center">
							<LightSwitch />
						</div>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
