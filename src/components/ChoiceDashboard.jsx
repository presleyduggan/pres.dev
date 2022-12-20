function ChoiceDashboard(props) {
  return (
    <div>
      <h1 className="text-2xl font-medium leading-6 text-gray-900">
        2023 Selections
      </h1>
      <dl className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-5">
        {props.stats.map((item) => (
          <div
            key={item.user}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">User</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.user}
            </dd>
            <dt className="truncate text-sm font-medium text-gray-500">
              Stock
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stock}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default ChoiceDashboard;
