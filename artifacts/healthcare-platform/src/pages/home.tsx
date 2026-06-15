import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, ActivitySquare, ShieldCheck, Stethoscope, 
  Users, Clock, BarChart3, CheckCircle2, Building2
} from "lucide-react";

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.05] -z-10 [mask-image:linear-gradient(to_left,white,transparent)]" />
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <ActivitySquare className="w-4 h-4" />
              <span>The modern standard for care coordination</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Precision medicine applied to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">software.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              MedFlow connects clinicians, patients, and operations in one clean, confident system. Built for modern healthcare organizations that refuse to compromise on quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/contact" data-testid="button-hero-demo">
                  Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/features" data-testid="button-hero-features">
                  Explore Features
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ forward-thinking clinics</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-8">
            Powering care at leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale dark:invert">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold text-foreground/80">
                <Building2 className="w-6 h-6" />
                <span>HealthOrg {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Clinical precision. <br />Human warmth.
            </h2>
            <p className="text-lg text-muted-foreground">
              We stripped away the clutter of legacy EMRs to build a system that feels calm, authoritative, and empowering for both staff and patients.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: ShieldCheck,
                title: "Uncompromising Security",
                desc: "Enterprise-grade encryption and full HIPAA compliance built into the core, not bolted on as an afterthought."
              },
              {
                icon: Users,
                title: "Patient-Centric Design",
                desc: "An interface so intuitive that patients actually want to use it to manage their care journey."
              },
              {
                icon: Stethoscope,
                title: "Clinician Empowerment",
                desc: "Reduced charting time by 40% means providers spend more time looking at patients, not screens."
              }
            ].map((benefit, i) => (
              <motion.div key={i} variants={itemVars}>
                <Card className="h-full border-none shadow-none bg-muted/40 hover:bg-muted transition-colors">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights (Alternate Layout) */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Everything you need to coordinate care at scale
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From intelligent scheduling to secure telemedicine and automated follow-ups, MedFlow provides a unified command center for your entire operation.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Smart appointment routing and waitlist management",
                  "Integrated high-definition telehealth capabilities",
                  "Automated patient intake and consent forms",
                  "Real-time analytics and operational dashboards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild>
                <Link href="/features" data-testid="button-all-features">
                  See all features <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border bg-background flex flex-col">
                <div className="h-12 border-b bg-muted/30 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="flex-1 p-6 grid grid-cols-3 gap-6 bg-slate-50 dark:bg-slate-900">
                  <div className="col-span-1 space-y-4">
                    <div className="h-8 bg-muted rounded-md w-3/4" />
                    <div className="h-24 bg-card rounded-md shadow-sm border p-4 space-y-2">
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-3/4" />
                    </div>
                    <div className="h-24 bg-card rounded-md shadow-sm border p-4 space-y-2">
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-3/4" />
                    </div>
                  </div>
                  <div className="col-span-2 space-y-4">
                    <div className="h-32 bg-card rounded-md shadow-sm border p-6 flex items-end">
                      <div className="w-full flex justify-between items-end gap-2 h-16">
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                          <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="h-48 bg-card rounded-md shadow-sm border" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-primary-foreground"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to modernize your operations?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
              Join hundreds of healthcare organizations delivering better care with MedFlow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-base text-secondary-foreground" asChild>
                <Link href="/contact" data-testid="button-cta-demo">
                  Get a personalized demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
