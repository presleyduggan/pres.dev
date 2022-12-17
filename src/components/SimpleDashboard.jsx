function SimpleDashboard(props) {
  let stats = [
    { name: "User", stat: props.user },
    { name: "Stock", stat: props.stock },
    { name: "Status", stat: props.status },
  ];

  return (
    <div>
      <h1 className="text-2xl font-medium leading-6 text-gray-900">
        Welcome to the Stonks 2023 User Dashboard!
      </h1>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default SimpleDashboard;
