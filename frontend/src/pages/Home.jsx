import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Target,
  Shield,
  TrendingUp,
  Award,
  Search,
  Building2,
  Laptop,
  Truck,
  HeartPulse,
  Wrench,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const categories = [
    { icon: Laptop, name: "Technology", count: "1,234 jobs" },
    { icon: HeartPulse, name: "Healthcare", count: "856 jobs" },
    { icon: Building2, name: "Business", count: "2,103 jobs" },
    { icon: Wrench, name: "Engineering", count: "645 jobs" },
    { icon: GraduationCap, name: "Education", count: "412 jobs" },
    { icon: Truck, name: "Logistics", count: "789 jobs" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Verified Employers",
      description: "All employers are thoroughly vetted to ensure legitimacy and fair practices.",
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "Our AI-powered system connects you with jobs that match your skills and preferences.",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join thousands of professionals finding meaningful work and building their careers.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access resources, training, and opportunities to advance your professional journey.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
              <Award className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Supporting UN SDG 8: Decent Work and Economic Growth</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl">
              Find Your Next Opportunity
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Connect with verified employers and discover meaningful work opportunities that align with your skills and aspirations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/jobs">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button size="lg" variant="outline" className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary-foreground/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-primary">10,000+</h3>
              <p className="text-sm text-muted-foreground">Active Jobs</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-primary">5,000+</h3>
              <p className="text-sm text-muted-foreground">Verified Employers</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-primary">50,000+</h3>
              <p className="text-sm text-muted-foreground">Job Seekers</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-primary">95%</h3>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Explore Job Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Find opportunities across various industries
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                      <category.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Ajirio?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to creating fair, transparent, and accessible work opportunities
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none bg-card shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-none bg-gradient-primary shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90">
                Join thousands of job seekers finding meaningful work through Ajirio
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link to="/sign-up">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/jobs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto"
                  >
                    Explore Jobs
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
