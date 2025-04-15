import Image from 'next/image'

const portfolioItems = [
  {
    image: '/api/placeholder/400/400',
    title: 'Social Media Campaign',
    description: 'Brand awareness campaign for a lifestyle brand',
  },
  {
    image: '/api/placeholder/400/400',
    title: 'Brand Identity',
    description: 'Complete rebrand for a tech startup',
  },
  {
    image: '/api/placeholder/400/400',
    title: 'Content Strategy',
    description: '12-month content plan for an e-commerce business',
  },
  {
    image: '/api/placeholder/400/400',
    title: 'Lead Generation',
    description: 'Campaign that increased leads by 215%',
  },
  {
    image: '/api/placeholder/400/400',
    title: 'Meta Ad Campaign',
    description: 'High-converting ad set for a service business',
  },
  {
    image: '/api/placeholder/400/400',
    title: 'Visual Content',
    description: 'Custom graphics for a product launch',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-secondary/5 rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-64 h-64 bg-primary/5 rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent projects and see how we've helped brands elevate their digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="card-3d card-shine rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block secondary-button">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  )
} 