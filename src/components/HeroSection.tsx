import { ArrowRight, CheckCircle2, BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-success/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-trust/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-8 animate-fade-in-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Neutral • Non-Partisan • Fact-Based
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
            Empowering Voters with{' '}
            <span className="relative">
              Facts
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="url(#saffron-gradient)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="saffron-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="hsl(32, 85%, 55%)" />
                    <stop offset="100%" stopColor="hsl(28, 90%, 60%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            , Not Opinions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 stagger-2">
            Understanding One Nation One Election through verified information, 
            transparent AI, and citizen-first education. Your trusted source for 
            democratic awareness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0 stagger-3">
            <Button variant="accent" size="xl" className="group">
              Learn About ONOE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Search className="w-5 h-5" />
              Myth vs Fact
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in-up opacity-0 stagger-4">
            {[
              { icon: CheckCircle2, text: 'Verified Sources Only' },
              { icon: BookOpen, text: 'Educational Content' },
              { icon: Search, text: 'Fact-Checked Information' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
              >
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground/80">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 stagger-5">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-primary-foreground/60 uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
