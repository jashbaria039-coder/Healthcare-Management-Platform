import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      bio: "Former Chief Medical Officer with 15 years of clinical experience."
    },
    {
      name: "Marcus Wright",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      bio: "Led engineering teams at major health tech infrastructure companies."
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Head of Clinical Product",
      image: "https://images.unsplash.com/photo-1594824436951-7f12bc417531?q=80&w=800&auto=format&fit=crop",
      bio: "Practicing physician dedicated to reducing administrative burden."
    },
    {
      name: "James Holden",
      role: "VP of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      bio: "Expert in scaling healthcare systems and compliance protocols."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Restoring humanity to healthcare infrastructure.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We started MedFlow because we believe that when clinicians are unburdened by clunky software, patients receive better care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" 
                alt="Hospital hallway" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  MedFlow was born out of frustration. Our founders—two physicians and an engineer—were exhausted by the state of medical software. They saw brilliant doctors spending more time staring at screens than looking at their patients.
                </p>
                <p>
                  The software they were forced to use was clinical in the worst sense: cold, confusing, and designed for billing rather than care.
                </p>
                <p>
                  We decided to build the antithesis. A platform designed with uncompromising engineering standards, but built to feel warm, intuitive, and calm. We believe software should fade into the background so the therapeutic relationship can take center stage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Principles</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              The core tenets that guide every engineering and design decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Calm Authority",
                desc: "In high-stress environments, software should lower the temperature, not raise it. We design for clarity over density."
              },
              {
                title: "Patient Dignity",
                desc: "Every data point represents a human life. We protect that data fiercely and present it respectfully."
              },
              {
                title: "Clinical Velocity",
                desc: "If an action takes five clicks in legacy systems, it should take one in MedFlow. We respect clinicians' time."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by experts spanning clinical practice, health policy, and enterprise software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-square w-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
