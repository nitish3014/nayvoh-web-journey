
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tools } from "@/constants/tools";
import ToolCard from "@/components/ToolCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Tools | Nayvoh Technologies</title>
        <meta name="description" content="Explore the cutting-edge tools and technologies used by Nayvoh Technologies for cloud infrastructure and DevOps solutions." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-nayvoh-900 to-nayvoh-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">DevOps & Cloud Tools</h1>
              <p className="text-xl text-white/80">
                We leverage industry-leading tools and technologies to deliver robust, scalable, and efficient solutions for your business.
              </p>
            </div>
          </div>
        </section>
        
        {/* Tools Grid Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
                <p className="text-lg text-gray-600">
                  We use these powerful tools to build, deploy, monitor, and manage your infrastructure.
                </p>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <RevealOnScroll key={tool.id} delay={index * 50}>
                  <ToolCard
                    name={tool.name}
                    description={tool.description}
                    category={tool.category}
                    icon={tool.icon}
                    iconType="lucide"
                  />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Infrastructure?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our team of experts is ready to help you implement these tools and transform your development workflow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-nayvoh-600 hover:bg-nayvoh-700 text-white">
                    <Link to="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Tools;
