import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, Video, Pill, FileText, Bell, Search, 
  ArrowRight, ActivitySquare, LayoutDashboard, Lock
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "Automated routing, waitlist management, and multi-provider booking logic that eliminates double-bookings and minimizes gaps.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Video,
      title: "Integrated Telemedicine",
      description: "High-definition video consultations with built-in screen sharing, whiteboard, and concurrent charting without leaving the window.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "E-prescribing with real-time contraindication alerts, pharmacy routing, and patient adherence tracking.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: FileText,
      title: "Unified Health Records",
      description: "Clean, chronological timelines of patient history. Stop hunting for labs in nested folders; everything is contextual.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: Bell,
      title: "Automated Workflows",
      description: "Set triggers for follow-ups, pre-visit instructions, and post-op care plans to ensure patients never fall through the cracks.",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10"
    },
    {
      icon: Search,
      title: "Provider Discovery",
      description: "Patient-facing portal for finding the right specialist based on symptoms, availability, and insurance network.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Everything required to run a modern practice.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We replaced disjointed point solutions with a single, elegant platform. Beautifully designed, ruthlessly efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bgColor}`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <LayoutDashboard className="w-4 h-4" />
                <span>Command Center</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                See the whole picture in seconds.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The provider dashboard synthesizes labs, vitals, recent notes, and risk factors into a single scannable view before you enter the room.
              </p>
              <ul className="space-y-3">
                {["Longitudinal health timelines", "Customizable widget layouts", "One-click order entry", "Voice-to-text dictation built in"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ActivitySquare className="w-5 h-5 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl shadow-xl border p-4 md:p-8"
            >
              <div className="aspect-[4/3] bg-muted/30 rounded-lg border border-dashed flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">Dashboard Interface Visualization</span>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl shadow-xl border p-4 md:p-8 order-2 lg:order-1"
            >
              <div className="aspect-[4/3] bg-muted/30 rounded-lg border border-dashed flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">Security Infrastructure Visualization</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Lock className="w-4 h-4" />
                <span>Compliance & Security</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Fort-Knox level security.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We don't compromise on patient data. MedFlow exceeds HIPAA, SOC2 Type II, and HITRUST requirements with end-to-end encryption.
              </p>
              <ul className="space-y-3">
                {["AES-256 encryption at rest and in transit", "Granular role-based access controls", "Comprehensive audit logging", "Automated compliance reporting"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ActivitySquare className="w-5 h-5 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience MedFlow firsthand</h2>
          <Button size="lg" asChild>
            <Link href="/contact" data-testid="button-features-demo">
              Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
