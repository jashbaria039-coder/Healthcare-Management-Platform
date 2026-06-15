import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timeline depends on your clinic size and data migration needs. For an independent practice, we can be fully operational in 2-3 weeks. For multi-location enterprise clients, the process typically spans 60-90 days with dedicated success management."
    },
    {
      question: "Is MedFlow HIPAA compliant?",
      answer: "Yes, MedFlow is fully HIPAA compliant. We maintain SOC2 Type II certification, utilize AES-256 encryption for data at rest and in transit, and provide Business Associate Agreements (BAAs) for all clients."
    },
    {
      question: "Can we migrate data from our existing EMR?",
      answer: "Absolutely. We have automated migration tools for major EMRs (Epic, Cerner, Athena, etc.) and our data engineering team will handle the secure transfer, mapping, and verification of your historical patient records."
    },
    {
      question: "Do you offer training for our staff?",
      answer: "Yes. Every plan includes comprehensive onboarding. We provide role-based training sessions (for providers, nurses, and front-desk staff), a comprehensive video library, and a knowledge base. Professional and Enterprise plans include live, instructor-led sessions."
    },
    {
      question: "How does the patient portal work?",
      answer: "The patient portal is a secure, responsive web application where patients can book appointments, fill out intake forms, message providers, view lab results, and join telehealth calls. It requires no app download."
    },
    {
      question: "Does MedFlow handle billing and revenue cycle management?",
      answer: "MedFlow includes robust coding and charge capture capabilities. While we do not act as a clearinghouse, we integrate seamlessly with major RCM platforms and clearinghouses to ensure smooth claim submission."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)]">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about transitioning to MedFlow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold" data-testid={`faq-trigger-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Our team is ready to provide specific answers for your practice.</p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" data-testid="button-faq-contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
