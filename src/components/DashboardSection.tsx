
import { Card, CardContent } from "@/components/ui/card";
import ThreatMap from "./dashboard/ThreatMap";
import { BarChart2, Shield, Users } from "lucide-react";

const DashboardSection = () => {
  const stats = [
    {
      title: "Active Threats",
      value: "24",
      change: "+2",
      icon: Shield,
      description: "Live threats being monitored"
    },
    {
      title: "Communities Protected",
      value: "1.2M",
      change: "+12.3%",
      icon: Users,
      description: "Total users protected"
    },
    {
      title: "Reports Processed",
      value: "847",
      change: "+89",
      icon: BarChart2,
      description: "Reports this month"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-800">
            Command Center Demo
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get a real-time overview of threats and protect your community with our powerful dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Threat Map</h3>
                <ThreatMap />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-security-100">
                      <stat.icon className="h-6 w-6 text-security-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">{stat.title}</h4>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-semibold text-security-800">{stat.value}</p>
                        <span className="text-sm text-green-500">{stat.change}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
