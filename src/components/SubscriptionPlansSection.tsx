
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const SubscriptionPlansSection = () => {
  const plans = [
    {
      name: "Free Tier",
      price: "Free",
      description: "Basic protection for small communities",
      features: [
        "Community reports",
        "Basic Discord integration",
        "Basic Roblox integration",
        "Standard threat alerts"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro Tier",
      price: "$19/mo",
      description: "Enhanced protection for growing communities",
      features: [
        "Full threat-level access",
        "Custom alert configurations",
        "Priority updates",
        "Access to private research feeds",
        "Up to 5 platform integrations"
      ],
      cta: "Upgrade to Pro",
      highlighted: true
    },
    {
      name: "Enterprise / NGO",
      price: "Contact Us",
      description: "Comprehensive solution for large organizations",
      features: [
        "Dedicated support",
        "Custom legal compliance setup",
        "Cross-platform API access",
        "Custom integrations",
        "Advanced reporting tools",
        "Training for moderation teams"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-800">Subscription Plans</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works for your community's needs and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300
                ${plan.highlighted ? 'ring-2 ring-security-500 transform hover:-translate-y-1' : 'hover:shadow-xl'}
              `}
            >
              {plan.highlighted && (
                <div className="bg-security-500 py-1.5 text-white text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-security-800">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-security-900">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Contact Us" && (
                    <span className="ml-1 text-sm text-gray-500">/month</span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-600">{plan.description}</p>
                
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-security-500">
                        <CheckIcon className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-security-600 hover:bg-security-700 text-white' 
                        : 'bg-security-100 hover:bg-security-200 text-security-800'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="text-security-700 border-security-300">
            Compare Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlansSection;
