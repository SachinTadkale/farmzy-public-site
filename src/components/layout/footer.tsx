import Container from "../layout/container";
import Link from "next/link";

const FOOTER_LINKS = {
  Product: ["Marketplace", "Logistics", "AI Assistant", "Credit Profiles"],
  Company: ["About Us", "Sustainability", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Government Schemes", "Agri Blog"],
};

export default function Footer() {
  return (
    <footer className="py-12 sm:py-20 bg-background border-t border-white/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6 text-center lg:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-text-primary block">
              Farm<span className="text-primary">Zy</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-xs mx-auto lg:mx-0">
              Empowering the agricultural ecosystem through technology, transparency, and direct trade. 
              Built for India, scaling for the world.
            </p>
          </div>
          
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="space-y-4 sm:space-y-6 text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-text-primary">{title}</h4>
              <ul className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-text-primary">Legal</h4>
            <ul className="space-y-3 sm:space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary gap-4 text-center sm:text-left">
          <p>© 2026 FarmZy Agriculture Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
             <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
             <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
             <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
