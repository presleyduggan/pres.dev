<script lang="ts">
	import type { StockUser } from '$lib/types/Types';
	export let users: StockUser[];
	import { onMount } from 'svelte';

	const normalArrow = '↕';
	const upArrow = '⬆';
	const downArrow = '⬇';
	const TABLE_WIDTH = 5;

	let previousSort: number;
	let sortMod: number;
	let date: Date;

	onMount(() => {
		date = new Date();
		console.log('mounting');
		sortMod = 1;
		previousSort = 5;
		fixArrow(5);
		//sortStonkers(5);
	});

	let tableColumns = ['Name ↕', 'Stock ↕', 'Initial ↕', 'Current ↕', '% Change ↕'];
	let startTableColumns: string[] = [];

	// assign by value :)
	for (let i = 0; i < tableColumns.length; i++) {
		startTableColumns.push(tableColumns[i]);
	}

	/* interface StockUser {
		id: string;
		name: string;
		stock: string;
		initial_price: number;
		price: number;
		percent_change: number;
	} */

	/* if (!users.users[0].stock.includes('$')) {
		users.users.forEach((user: StockUser) => {
			user.stock = '$' + user.stock;
		});
	} */

	export function sortStonkers(sortNum: number) {
		if (previousSort === sortNum) {
			sortMod = sortMod * -1;
		} else {
			sortMod = 1;
		}

		fixArrow(sortNum);

		switch (sortNum) {
			case 1:
				users.sort(sortNames);
				previousSort = 1;
				break;

			case 2:
				users.sort(sortStocks);
				previousSort = 2;
				break;

			case 3:
				users.sort(sortInitial);
				previousSort = 3;
				break;

			case 4:
				users.sort(sortCurrent);
				previousSort = 4;
				break;

			case 5:
				users.sort(sortPercent);
				previousSort = 5;
				break;
		}

		//console.log(users.users);
		users = users;
	}

	function sortNames(a: StockUser, b: StockUser): number {
		if (a.name.toUpperCase() < b.name.toUpperCase()) {
			return 1 * sortMod;
		}
		if (a.name.toUpperCase() > b.name.toUpperCase()) {
			return -1 * sortMod;
		} else {
			return 0;
		}
	}

	function sortStocks(a: StockUser, b: StockUser): number {
		if (a.stock.toUpperCase() < b.stock.toUpperCase()) {
			return 1 * sortMod;
		}
		if (a.stock.toUpperCase() > b.stock.toUpperCase()) {
			return -1 * sortMod;
		} else {
			return 0;
		}
	}

	function sortInitial(a: StockUser, b: StockUser): number {
		if (a.initial_price < b.initial_price) {
			return 1 * sortMod;
		}
		if (a.initial_price > b.initial_price) {
			return -1 * sortMod;
		} else {
			return 0;
		}
	}

	function sortCurrent(a: StockUser, b: StockUser): number {
		if (a.price < b.price) {
			return 1 * sortMod;
		}
		if (a.price > b.price) {
			return -1 * sortMod;
		} else {
			return 0;
		}
	}

	function sortPercent(a: StockUser, b: StockUser): number {
		if (a.percent_change < b.percent_change) {
			return 1 * sortMod;
		}
		if (a.percent_change > b.percent_change) {
			return -1 * sortMod;
		} else {
			return 0;
		}
	}

	function fixArrow(num: number): void {
		num = num - 1;

		for (let i = 0; i < tableColumns.length; i++) {
			if (num !== i) {
				tableColumns[i] = startTableColumns[i];
			}
		}

		if (tableColumns[num].includes(downArrow)) {
			tableColumns[num] = tableColumns[num].replace(downArrow, upArrow);
			return;
		}

		tableColumns[num] = tableColumns[num].replace(upArrow, downArrow);
		tableColumns[num] = tableColumns[num].replace(normalArrow, downArrow);

		return;
	}
</script>

<table class="table table-interactive table-fixed">
	<thead class="">
		<tr>
			<th
				><button class="text-sm lg:text-lg" on:click={() => sortStonkers(1)}
					>{tableColumns[0]}</button
				></th
			>
			<th
				><button class="text-sm lg:text-lg" on:click={() => sortStonkers(2)}
					>{tableColumns[1]}</button
				></th
			>
			<th
				><button class="text-sm lg:text-lg" on:click={() => sortStonkers(3)}
					>{tableColumns[2]}</button
				></th
			>
			<th
				><button class="text-sm lg:text-lg" on:click={() => sortStonkers(4)}
					>{tableColumns[3]}</button
				></th
			>
			<th
				><button class="text-sm lg:text-lg" on:click={() => sortStonkers(5)}
					>{tableColumns[4]}</button
				></th
			>
		</tr>
	</thead>
	<tbody>
		{#each users as row, i}
			<tr>
				<td>{row.name}</td>
				<td>{'$' + row.stock}</td>
				<td>{'$' + row.initial_price}</td>
				<td>{'$' + row.price}</td>
				{#if row.percent_change > 0}
					<td class="text-green-500">{row.percent_change + '%'}</td>
				{:else}
					<td class="text-red-500">{row.percent_change + '%'}</td>
				{/if}
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
<p class="flex justify-center py-1 text-[8px] md:text-[14px]">
	Last updated at {date}
</p>
