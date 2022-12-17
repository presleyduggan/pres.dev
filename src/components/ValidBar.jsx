import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function ValidBar(props) {
  return (
    <div className="flex justify-center">
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                {props.valid}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
