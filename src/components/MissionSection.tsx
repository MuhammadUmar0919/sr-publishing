
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Users } from "lucide-react";

export const MissionSection = () => {
  const missions = [
    {
      icon: Eye,
      title: "Promote the visibility and impact of scientific research worldwide",
      description: "We strive to make scientific knowledge accessible to researchers, educators, and practitioners globally."
    },
    {
      icon: Shield,
      title: "Ensure inclusive and open access to scholarly content",
      description: "Breaking down barriers to knowledge by providing free, open access to high-quality research publications."
    },
    {
      icon: Users,
      title: "Uphold rigorous peer-review and publication ethics",
      description: "Maintaining the highest standards of academic integrity and scholarly excellence in all our publications."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Who We Are</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                <strong>SR Publishing House</strong> is an independent, international academic publisher 
                dedicated to supporting and advancing scholarly communication across all major fields of science, 
                technology, medicine, social sciences, humanities, and public policy.
              </p>
              <p className="text-slate-600 mb-6">
                Through our Scientific Results journal series, we aim to provide a trusted, high-quality 
                platform for the dissemination of peer-reviewed research that meets the highest academic 
                and ethical standards, fostering global knowledge, encouraging interdisciplinary dialogue, 
                and supporting researchers from diverse regions and institutions.
              </p>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-slate-800 mb-8"
            >
              Our core mission is to:
            </motion.h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg p-8 transform rotate-3 shadow-lg">
              <div className="bg-white rounded-lg p-6 transform -rotate-3 shadow-inner">
                <div className="text-4xl font-serif text-amber-700 mb-4">✦</div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Excellence</h4>
                <p className="text-slate-600 text-sm">
                  Committed to maintaining the highest standards in academic publishing
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <mission.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-3 leading-tight">
                    {mission.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
