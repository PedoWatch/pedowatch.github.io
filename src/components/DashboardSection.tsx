
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Activity, Users, FileCog, Plug, Brain, FileJson } from "lucide-react";

const DashboardSection = () => {
  const dashboardFeatures = [
    {
      title: "Threat Feed Panel",
      description: "Live map, list view, and drill-down capabilities.",
      icon: MapPin
    },
    {
      title: "Community Overview",
      description: "Member risk-level breakdown and statistics.",
      icon: Activity
    },
    {
      title: "Report Manager",
      description: "Submit, review, and escalate cases efficiently.",
      icon: Users
    },
    {
      title: "Integration Hub",
      description: "Add or remove platform plugins as needed.",
      icon: Plug
    },
    {
      title: "User Behavior AI",
      description: "Behavior-based predictive flags and insights.",
      icon: Brain
    },
    {
      title: "Export Reports",
      description: "JSON, CSV, Law Enforcement templates.",
      icon: FileJson
    }
  ];

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-800">Administrative Dashboard</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            PedoWatch Command Center — Complete control over your community's safety
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Tabs defaultValue="light" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="light">Light Mode</TabsTrigger>
                <TabsTrigger value="dark">Dark Mode</TabsTrigger>
              </TabsList>
              <TabsContent value="light" className="mt-0">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
                  <div className="bg-security-800 p-4 text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="ml-2 text-sm font-medium">PedoWatch Dashboard</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                        <Activity className="h-8 w-8 text-security-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                        <Users className="h-8 w-8 text-security-600" />
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-40 mb-4 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-security-600" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-100 rounded-lg h-20 flex items-center justify-center">
                        <FileCog className="h-6 w-6 text-security-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg h-20 flex items-center justify-center">
                        <Plug className="h-6 w-6 text-security-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg h-20 flex items-center justify-center">
                        <FileJson className="h-6 w-6 text-security-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="dark" className="mt-0">
                <div className="bg-security-900 rounded-xl overflow-hidden shadow-xl border border-security-700">
                  <div className="bg-security-800 p-4 text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="ml-2 text-sm font-medium">PedoWatch Dashboard</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-security-800 rounded-lg h-24 flex items-center justify-center">
                        <Activity className="h-8 w-8 text-security-300" />
                      </div>
                      <div className="bg-security-800 rounded-lg h-24 flex items-center justify-center">
                        <Users className="h-8 w-8 text-security-300" />
                      </div>
                    </div>
                    <div className="bg-security-800 rounded-lg h-40 mb-4 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-security-300" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-security-800 rounded-lg h-20 flex items-center justify-center">
                        <FileCog className="h-6 w-6 text-security-300" />
                      </div>
                      <div className="bg-security-800 rounded-lg h-20 flex items-center justify-center">
                        <Plug className="h-6 w-6 text-security-300" />
                      </div>
                      <div className="bg-security-800 rounded-lg h-20 flex items-center justify-center">
                        <FileJson className="h-6 w-6 text-security-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="security-card p-6">
                  <div className="h-12 w-12 rounded-full bg-security-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-security-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-security-800">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center lg:justify-start">
              <Button className="bg-security-600 hover:bg-security-700 mr-4">
                View Demo Dashboard
              </Button>
              <Button variant="outline" className="text-security-700 border-security-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
