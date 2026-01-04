import { Cloud, Globe, Zap, BarChart3, Server, RefreshCw } from 'lucide-react';

const ScalabilitySection = () => {
  const features = [
    {
      icon: Globe,
      title: 'National Coverage',
      value: '900M+',
      label: 'Voters Served',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      value: '<100ms',
      label: 'Response Time',
    },
    {
      icon: BarChart3,
      title: 'High Availability',
      value: '99.99%',
      label: 'Uptime SLA',
    },
    {
      icon: Server,
      title: 'Auto-scaling',
      value: '∞',
      label: 'Capacity',
    },
  ];

  return (
    <section className="py-20 md:py-32 gradient-hero overflow-hidden">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-semibold mb-4">
            Built to Scale
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            National-Ready Infrastructure
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Designed to handle nationwide traffic during peak election periods, 
            ensuring every citizen can access accurate information when they need it most.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 text-center hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {feature.value}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Visual */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <h3 className="font-display text-xl font-semibold text-primary-foreground text-center mb-8">
              Cloud-Native Architecture
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Edge */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary-foreground mb-2">Edge Network</h4>
                <p className="text-sm text-primary-foreground/70">
                  Content delivered from servers closest to users across India
                </p>
              </div>

              {/* Processing */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-trust/20 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-trust" />
                </div>
                <h4 className="font-semibold text-primary-foreground mb-2">Auto-Scaling</h4>
                <p className="text-sm text-primary-foreground/70">
                  Automatic resource allocation based on real-time traffic demands
                </p>
              </div>

              {/* Cloud */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-semibold text-primary-foreground mb-2">Redundancy</h4>
                <p className="text-sm text-primary-foreground/70">
                  Multi-region deployment ensures zero downtime during elections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalabilitySection;
