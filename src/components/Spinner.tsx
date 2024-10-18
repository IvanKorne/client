import React from "react";
import { ClipLoader } from "react-spinners";

type SpinnerProps = {
  isLoading?: boolean;
};

const Spinner = ({ isLoading = true }: SpinnerProps) => {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
      <ClipLoader
        color="#36d7b7"
        loading={isLoading}
        size={20}
        aria-label="Loading Spinnner"
        data-testid="loading"
      />
    </div>
  );
};

export default Spinner;
