import Image from 'next/image'

const testimonials = [
  {
    quote: "B Creative transformed our social media presence completely. Their strategic approach and creative content have helped us connect with our audience in ways we never thought possible.",
    name: "Sarah Johnson",
    title: "Marketing Director, Fashion Brand",
    image: "/api/placeholder/150/150"
  },
  {
    quote: "The team at B Creative understands our brand better than we do sometimes! Their attention to detail and commitment to results have made them an invaluable extension of our marketing team.",
    name: "Michael Rodriguez",
    title: "CEO, Tech Startup",
    image: "/api/placeholder/150/150"
  },
  {
    quote: "We've seen a 300% increase in engagement since working with B Creative. Their ability to create content that resonates with our audience is unmatched.",
    name: "Emily Thompson",
    title: "Brand Manager, E-commerce",
    image: "/api/placeholder/150/150"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute -top-20 right-40 text-8xl text-primary opacity-10">"</div>
        <div className="absolute top-1/2 -left-10 text-9xl text-secondary opacity-10">"</div>
        <div className="absolute bottom-20 right-20 text-8xl text-primary opacity-10">"</div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—hear from the brands we've helped grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-3d card-shine bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex-center text-white text-2xl font-serif">
                "
              </div>
              
              <div className="pt-4">
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-primary mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.name}</h4>
                    <p className="text-primary text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 