import { useUser } from "@clerk/clerk-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import JobCard from "@/components/JobCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  Bookmark,
  CheckCircle,
  Clock,
  TrendingUp,
  Bell,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useUser();

  // Mock data - Replace with API calls
  const stats = [
    {
      icon: FileText,
      title: "Applications Sent",
      value: "12",
      description: "3 this month",
      trend: { value: "+2 from last month", isPositive: true },
    },
    {
      icon: Calendar,
      title: "Interviews",
      value: "5",
      description: "2 upcoming",
      trend: { value: "+1 from last month", isPositive: true },
    },
    {
      icon: Bookmark,
      title: "Saved Jobs",
      value: "8",
      description: "Ready to apply",
    },
    {
      icon: CheckCircle,
      title: "Offers",
      value: "2",
      description: "Awaiting response",
      trend: { value: "New!", isPositive: true },
    },
  ];

  const recentApplications = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc",
      appliedDate: "2 days ago",
      status: "Under Review",
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      company: "Growth Marketing Co",
      appliedDate: "5 days ago",
      status: "Interview Scheduled",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "FinTech Kenya",
      appliedDate: "1 week ago",
      status: "Under Review",
    },
  ];

  const recommendedJobs = [
    {
      id: 7,
      title: "React Developer",
      company: "Startup Hub",
      location: "Remote",
      type: "Full-time",
      salary: "KES 120,000 - 160,000/month",
      postedDate: "1 day ago",
      description: "Join our team and build cutting-edge web applications using React and modern tools.",
      skills: ["React", "JavaScript", "REST APIs"],
    },
  ];

  const notifications = [
    {
      id: 1,
      message: "Your application for Senior Frontend Developer was viewed",
      time: "2 hours ago",
      type: "info",
    },
    {
      id: 2,
      message: "Interview scheduled for Digital Marketing Specialist",
      time: "1 day ago",
      type: "success",
    },
    {
      id: 3,
      message: "New job match: Backend Engineer at CloudTech",
      time: "2 days ago",
      type: "info",
    },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "Interview Scheduled":
        return "default";
      case "Under Review":
        return "secondary";
      case "Accepted":
        return "success";
      default:
        return "outline";
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="border-b border-border bg-gradient-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20 text-2xl font-bold text-primary-foreground">
              {user?.firstName?.[0] || user?.emailAddresses?.[0]?.emailAddress?.[0] || "U"}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground">
                Welcome back, {user?.firstName || "there"}!
              </h1>
              <p className="text-primary-foreground/90">
                Here's what's happening with your job search
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Recent Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div
                      key={application.id}
                      className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {application.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {application.company}
                        </p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          Applied {application.appliedDate}
                        </div>
                      </div>
                      <Badge variant={getStatusVariant(application.status)}>
                        {application.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Recommended Jobs */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Recommended for You
                </h2>
              </div>
              <div className="grid gap-6">
                {recommendedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Completeness */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Profile Completeness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-foreground">75%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-3/4 bg-gradient-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span>Basic information complete</span>
                    </div>
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span>Resume uploaded</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Add work experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Add skills & certifications</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Bell className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <p className="text-sm text-foreground">{notification.message}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;