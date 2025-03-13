
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Server, Code, Terminal, Cloud, Network, Wrench, Cog, MonitorSmartphone, Sliders } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  icon: string;
  iconType?: string;
}

const ToolCard = ({ name, description, category, icon, iconType = "image" }: ToolCardProps) => {
  // Map of tool names to Lucide icons
  const getIconComponent = (toolName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "Kubernetes": <Cloud className="w-10 h-10 text-blue-500" />,
      "Terraform": <Wrench className="w-10 h-10 text-purple-600" />,
      "Docker": <Database className="w-10 h-10 text-blue-600" />,
      "Jenkins": <Cog className="w-10 h-10 text-red-600" />,
      "Prometheus": <Sliders className="w-10 h-10 text-orange-500" />,
      "Grafana": <MonitorSmartphone className="w-10 h-10 text-orange-600" />,
      "AWS": <Cloud className="w-10 h-10 text-orange-600" />,
      "GitHub Actions": <Code className="w-10 h-10 text-gray-800" />,
      // Default fallback
      "default": <Server className="w-10 h-10 text-gray-600" />
    };
    
    return iconMap[toolName] || iconMap["default"];
  };

  return (
    <Card className="card-hover overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-2">
          <div className="mr-3 bg-gray-100 p-2 rounded-md">
            {iconType === "lucide" ? (
              getIconComponent(name)
            ) : (
              <img src={icon} alt={name} className="w-10 h-10 object-contain" />
            )}
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
