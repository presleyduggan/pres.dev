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
				<a class="btn variant-ghost-surface hover:variant-soft-primary" href="/login"> Login </a>
				<div>
					<button
						use:popup={{ event: 'click', target: 'settings' }}
						type="button"
						class="btn variant-soft-primary">Test</button
					>
					<div class="card p-4" data-popup="settings">
						<p>Settings</p>
						<LightSwitch />
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
