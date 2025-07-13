
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, FileText, User, BookOpen, Calendar, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const searchData = [
    { type: "journal", title: "Scientific Results in Natural Sciences", description: "Open access journal for natural sciences research", category: "journals" },
    { type: "journal", title: "Scientific Results in Social Sciences", description: "Social sciences research and analysis", category: "journals" },
    { type: "journal", title: "Scientific Results in Medical Sciences", description: "Medical research and health sciences", category: "journals" },
    { type: "article", title: "Advanced Research in Physics", description: "Latest findings in quantum mechanics", category: "articles" },
    { type: "article", title: "Climate Change Impact Studies", description: "Environmental research on global warming", category: "articles" },
    { type: "article", title: "AI in Healthcare Applications", description: "Machine learning for medical diagnostics", category: "articles" },
    { type: "author", title: "Dr. John Smith", description: "Professor of Environmental Science", category: "authors" },
    { type: "author", title: "Dr. Sarah Johnson", description: "Research Director in Physics", category: "authors" },
    { type: "author", title: "Dr. Ahmed Hassan", description: "Medical Research Specialist", category: "authors" },
    { type: "news", title: "New Publication Guidelines", description: "Updated submission requirements for 2024", category: "news" },
    { type: "news", title: "International Research Conference", description: "Global symposium on scientific innovation", category: "news" },
    { type: "news", title: "Open Access Initiative Launch", description: "Expanding free access to research", category: "news" },
  ];

  const filteredResults = searchData.filter(item => {
    const matchesQuery = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || item.category === selectedFilter;
    return matchesQuery && matchesFilter;
  });

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        toast({
          title: "Search completed",
          description: `Found ${filteredResults.length} results for "${searchQuery}"`,
        });
      }, 1000);
    }
  };

  const handleResultClick = (result: any) => {
    toast({
      title: "Opening result",
      description: `Loading ${result.title}...`,
    });
    console.log("Selected result:", result);
    onClose();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "journal": return <BookOpen className="h-4 w-4" />;
      case "article": return <FileText className="h-4 w-4" />;
      case "author": return <User className="h-4 w-4" />;
      case "news": return <Calendar className="h-4 w-4" />;
      default: return <Search className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "journal": return "bg-blue-100 text-blue-700";
      case "article": return "bg-green-100 text-green-700";
      case "author": return "bg-purple-100 text-purple-700";
      case "news": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Clear search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSelectedFilter("all");
      setIsSearching(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search SR Publishing House
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search journals, articles, authors, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} disabled={isSearching}>
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {["all", "journals", "articles", "authors", "news"].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
              >
                <Filter className="h-3 w-3 mr-1" />
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>

          {searchQuery && (
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing {filteredResults.length} results for "{searchQuery}"</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            </div>
          )}

          <div className="max-h-96 overflow-y-auto space-y-3">
            {isSearching ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-muted-foreground">Searching...</p>
              </div>
            ) : (
              <AnimatePresence>
                {filteredResults.length > 0 ? (
                  filteredResults.map((result, index) => (
                    <motion.div
                      key={`${result.type}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-colors"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1">{getIcon(result.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-sm">{result.title}</h4>
                            <Badge className={`text-xs ${getTypeColor(result.type)}`}>
                              {result.type}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{result.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : searchQuery ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <p className="text-muted-foreground mb-2">No results found for "{searchQuery}"</p>
                    <p className="text-sm text-muted-foreground">Try adjusting your search terms or filters</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">Start typing to search our content</p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
