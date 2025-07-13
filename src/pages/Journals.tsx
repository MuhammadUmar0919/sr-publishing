
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ExternalLink, BookOpen, Calendar, Menu, X, Globe, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const journals = [
  {
    id: 1,
    title: "SR Journal of Computer Science & Technology",
    description: "Premier research publication in computer science, artificial intelligence, and emerging technologies with peer-reviewed articles from global researchers.",
    impact: 4.2,
    issn: "2456-1038",
    frequency: "Monthly",
    category: "Computer Science",
    openAccess: true,
    url: "https://srjournal-cs.com",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    subscribers: "12,500+",
    bgGradient: "from-blue-600 to-indigo-700"
  },
  {
    id: 2,
    title: "SR Medical Sciences & Clinical Research",
    description: "Leading publication in medical sciences, clinical studies, healthcare innovations, and evidence-based medical research worldwide.",
    impact: 3.8,
    issn: "2455-4928",
    frequency: "Bi-monthly",
    category: "Medical Sciences",
    openAccess: true,
    url: "https://srjournal-med.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    subscribers: "8,900+",
    bgGradient: "from-emerald-600 to-teal-700"
  },
  {
    id: 3,
    title: "SR International Journal of Engineering",
    description: "Comprehensive engineering research covering mechanical, electrical, civil, and cutting-edge engineering technologies and innovations.",
    impact: 3.5,
    issn: "2394-5869",
    frequency: "Quarterly",
    category: "Engineering",
    openAccess: false,
    url: "https://srjournal-eng.com",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    subscribers: "6,700+",
    bgGradient: "from-orange-600 to-red-600"
  },
  {
    id: 4,
    title: "SR Journal of Social Sciences Research",
    description: "Interdisciplinary social sciences research including psychology, sociology, anthropology, and behavioral studies from international scholars.",
    impact: 2.9,
    issn: "2423-8686",
    frequency: "Monthly",
    category: "Social Sciences",
    openAccess: true,
    url: "https://srjournal-social.com",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    subscribers: "4,200+",
    bgGradient: "from-purple-600 to-violet-700"
  },
  {
    id: 5,
    title: "SR Business Management & Economics",
    description: "Business research, management strategies, economic analysis, and organizational behavior studies for modern enterprises and markets.",
    impact: 3.1,
    issn: "2456-2165",
    frequency: "Bi-monthly",
    category: "Business",
    openAccess: false,
    url: "https://srjournal-business.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    subscribers: "5,800+",
    bgGradient: "from-indigo-600 to-blue-700"
  },
  {
    id: 6,
    title: "SR Environmental Science & Sustainability",
    description: "Environmental research, climate change studies, sustainability solutions, and green technology innovations for a better future.",
    impact: 4.0,
    issn: "2578-6490",
    frequency: "Monthly",
    category: "Environmental Science",
    openAccess: true,
    url: "https://srjournal-env.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    subscribers: "9,100+",
    bgGradient: "from-green-600 to-emerald-700"
  }
];

const categories = [
  "Computer Science",
  "Medical Sciences", 
  "Engineering",
  "Social Sciences",
  "Business",
  "Environmental Science"
];

const frequencies = ["Monthly", "Bi-monthly", "Quarterly"];

const FilterContent = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategories, 
  selectedFrequencies, 
  openAccessOnly, 
  setOpenAccessOnly,
  handleCategoryChange,
  handleFrequencyChange 
}) => (
  <div className="space-y-6">
    <div>
      <Label htmlFor="search">Search Journals</Label>
      <div className="relative mt-2">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
        <Input
          id="search"
          placeholder="Search by title or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>

    <Separator />

    <div>
      <Label className="text-sm font-medium mb-3 block">Categories</Label>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`category-${category}`}
              checked={selectedCategories.includes(category)}
              onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
            />
            <Label
              htmlFor={`category-${category}`}
              className="text-sm font-normal cursor-pointer"
            >
              {category}
            </Label>
          </div>
        ))}
      </div>
    </div>

    <Separator />

    <div>
      <Label className="text-sm font-medium mb-3 block">Publication Frequency</Label>
      <div className="space-y-3">
        {frequencies.map((frequency) => (
          <div key={frequency} className="flex items-center space-x-2">
            <Checkbox
              id={`frequency-${frequency}`}
              checked={selectedFrequencies.includes(frequency)}
              onCheckedChange={(checked) => handleFrequencyChange(frequency, checked as boolean)}
            />
            <Label
              htmlFor={`frequency-${frequency}`}
              className="text-sm font-normal cursor-pointer"
            >
              {frequency}
            </Label>
          </div>
        ))}
      </div>
    </div>

    <Separator />

    <div className="flex items-center space-x-2">
      <Checkbox
        id="open-access"
        checked={openAccessOnly}
        onCheckedChange={(checked) => setOpenAccessOnly(checked as boolean)}
      />
      <Label
        htmlFor="open-access"
        className="text-sm font-normal cursor-pointer"
      >
        Open Access Only
      </Label>
    </div>
  </div>
);

