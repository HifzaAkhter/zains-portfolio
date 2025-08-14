import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
           A showcase of the amazing organizations I’ve collaborated with over the years.
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
         
        </p>
      </div>

      <div className="w-full flex justify-center px-16">
        <img
          src="/lovable-uploads/clients.png" // Your image path
          alt="Companies I have worked with"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Projects;
