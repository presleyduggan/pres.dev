<script>
	export let form;
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	{#if form?.error}
		<div class="flex justify-center">
			<aside class="alert bg-primary-800 lg:w-1/2">
				<!-- Message -->
				<div class="alert-message">
					<p class="text-center">{form.msg}</p>
				</div>
			</aside>
		</div>
	{/if}
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-primary-700">Sign in</h2>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="label">Username</label>
					<div class="mt-2">
						<input
							id="username"
							name="username"
							type="text"
							autocomplete="username"
							required
							class="input"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="label">Password</label>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="input"
						/>
					</div>
				</div>

				<div>
					<button type="submit" class="btn variant-filled-primary">Sign in</button>
				</div>
			</form>
			<br />
			<p class="text-secondary-500">
				Don't have an account? Register <a href="/register">here</a>
			</p>
		</div>
	</div>
</div>
