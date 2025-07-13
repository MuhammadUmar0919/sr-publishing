
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

export const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const allNews: NewsItem[] = [
    {
      id: 1,
      title: "New Research Guidelines Released",
      excerpt: "Comprehensive guidelines for research submission and peer review process have been updated for 2024.",
      date: "12-Jul-2025",
      category: "Publishing News"
    },
    {
      id: 2,
      title: "Scientific Discovery in Climate Science",
      excerpt: "Groundbreaking research published in our Environmental Sciences journal reveals new insights into climate patterns.",
      date: "10-Jul-2025",
      category: "Scientific Discoveries"
    },
    {
      id: 3,
      title: "International Research Collaboration",
      excerpt: "SR Publishing House announces partnership with leading universities for enhanced global research dissemination.",
      date: "08-Jul-2025",
      category: "Academic Events"
    },
    {
      id: 4,
      title: "Open Access Initiative Expansion",
      excerpt: "We are expanding our open access program to include more journals and research areas.",
      date: "05-Jul-2025",
      category: "Publishing News"
    },
    {
      id: 5,
      title: "Research Grant Opportunities",
      excerpt: "New funding opportunities available for researchers in developing countries through our partnership program.",
      date: "03-Jul-2025",
      category: "Research Grants"
    }
  ];

  const categories = ["all", "Publishing News", "Scientific Discoveries", "Academic Events", "Research Grants"];

  const filteredNews = selectedFilter === "all" 
    ? allNews 
    : allNews.filter(item => item.category === selectedFilter);

  // Auto-slider functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(1, filteredNews.length - 2));
    }, 4000);

    return () => clearInterval(timer);
  }, [filteredNews.length]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, filteredNews.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, filteredNews.length - 2)) % Math.max(1, filteredNews.length - 2));
  };

  const visibleNews = filteredNews.slice(currentSlide, currentSlide + 3);

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-800 mb-4 lg:mb-0"
          >
            Latest News
          </motion.h2>
          
          <div className="flex items-center gap-4">
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All News" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={filteredNews.length <= 3}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={filteredNews.length <= 3}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <NewsSkeletons />
        ) : (
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleNews.map((news, index) => (
                  <NewsCard key={news.id} news={news} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

const NewsCard = ({ news, index }: { news: NewsItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {news.category}
          </Badge>
          <div className="flex items-center text-sm text-slate-500">
            <Calendar className="h-4 w-4 mr-1" />
            {news.date}
          </div>
        </div>
        <h3 className="font-semibold text-slate-800 line-clamp-2">
          {news.title}
        </h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
          Learn more
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const NewsSkeletons = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <Card key={i} className="h-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          <Skeleton className="h-6 w-20" />
        </CardContent>
      </Card>
    ))}
  </div>
);
