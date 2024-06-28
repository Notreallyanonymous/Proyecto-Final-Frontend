
import { Spinner } from "flowbite-react";

const SpinnerLoading = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    </div>
  );
}

export default SpinnerLoading