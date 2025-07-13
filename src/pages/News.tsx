
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowRight, Filter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  const newsCategories = [
    { value: "all", label: "All News" },
    { value: "research", label: "Research Updates" },
    { value: "discoveries", label: "Scientific Discoveries" },
    { value: "events", label: "Academic Events" },
    { value: "publishing", label: "Publishing News" },
    { value: "updates", label: "Research Updates" },
    { value: "grants", label: "Research Grants" }
  ];

  const allNewsItems = [
    {
      id: 1,
      title: "New Research Breakthrough in Quantum Computing",
      excerpt: "Scientists at leading universities have made significant progress in quantum error correction, bringing us closer to practical quantum computers.",
      date: "12-iyul, 2025",
      category: "discoveries",
      categoryLabel: "Scientific Discoveries",
      image: "/placeholder-research.jpg"
    },
    {
      id: 2,
      title: "International Conference on Climate Change Research",
      excerpt: "Join researchers from around the world in discussing the latest findings on climate change impacts and mitigation strategies.",
      date: "10-iyul, 2025",
      category: "events",
      categoryLabel: "Academic Events",
      image: "/placeholder-conference.jpg"
    },
    {
      id: 3,
      title: "New Submission Guidelines for 2025",
      excerpt: "We've updated our manuscript submission guidelines to improve the review process and enhance publication quality.",
      date: "08-iyul, 2025",
      category: "publishing",
      categoryLabel: "Publishing News",
      image: "/placeholder-guidelines.jpg"
    },
    {
      id: 4,
      title: "Grant Opportunities for Environmental Research",
      excerpt: "Several funding opportunities are now available for researchers focusing on environmental sustainability and conservation.",
      date: "05-iyul, 2025",
      category: "grants",
      categoryLabel: "Research Grants",
      image: "/placeholder-grants.jpg"
    },
    {
      id: 5,
      title: "Machine Learning Applications in Medicine",
      excerpt: "Recent studies show promising results in using AI and machine learning for early disease detection and treatment planning.",
      date: "03-iyul, 2025",
      category: "research",
      categoryLabel: "Research Updates",
      image: "/placeholder-ai.jpg"
    },
    {
      id: 6,
      title: "Open Access Initiative Expansion",
      excerpt: "We're expanding our open access program to make more research freely available to the global scientific community.",
      date: "01-iyul, 2025",
      category: "publishing",
      categoryLabel: "Publishing News",
      image: "/placeholder-open-access.jpg"
    },
    // Add more news items for pagination
    {
      id: 7,
      title: "Artificial Intelligence in Healthcare Research",
      excerpt: "Exploring the latest developments in AI applications for medical diagnostics and treatment optimization.",
      date: "28-iyun, 2025",
      category: "research",
      categoryLabel: "Research Updates",
      image: "/placeholder-ai-health.jpg"
    },
    {
      id: 8,
      title: "Sustainable Energy Conference 2025",
      excerpt: "International conference bringing together experts in renewable energy and sustainable technologies.",
      date: "25-iyun, 2025",
      category: "events",
      categoryLabel: "Academic Events",
      image: "/placeholder-energy.jpg"
    },
    {
      id: 9,
      title: "New Partnership with European Research Council",
      excerpt: "SR Publishing House announces strategic partnership to enhance global research collaboration.",
      date: "22-iyun, 2025",
      category: "publishing",
      categoryLabel: "Publishing News",
      image: "/placeholder-partnership.jpg"
    }
  ];

  const filteredNews = allNewsItems.filter(item => 
    selectedFilter === "all" || item.category === selectedFilter
  );

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleFilterChange = (value: string) => {
    setIsLoading(true);
    setSelectedFilter(value);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 800);
  };

  const handleLearnMore = (newsId: number, title: string) => {
    toast({
      title: "Opening article",
      description: `Loading details for: ${title}`,
    });
    console.log(`Learn more clicked for news ID: ${newsId}`);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsLoading(false);
      toast({
        title: "More articles loaded",
        description: "Additional articles have been loaded successfully.",
      });
    }, 1000);
  };

  const NewsSkeleton = () => (
    <Card className="h-full">
      <CardHeader>
        <Skeleton className="h-48 w-full rounded-lg mb-4" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-4" />
        <Skeleton className="h-10 w-32" />
      </CardContent>
    </Card>
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
            News
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in scientific research and publishing
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex items-center gap-4">
            <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {newsCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          <Badge variant="secondary" className="text-sm">
            {filteredNews.length} articles found
          </Badge>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NewsSkeleton />
              </motion.div>
            ))
          ) : (
            paginatedNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-blue-600 font-medium">{item.date}</p>
                      </div>
                    </div>
                    <Badge className="w-fit mb-2" variant="secondary">
                      {item.categoryLabel}
                    </Badge>
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="group-hover:bg-blue-50"
                      onClick={() => handleLearnMore(item.id, item.title)}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Load More Section */}
        {!isLoading && paginatedNews.length > 0 && currentPage < totalPages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" onClick={handleLoadMore}>
              Load More Articles
            </Button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredNews.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 text-lg mb-4">No articles found for the selected category</p>
            <Button 
              onClick={() => handleFilterChange("all")}
              variant="outline"
            >
              Show All Articles
            </Button>
          </motion.div>
        )}
      </div>
  );
};

export default News;
