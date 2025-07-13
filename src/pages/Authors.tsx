
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Eye, Edit, HelpCircle, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Authors = () => {
  const { toast } = useToast();

  const handleLearnMore = (serviceTitle: string) => {
    toast({
      title: "Opening service details",
      description: `Loading information about ${serviceTitle}...`,
    });
    console.log(`Learn more clicked for: ${serviceTitle}`);
  };

  const handleSubmitManuscript = () => {
    toast({
      title: "Redirecting to submission portal",
      description: "Opening manuscript submission system...",
    });
    console.log("Submit manuscript clicked");
  };

  const handleDownloadGuidelines = () => {
    toast({
      title: "Downloading guidelines",
      description: "Author guidelines PDF will be downloaded shortly.",
    });
    console.log("Download guidelines clicked");
  };

  const services = [
    {
      icon: FileText,
      title: "Author Guidelines",
      description: "Learn about general manuscript formatting, referencing style, and structure requirements applicable to all SR Publishing House journals.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Upload,
      title: "Submission Process",
      description: "An overview of how to submit your manuscript using our centralized submission system, including key steps and expected timelines.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Eye,
      title: "Peer Review Policy",
      description: "Understand our double-blind peer review model, selection of reviewers, and evaluation criteria to ensure academic integrity and transparency.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Edit,
      title: "Publishing Ethics",
      description: "Familiarize yourself with our ethical standards, including authorship responsibilities, conflicts of interest, and plagiarism policies.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: HelpCircle,
      title: "FAQs for Authors",
      description: "Find answers to commonly asked questions regarding submission, publication timelines, copyright, and more.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: FileText,
      title: "Copyediting Service",
      description: "We offer optional copyediting support to help authors improve grammar, clarity, and overall manuscript flow before peer review.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: Edit,
      title: "Language Editing Service",
      description: "Need help refining your English-language manuscript? Our language editors can assist non-native speakers in achieving professional academic tone.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: Shield,
      title: "Proofreading Service",
      description: "Before final publication, our team provides high-quality proofreading to ensure accuracy in content, formatting, and citations.",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          FOR AUTHORS
        </h1>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Welcome to the Author Information Center of SR Publishing House. We are committed to providing comprehensive support for
          authors through every stage of the publishing process. Below are essential guidelines and services offered across all our journals:
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-auto"
                  onClick={() => handleLearnMore(service.title)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Submit?</h2>
          <p className="text-slate-600 mb-6">
            Start your publication journey with SR Publishing House today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleSubmitManuscript}
            >
              <Upload className="h-5 w-5 mr-2" />
              Submit Manuscript
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadGuidelines}
            >
              <FileText className="h-5 w-5 mr-2" />
              Download Guidelines
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Authors;
