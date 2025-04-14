
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  Activity,
  BarChart2,
  Settings,
  Users,
  AlertTriangle,
  LogOut,
} from "lucide-react";

const DashboardSidebar = () => {
  const menuItems = [
    { icon: BarChart2, label: "Overview", href: "/dashboard" },
    { icon: AlertTriangle, label: "Threats", href: "/dashboard/threats" },
    { icon: Users, label: "Community", href: "/dashboard/community" },
    { icon: Activity, label: "Reports", href: "/dashboard/reports" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="w-64 bg-white h-full border-r flex flex-col">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-security-600" />
          <span className="text-xl font-bold text-security-800">PedoWatch</span>
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2 text-red-600">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
