<script lang="ts">
	export let data;
	console.log(data);
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';

	data.users.forEach((user) => {
		user.stock = '$' + user.stock;
	});

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Stock', 'Initial', 'Current', 'Percent Change'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(data.users, [
			'name',
			'stock',
			'initial_price',
			'price',
			'percent_change'
		]),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(data.users, [
			'name',
			'stock',
			'initial_price',
			'price',
			'percent_change'
		])
		// Optional: A list of footer labels.
		/* foot: ['Total', '', '<code class="code">5</code>'] */
	};
</script>

<!-- <h1>test</h1>
<button>test</button> -->
<br />
<br />
<div class="flex justify-center">
	<Table source={tableSimple} interactive={true} regionHead=".table-sort-dsc" />
</div>

<!-- Responsive Container (recommended) -->
<div class="flex justify-center">
	<div class="table-container">
		<!-- Native Table Element -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Name</th>
					<th>Stock</th>
					<th>Initial</th>
					<th>Current</th>
					<th>Percent Change</th>
				</tr>
			</thead>
			<tbody>
				{#each data.users as row, i}
					<tr>
						<td>{row.name}</td>
						<td>{row.stock}</td>
						<td>{row.initial_price}</td>
						<td>{row.price}</td>
						<td>{row.percent_change}</td>
					</tr>
				{/each}
			</tbody>
			<!-- <tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>{totalWeight}</td>
			</tr>
		</tfoot> -->
		</table>
	</div>
</div>
