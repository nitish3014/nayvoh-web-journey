
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nayvoh-600/90 via-nayvoh-800/80 to-gray-900"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMS4xMDQgMC0yLjEuNDQtMi44NCAxLjE2bC0zLjAzLTMuMDNjLjMzLS4zMy41My0uNzkuNTMtMS4yOSAwLTEuMS0uOS0yLTItMlM4IDI1Ljc0IDggMjYuODRjMCAuNS4yLjk2LjUzIDEuMjlsLTMuMDMgMy4wM0M0LjggMzAuNCAzLjkgMzAgMi44IDMwYy0xLjU0IDAtMi44IDEuMjYtMi44IDIuOHMxLjI2IDIuOCAyLjggMi44YzEuMS0uMDEgMi0uNDUgMi42Ni0xLjE0TDguOCA0MS43N2MtLjcyLjY2LTEuMTYgMS42MS0xLjE2IDIuNjcgMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNGMwLTEuMDYtLjQ0LTIuMDEtMS4xNi0yLjY3bDMuMzQtMy4zNGMuNjYuNzIgMS42MSAxLjE2IDIuNjYgMS4xNiAxLjA2IDAgMi4wMS0uNDQgMi42Ny0xLjE2bDMuMzMgMy4zM2MtLjcyLjY2LTEuMTYgMS42MS0xLjE2IDIuNjcgMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNGMwLTEuMDYtLjQ0LTIuMDEtMS4xNi0yLjY3bDMuMzMtMy4zM2MuNjYuNzIgMS42MSAxLjE2IDIuNjcgMS4xNiAxLjA2IDAgMi4wMS0uNDQgMi42Ny0xLjE2bDMuMzMgMy4zM2MtLjcyLjY2LTEuMTYgMS42MS0xLjE2IDIuNjcgMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNGMwLTEuMDYtLjQ0LTIuMDEtMS4xNi0yLjY3bDMuMzQtMy4zNGMuNjYuNzIgMS42IDEuMTYgMi42NiAxLjE2IDIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00Yy0xLjA2IDAtMi4wMS40NC0yLjY3IDEuMTZsLTMuMzMtMy4zM2MuNzItLjY2IDEuMTYtMS42MSAxLjE2LTIuNjcgMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDRjMCAxLjA2LjQ0IDIuMDEgMS4xNiAyLjY3bC0zLjMzIDMuMzNDMzYuMDEgMzYuMDEgMzYgMzUgMzYgMzR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
            <RevealOnScroll>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                A Journey Towards Knowledge and Growth
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-xl text-white/80 max-w-2xl mt-6">
                Empowering businesses with cutting-edge DevOps, cloud infrastructure, and microservices solutions for the modern software industry.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="bg-white text-nayvoh-700 hover:bg-gray-100">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
          
          <div className="md:w-5/12">
            <RevealOnScroll className="relative">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
                <div className="relative bg-white p-5 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="col-span-2">
                      <div className="h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full bg-nayvoh-200"></div>
                      <div className="w-6 h-6 rounded-full bg-nayvoh-400"></div>
                      <div className="w-6 h-6 rounded-full bg-nayvoh-600"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500 rounded-lg transform rotate-12 opacity-50"></div>
              <div className="absolute -left-4 -top-4 w-16 h-16 bg-purple-500 rounded-lg transform -rotate-12 opacity-50"></div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
