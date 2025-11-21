import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Clock, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-muted">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>
          </div>
          <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
            {job.type}
          </Badge>
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Posted {job.postedDate}</span>
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {job.skills?.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t border-border bg-muted/30 p-4">
        <div className="flex w-full gap-2">
          <Link to={`/jobs/${job.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Button className="flex-1">
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
