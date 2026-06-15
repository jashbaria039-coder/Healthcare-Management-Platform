import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "For independent practitioners starting out.",
      price: isAnnual ? "149" : "189",
      features: [
        "Up to 500 active patients",
        "Basic scheduling & calendar",
        "Standard health records",
        "Email support",
        "1 Telehealth room"
      ],
      notIncluded: [
        "E-prescribing",
        "Automated workflows",
        "Custom branding"
      ]
    },
    {
      name: "Professional",
      description: "For growing clinics that need advanced capabilities.",
      price: isAnnual ? "349" : "419",
      popular: true,
      features: [
        "Unlimited patients",
        "Advanced scheduling & routing",
        "Unified health records",
        "E-prescribing & lab integration",
        "Unlimited Telehealth",
        "Automated patient workflows",
        "Priority 24/7 support"
      ],
      notIncluded: [
        "API access",
        "Custom reporting dashboards"
      ]
    },
    {
      name: "Enterprise",
      description: "For hospitals and multi-location organizations.",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Multi-location management",
        "Custom integration & API access",
        "Dedicated success manager",
        "Custom reporting & analytics",
        "White-label patient portal",
        "On-premise deployment option"
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Simple, transparent pricing.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              No hidden fees, no implementation surprises. Pay for the capabilities you need to deliver exceptional care.
            </p>

            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                data-testid="switch-billing-cycle"
              />
              <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Annually <span className="ml-1.5 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative h-full"
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full z-10">
                    Most Popular
                  </div>
                )}
                <Card className={`h-full flex flex-col ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border shadow-sm"}`}>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      {plan.price === "Custom" ? (
                        <span className="text-4xl font-bold tracking-tight">Custom</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold tracking-tight">${plan.price}</span>
                          <span className="text-sm text-muted-foreground font-medium">/ provider / mo</span>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-4 flex-1">
                    <ul className="space-y-4 text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={`not-${idx}`} className="flex items-start gap-3 text-muted-foreground">
                          <X className="w-5 h-5 opacity-50 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-8 pt-0">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/contact" data-testid={`button-pricing-${plan.name.toLowerCase()}`}>
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Banner */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Have questions about implementation?</h3>
          <p className="text-muted-foreground mb-6">Our team is ready to help you map out the perfect transition plan.</p>
          <Button variant="link" asChild>
            <Link href="/faq" data-testid="link-pricing-faq">Read our FAQ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
