
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  icon: string;
}

const ToolCard = ({ name, description, category, icon }: ToolCardProps) => {
  return (
    <Card className="card-hover overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-2">
          <div className="mr-3 bg-gray-100 p-2 rounded-md">
            <img src={icon} alt={name} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-xs text-gray-500">{category}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
