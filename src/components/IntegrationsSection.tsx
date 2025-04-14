
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare, Code, Bot, Gamepad2 } from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    {
      title: "Discord Bot",
      description: "Instant alerts, member verification, real-time scanning.",
      icon: MessagesSquare
    },
    {
      title: "Roblox Module",
      description: "Automated player threat detection and ban synchronization.",
      icon: Gamepad2
    },
    {
      title: "Minecraft",
      description: "Coming soon - Protection for Minecraft servers.",
      icon: Bot,
      comingSoon: true
    },
    {
      title: "Custom Webhooks",
      description: "Coming soon - Seamlessly integrate with any platform.",
      icon: Code,
      comingSoon: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-800">Platform Integrations</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Protect your platforms — wherever your community lives.
            Seamlessly plug into your ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <Card key={index} className={`security-card ${integration.comingSoon ? 'opacity-75' : ''}`}>
              <CardHeader className="space-y-0 pb-2">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-lg bg-security-100 flex items-center justify-center">
                    <integration.icon className="h-6 w-6 text-security-600" />
                  </div>
                  {integration.comingSoon && (
                    <span className="text-xs font-medium bg-security-100 text-security-700 px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold mt-4">{integration.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {integration.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
