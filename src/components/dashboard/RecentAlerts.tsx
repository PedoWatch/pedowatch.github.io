
const RecentAlerts = () => {
  const alerts = [
    { id: 1, level: "High", message: "Suspicious activity detected", time: "2m ago" },
    { id: 2, level: "Medium", message: "New pattern identified", time: "15m ago" },
    { id: 3, level: "Low", message: "User report submitted", time: "1h ago" },
  ];

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-sm">{alert.message}</p>
            <p className="text-xs text-gray-500">{alert.time}</p>
          </div>
          <span className={`px-2 py-1 rounded text-xs ${
            alert.level === "High" ? "bg-red-100 text-red-800" :
            alert.level === "Medium" ? "bg-yellow-100 text-yellow-800" :
            "bg-green-100 text-green-800"
          }`}>
            {alert.level}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentAlerts;
