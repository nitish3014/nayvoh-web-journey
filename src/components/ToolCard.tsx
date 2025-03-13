
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
      "Kubernetes": <img src="/images/tools/kubernetes.svg" alt="Kubernetes" className="w-10 h-10" />,
      "Terraform": <img src="/images/tools/terraform.svg" alt="Terraform" className="w-10 h-10" />,
      "Docker": <img src="/images/tools/docker.svg" alt="Docker" className="w-10 h-10" />,
      "Jenkins": <img src="/images/tools/jenkins.svg" alt="Jenkins" className="w-10 h-10" />,
      "Prometheus": <img src="/images/tools/prometheus.svg" alt="Prometheus" className="w-10 h-10" />,
      "Grafana": <img src="/images/tools/grafana.svg" alt="Grafana" className="w-10 h-10" />,
      "AWS": <img src="/images/tools/aws.svg" alt="AWS" className="w-10 h-10" />,
      "GitHub Actions": <img src="/images/tools/github.svg" alt="GitHub Actions" className="w-10 h-10" />,
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
