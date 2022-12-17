import {
  ArrowTrendingUpIcon,
  CogIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    id: 1,
    name: "User",
    stat: "Presley",
    icon: UserCircleIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Stock",
    stat: "$FDEX",
    icon: ArrowTrendingUpIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Status",
    stat: "Approved",
    icon: CogIcon,
    change: "3.2%",
    changeType: "decrease",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        User Dashboard
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="w-14 absolute rounded-md bg-stone-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                <span className="sr-only">
                  {" "}
                  {item.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6"></div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
