export default function TickBox(props) {
  function changeChecked() {
    props.setCheck(!props.checked);
  }

  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Notifications</legend>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onClick={changeChecked}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Does this Stock meet the requirements?
          </label>
          <br />
          <label id="comments-description" className="text-gray-500 text-xs">
            Over 1B market cap and above $10?
          </label>
        </div>
      </div>
    </fieldset>
  );
}
