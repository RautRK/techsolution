import { useContact } from "../context/ContactContext";
import { useAuth } from "../context/AuthContext";
import { Bar } from "react-chartjs-2"; // Importing the Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"; // Import necessary chart components
import "./Dashboard.css";

// Registering chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { messages } = useContact();
  const { logout } = useAuth();
  const currentDate = new Date().toLocaleString();


  const messageData = [
    { month: "January", count: 10 },
    { month: "February", count: 15 },
    { month: "March", count: 8 },
    { month: "April", count: 20 },
    { month: "May", count: 12 },
    { month: "June", count: 5 },
  ];

  const chartData = {
    labels: messageData.map((data) => data.month),
    datasets: [
      {
        label: "Messages Received",
        data: messageData.map((data) => data.count),
        backgroundColor: "#ea6a47",
        borderColor: "red",
        borderWidth: 0.9,
        
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Messages Received per Month",
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="navbar">
        <div className="navbar-left">
          <h1>
            Welcome, <span style={{ color: "var(--primary)" }}>Mokhtar</span>
          </h1>
        </div>
        <div className="navbar-right">
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <h2>Customer Messages</h2>
      {/* Bar Chart */}
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>

      {messages?.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message-card">
              <div className="message-header">
                <strong>
                  {msg.fullName} {msg.lastName}
                </strong>
                <span className="message-date">{currentDate}</span>
              </div>
              <p>{msg.message}</p>
              <div className="message-footer">
                <span>{msg.email}</span> | <span>{msg.phoneNumber}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
