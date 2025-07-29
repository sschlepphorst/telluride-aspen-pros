import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="tree-shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader className="text-center pb-3 p-4 sm:p-6">
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2 sm:mb-3" />
        <CardTitle className="text-sm sm:text-base font-semibold leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 px-4 pb-4 sm:px-6 sm:pb-6">
        <CardDescription className="text-center text-xs sm:text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};