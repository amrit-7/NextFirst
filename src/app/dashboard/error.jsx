"use client";
const Error = ({ error, reset }) => {
  return (
    <div>
      <h3>{error.message}</h3>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};
export default Error;
