import { Shield, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const links = {
    resources: [
      { label: 'About ONOE', href: '#about' },
      { label: 'Myth vs Fact', href: '#myths' },
      { label: 'AI Transparency', href: '#transparency' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
    legal: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Data Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
    connect: [
      { label: 'Submit Feedback', href: '#' },
      { label: 'Report Misinformation', href: '#' },
      { label: 'Media Inquiries', href: '#' },
      { label: 'Partnerships', href: '#' },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-lg font-semibold">
                  VoterAware
                </span>
                <span className="block text-xs text-primary-foreground/70 -mt-0.5">
                  One Nation One Election
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              A citizen-first platform dedicated to providing neutral, 
              fact-based education about electoral reforms in India.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary-foreground/50" />
              <a href="mailto:info@voteraware.in" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                info@voteraware.in
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {links.connect.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container px-4 py-6">
          <div className="bg-primary-foreground/5 rounded-lg p-4 mb-6">
            <p className="text-xs text-primary-foreground/70 text-center leading-relaxed">
              <strong className="text-primary-foreground">Disclaimer:</strong> This platform 
              provides educational content about One Nation One Election for public awareness. 
              We maintain strict political neutrality and do not endorse any political party, 
              candidate, or political viewpoint. All information is sourced from verified, 
              non-partisan sources.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
            <p>© 2024 VoterAware. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Built with transparency</span>
              <span>•</span>
              <span>Privacy-first design</span>
              <span>•</span>
              <span>Democratically neutral</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
