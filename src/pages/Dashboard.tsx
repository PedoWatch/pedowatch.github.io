
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Activity,
  AlertTriangle,
  BarChart2,
  Bell,
  Shield,
  Users,
  Map,
  Filter,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ThreatMap from "@/components/dashboard/ThreatMap";
import RecentAlerts from "@/components/dashboard/RecentAlerts";
import CommunityMetrics from "@/components/dashboard/CommunityMetrics";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Security Dashboard</h1>
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4" />
            Alerts
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Active Threats
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">23</div>
              <p className="text-xs text-gray-500 mt-1">+5 in last 24h</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Protected Users
              </CardTitle>
              <Shield className="h-4 w-4 text-security-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,453</div>
              <p className="text-xs text-gray-500 mt-1">Across all platforms</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Report Rate
              </CardTitle>
              <Activity className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.2%</div>
              <p className="text-xs text-gray-500 mt-1">Processing accuracy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Communities
              </CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-gray-500 mt-1">Active networks</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Threat Distribution</CardTitle>
                <Button variant="ghost" size="sm">
                  <Map className="h-4 w-4 mr-2" />
                  View Full Map
                </Button>
              </CardHeader>
              <CardContent>
                <ThreatMap />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Alerts</CardTitle>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </CardHeader>
              <CardContent>
                <RecentAlerts />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Community Metrics</CardTitle>
                <Button variant="ghost" size="sm">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </CardHeader>
              <CardContent>
                <CommunityMetrics />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
