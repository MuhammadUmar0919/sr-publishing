
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, Users, Award, Eye, TrendingUp } from "lucide-react";
import { CountUp } from "@/components/CountUp";

const About = () => {
  const stats = [
    { icon: BookOpen, value: 8, label: "Open Access\nJournals", suffix: "+" },
    { icon: Users, value: 40, label: "Expert Editors", suffix: "+" },
    { icon: TrendingUp, value: 40, label: "Published\nArticles", suffix: "+" },
    { icon: Award, value: 1000, label: "Registered\nScholars", suffix: "+" },
  ];

  const missions = [
    {
      icon: Globe,
      title: "Promote the visibility and impact of scientific research worldwide",
      description: "We strive to make scientific knowledge accessible to researchers and academics globally."
    },
    {
      icon: BookOpen,  
      title: "Ensure inclusive and open access to scholarly content",
      description: "Breaking down barriers to knowledge sharing and promoting open science principles."
    },
    {
      icon: Award,
      title: "Uphold rigorous peer-review and publication ethics",
      description: "Maintaining the highest standards of academic integrity and research quality."
    },
  ];

  return (
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About SR Publishing House
          </h1>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">
                    <CountUp end={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-sm font-medium text-blue-600 whitespace-pre-line">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              <strong>SR Publishing House</strong> is an independent, international academic publisher 
              dedicated to supporting and advancing scholarly communication across all major fields of science, 
              technology, medicine, social sciences, humanities, and public policy.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Through our Scientific Results journal series, we aim to provide a 
              high-quality platform for the dissemination of peer-reviewed research that 
              meets the highest academic and ethical standards.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              SR Publishing House serves as a gateway for researchers, educators, 
              policymakers, and practitioners to contribute to and benefit from the 
              global exchange of scientific knowledge.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800">Global Knowledge Network</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Our core mission is to:</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <mission.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-3 leading-tight">
                      {mission.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {mission.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
  );
};

export default About;
