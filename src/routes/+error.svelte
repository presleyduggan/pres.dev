<script>
	import CowImage from '../assets/500cow.jpg';
</script>

<div class="flex flex-col items-center py-6">
	<div class="py-8">
		<h1 class="text-4xl font-bold">Oh No!</h1>
		<h2 class="py-4 flex justify-center text-2xl">Error 500</h2>
	</div>
	<div class="">
		<img src={CowImage} width={800} height={800} alt="Wrong page cow!" />
	</div>
	<div>
		<h1 class="py-4 text-lg md:text-4xl">Something went wrong.... Sorry about that 😭</h1>
	</div>
	<div>
		<h1 class="py-2 text-xl md:text-4xl">
			You can return to my homepage <a class="text-blue-500" href="/">here</a>
		</h1>
	</div>
</div>
