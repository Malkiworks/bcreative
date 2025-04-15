import Link from 'next/link'

const footerLinks = {
  services: [
    { name: 'Brand Strategy', href: '#services' },
    { name: 'Social Media Management', href: '#services' },
    { name: 'Content Creation', href: '#services' },
    { name: 'Graphic Design', href: '#services' },
    { name: 'Lead Management', href: '#services' },
    { name: 'Meta Ads', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-2xl font-bold text-primary mb-5">
              B<span className="text-white">Creative</span>
            </div>
            <p className="text-gray-400 mb-5">
              Elevating brands through strategic digital marketing and creative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="social-links" aria-label="Facebook">FB</Link>
              <Link href="#" className="social-links" aria-label="Instagram">IG</Link>
              <Link href="#" className="social-links" aria-label="Twitter">TW</Link>
              <Link href="#" className="social-links" aria-label="LinkedIn">LI</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-5 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 B Creative Media Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 