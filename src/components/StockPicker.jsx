import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";

export default function StockPicker(props) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        2023 Stock
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <ArrowTrendingUpIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          onChange={(e) => props.setStock(e.target.value)}
          type="text"
          name="stock"
          id="stock"
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="$CZOO"
        />
      </div>
    </div>
  );
}
