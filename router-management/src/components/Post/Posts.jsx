import { Outlet } from "react-router-dom";
function post() {
  return (
    <>
      <div>Posts available</div>
      <Outlet />
    </>
  );
}

export default post;
