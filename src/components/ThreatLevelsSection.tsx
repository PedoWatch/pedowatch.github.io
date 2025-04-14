
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, AlertTriangle, Ban, Eye, Siren } from "lucide-react";

const ThreatLevelsSection = () => {
  const threatLevels = [
    {
      level: 1,
      title: "Suspicious Behavior",
      action: "Monitor",
      description: "Activities that raise initial concerns but require further monitoring.",
      icon: Eye,
      className: "threat-level-1"
    },
    {
      level: 2,
      title: "Grooming Indicators",
      action: "Alert",
      description: "Signs of potential grooming behavior that warrant attention.",
      icon: AlertTriangle,
      className: "threat-level-2"
    },
    {
      level: 3,
      title: "Verified Predator",
      action: "Block",
      description: "Confirmed predatory behavior requiring immediate action.",
      icon: AlertCircle,
      className: "threat-level-3"
    },
    {
      level: 4,
      title: "Known Offender",
      action: "Blacklist",
      description: "Previously documented offenders with established patterns.",
      icon: Ban,
      className: "threat-level-4"
    },
    {
      level: 5,
      title: "Law Enforcement",
      action: "Report",
      description: "Immediate threat requiring law enforcement notification.",
      icon: Siren,
      className: "threat-level-5"
    }
  ];

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-800">Threat Levels Overview</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Powered by Human-Vetted Intel & AI Profiling
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {threatLevels.map((threat) => (
            <Card key={threat.level} className="w-full max-w-xs">
              <CardHeader className={`${threat.className} rounded-t-xl border-b-2 flex flex-row items-center gap-2`}>
                <div className="p-2 rounded-full bg-white/20">
                  <threat.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Level {threat.level}</CardTitle>
                  <CardDescription className="text-sm opacity-90 font-medium">{threat.title}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">{threat.description}</p>
              </CardContent>
              <CardFooter className="bg-gray-50 rounded-b-xl">
                <p className="text-xs font-semibold text-security-600 uppercase">Action: {threat.action}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-500">
            Each report is timestamped, sourced, and updated live from trusted channels.
            Our multi-tiered approach ensures accurate threat identification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreatLevelsSection;
