import { useNavigate } from "react-router-dom";

function Dashboard({ user }) {
  const navigate = useNavigate();
  if (!user) {
    // return <Navigate to="/login" />;
    navigate("/login");
  }
  return <div>Dashboard</div>;
}

export default Dashboard;
