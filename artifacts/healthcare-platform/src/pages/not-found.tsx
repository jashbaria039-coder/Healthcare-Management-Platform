import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ActivitySquare, AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            We couldn't find the page you're looking for. It may have been moved or the link might be broken.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/" data-testid="button-404-home">
                <ArrowLeft className="mr-2 w-4 h-4" /> Return to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" data-testid="button-404-support">
                Contact Support
              </Link>
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground">
            <ActivitySquare className="w-5 h-5 opacity-50" />
            <span className="font-semibold tracking-tight opacity-50">MedFlow</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
