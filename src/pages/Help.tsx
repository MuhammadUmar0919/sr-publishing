
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle, BookOpen, Upload, MessageCircle, Phone, Mail } from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: Upload,
      title: "Submission Guidelines",
      description: "Learn how to prepare and submit your manuscript",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Publication Process",
      description: "Understand the review and publication timeline",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Editorial Support",
      description: "Get help with editorial and technical questions",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: HelpCircle,
      title: "General FAQ",
      description: "Find answers to commonly asked questions",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const faqs = [
    {
      category: "Submission",
      question: "How do I submit my manuscript?",
      answer: "You can submit your manuscript through our online submission system. Create an account, upload your files, and follow the step-by-step submission process. Make sure to review our author guidelines before submission."
    },
    {
      category: "Review Process",
      question: "How long does the peer review process take?",
      answer: "The peer review process typically takes 2-4 weeks, depending on the complexity of the manuscript and reviewer availability. We'll keep you updated throughout the process via email notifications."
    },
    {
      category: "Publication",
      question: "What are the publication fees?",
      answer: "SR Publishing House operates on an open access model. Publication fees vary by journal and article type. Please check the specific journal's page for detailed fee information."
    },
    {
      category: "Technical",
      question: "What file formats do you accept?",
      answer: "We accept manuscripts in Microsoft Word (.doc, .docx) and LaTeX formats. Figures should be submitted in high-resolution formats (TIFF, EPS, or high-quality JPG/PNG)."
    },
    {
      category: "Editorial",
      question: "Can I suggest reviewers for my manuscript?",
      answer: "Yes, you can suggest potential reviewers during the submission process. However, the final selection of reviewers is at the discretion of the editorial team."
    },
    {
      category: "General",
      question: "How can I track my manuscript status?",
      answer: "You can track your manuscript status by logging into your author account on our submission system. You'll also receive email notifications for any status changes."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Help Center
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Find answers to your questions about publishing with SR Publishing House
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mb-12"
      >
        <div className="relative">
          <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg"
          />
        </div>
      </motion.div>

      {/* Help Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {helpCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-slate-600">{category.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <Badge variant="secondary">{filteredFaqs.length} questions found</Badge>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.05 }}
            >
              <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {faq.category}
                    </Badge>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Contact Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Still need help?</h3>
          <p className="text-slate-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Help;
