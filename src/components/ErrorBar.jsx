import { XCircleIcon } from "@heroicons/react/20/solid";

export default function ErrorBar(props) {
  return (
    <div className="flex justify-center">
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{props.error}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
