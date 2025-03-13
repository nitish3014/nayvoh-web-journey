
import RevealOnScroll from "@/components/RevealOnScroll";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/constants/tools";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tools = () => {
  // Group tools by category
  const categories = [...new Set(tools.map(tool => tool.category))];
  
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-nayvoh-600 via-nayvoh-700 to-nayvoh-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <RevealOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technology Stack</h1>
              <p className="text-xl text-white/80">
                We leverage industry-leading tools and technologies to deliver robust, scalable solutions.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Tools Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Toolset</span>
              </h2>
              <p className="text-gray-600">
                We use the best tools in the industry to ensure your infrastructure is modern, scalable, and reliable.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="mt-12">
            <RevealOnScroll>
              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="all">All Tools</TabsTrigger>
                    {categories.map(category => (
                      <TabsTrigger key={category} value={category}>
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                      <RevealOnScroll key={tool.id} delay={100 * index}>
                        <ToolCard
                          name={tool.name}
                          description={tool.description}
                          category={tool.category}
                          icon={tool.icon}
                        />
                      </RevealOnScroll>
                    ))}
                  </div>
                </TabsContent>
                
                {categories.map(category => (
                  <TabsContent key={category} value={category}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tools
                        .filter(tool => tool.category === category)
                        .map((tool, index) => (
                          <RevealOnScroll key={tool.id} delay={100 * index}>
                            <ToolCard
                              name={tool.name}
                              description={tool.description}
                              category={tool.category}
                              icon={tool.icon}
                            />
                          </RevealOnScroll>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technical Expertise</h2>
              <p className="text-gray-600">
                We continuously invest in expanding our technical knowledge to provide you with cutting-edge solutions.
              </p>
            </RevealOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Container Orchestration",
                description: "Expert management of containerized applications using Kubernetes, Docker Swarm, and related technologies.",
                items: ["Kubernetes", "Docker", "Helm", "Istio"]
              },
              {
                title: "Infrastructure as Code",
                description: "Automated infrastructure provisioning and management using declarative configuration.",
                items: ["Terraform", "AWS CloudFormation", "Ansible", "Pulumi"]
              },
              {
                title: "Continuous Integration/Delivery",
                description: "Automated testing, building, and deployment pipelines for reliable software delivery.",
                items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "ArgoCD"]
              },
              {
                title: "Cloud Platforms",
                description: "Deep expertise across major cloud providers for optimal multi-cloud and hybrid deployments.",
                items: ["AWS", "Google Cloud", "Microsoft Azure", "Digital Ocean"]
              },
              {
                title: "Monitoring & Observability",
                description: "Comprehensive monitoring, logging, and alerting solutions for complete system visibility.",
                items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
              },
              {
                title: "Security & Compliance",
                description: "Implementing security best practices throughout the infrastructure and CI/CD pipeline.",
                items: ["HashiCorp Vault", "SAST/DAST Tools", "OPA/Gatekeeper", "Compliance as Code"]
              }
            ].map((area, index) => (
              <RevealOnScroll key={index} delay={100 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.items.map((item, i) => (
                      <span key={i} className="bg-nayvoh-100 text-nayvoh-700 text-sm px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Leverage These Tools for Your Business?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how our technical expertise can help you build scalable, secure, and efficient systems.
            </p>
            <Button asChild size="lg" className="bg-white text-nayvoh-700 hover:bg-gray-100">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Tools;
