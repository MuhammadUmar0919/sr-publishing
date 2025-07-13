
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, Globe, Users, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-800 mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us how we can help you..."
                      rows={5}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  content="info@srpublishing.com"
                  subContent="editorial@srpublishing.com"
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  subContent="Mon-Fri 9:00-17:00 GMT"
                />
                <ContactInfo
                  icon={MapPin}
                  title="Address"
                  content="123 Academic Street"
                  subContent="Publishing District, City 12345"
                />
                <ContactInfo
                  icon={Clock}
                  title="Business Hours"
                  content="Monday - Friday: 9:00 - 17:00"
                  subContent="Saturday - Sunday: Closed"
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Why choose us?</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs opacity-80">Countries</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-xs opacity-80">Authors</div>
                  </div>
                  <div>
                    <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <div className="text-2xl font-bold">8+</div>
                    <div className="text-xs opacity-80">Journals</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon: Icon, title, content, subContent }: {
  icon: any;
  title: string;
  content: string;
  subContent?: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="bg-blue-100 rounded-full p-2 mt-1">
      <Icon className="h-5 w-5 text-blue-600" />
    </div>
    <div>
      <h4 className="font-medium text-slate-800">{title}</h4>
      <p className="text-slate-600">{content}</p>
      {subContent && <p className="text-sm text-slate-500">{subContent}</p>}
    </div>
  </div>
);