const Journals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFrequencies, setSelectedFrequencies] = useState<string[]>([]);
  const [openAccessOnly, setOpenAccessOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleFrequencyChange = (frequency: string, checked: boolean) => {
    if (checked) {
      setSelectedFrequencies([...selectedFrequencies, frequency]);
    } else {
      setSelectedFrequencies(selectedFrequencies.filter(f => f !== frequency));
    }
  };

  const filteredJournals = journals.filter(journal => {
    const matchesSearch = journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         journal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(journal.category);
    const matchesFrequency = selectedFrequencies.length === 0 || selectedFrequencies.includes(journal.frequency);
    const matchesAccess = !openAccessOnly || journal.openAccess;
    
    return matchesSearch && matchesCategory && matchesFrequency && matchesAccess;
  });

  const handleVisitWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                SR
              </div>
              <span className="ml-3 text-2xl font-bold text-slate-800">Scientific Research Publishing</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Premier Academic Journals
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our collection of peer-reviewed academic journals across various disciplines, 
              connecting researchers worldwide with cutting-edge scientific publications.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FilterContent
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategories={selectedCategories}
                  selectedFrequencies={selectedFrequencies}
                  openAccessOnly={openAccessOnly}
                  setOpenAccessOnly={setOpenAccessOnly}
                  handleCategoryChange={handleCategoryChange}
                  handleFrequencyChange={handleFrequencyChange}
                />
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-3">
            {/* Mobile Filter Button and Results Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mb-6"
            >
              <p className="text-slate-600">
                Showing {filteredJournals.length} of {journals.length} journals
              </p>
              
              {/* Mobile Filter Button */}
              <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      Filters
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      selectedCategories={selectedCategories}
                      selectedFrequencies={selectedFrequencies}
                      openAccessOnly={openAccessOnly}
                      setOpenAccessOnly={setOpenAccessOnly}
                      handleCategoryChange={handleCategoryChange}
                      handleFrequencyChange={handleFrequencyChange}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <Skeleton className="h-48 w-full rounded-t-lg" />
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredJournals.map((journal, index) => (
                  <motion.div
                    key={journal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
                      {/* Journal Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={journal.image} 
                          alt={journal.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${journal.bgGradient} opacity-80`}></div>
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                          <Badge 
                            variant={journal.openAccess ? "default" : "secondary"}
                            className="bg-white/90 text-slate-800 font-medium"
                          >
                            {journal.openAccess ? "🌐 Open Access" : "🔒 Subscription"}
                          </Badge>
                          <Badge 
                            variant="outline"
                            className="bg-white/90 text-slate-800 border-slate-200 font-medium"
                          >
                            <Award className="h-3 w-3 mr-1" />
                            Impact: {journal.impact}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-bold text-lg leading-tight mb-1">
                            SR Publishing
                          </h3>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{journal.subscribers}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="h-4 w-4" />
                              <span>Global</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg leading-tight text-slate-800">
                          {journal.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed">
                          {journal.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-blue-600" />
                              <span>ISSN: {journal.issn}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-green-600" />
                              <span>{journal.frequency}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs bg-slate-50">
                              {journal.category}
                            </Badge>
                          </div>

                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium" 
                            onClick={() => handleVisitWebsite(journal.url)}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Journal Website
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {filteredJournals.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <BookOpen className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-600 mb-2">
                    No journals found
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your filters or search terms to find relevant journals
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
                SR
              </div>
              <span className="ml-3 text-xl font-bold">Scientific Research Publishing</span>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Leading the future of academic publishing with innovative research journals, 
              connecting scholars worldwide and advancing scientific knowledge.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Journals;