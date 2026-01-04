import { Lock, UserX, FileSearch, Server, ShieldCheck, Eye } from 'lucide-react';

const PrivacySection = () => {
  const privacyCommitments = [
    {
      icon: UserX,
      title: 'No Political Profiling',
      description: 'We never collect, analyze, or store data to determine your political preferences or affiliations.',
    },
    {
      icon: Eye,
      title: 'No Targeted Persuasion',
      description: 'Our platform is designed to inform, not influence. We do not use personalized content to sway opinions.',
    },
    {
      icon: FileSearch,
      title: 'Minimal Data Collection',
      description: 'We collect only essential anonymized data for platform improvement. No personal identification is stored.',
    },
    {
      icon: Lock,
      title: 'End-to-End Security',
      description: 'All data is encrypted in transit and at rest using industry-standard security protocols.',
    },
    {
      icon: Server,
      title: 'Data Sovereignty',
      description: 'All data is processed and stored within India, complying with national data protection regulations.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance First',
      description: 'Fully compliant with IT Act 2000, upcoming DPDP Act, and international privacy standards.',
    },
  ];

  const certifications = [
    { name: 'ISO 27001', label: 'Information Security' },
    { name: 'DPDP Ready', label: 'Data Protection' },
    { name: 'WCAG 2.1', label: 'Accessibility' },
    { name: 'SOC 2', label: 'Security Controls' },
  ];

  return (
    <section id="privacy" className="py-20 md:py-32 civic-pattern">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
            Privacy First
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Privacy, Our Priority
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trust is the foundation of democracy. We've built this platform with 
            privacy-first principles to ensure your data is never misused.
          </p>
        </div>

        {/* Privacy Shield Visual */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative aspect-[4/3] bg-gradient-to-br from-success/10 to-trust/10 rounded-2xl p-8 flex items-center justify-center">
            <div className="absolute inset-4 border-2 border-dashed border-success/30 rounded-xl" />
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-card rounded-2xl shadow-elevated flex items-center justify-center transform rotate-6">
                <Lock className="w-12 h-12 text-success/50" />
              </div>
              <div className="absolute inset-0 bg-card rounded-2xl shadow-elevated flex items-center justify-center transform -rotate-3">
                <Lock className="w-12 h-12 text-success/70" />
              </div>
              <div className="absolute inset-0 bg-card rounded-2xl shadow-elevated flex items-center justify-center">
                <Lock className="w-16 h-16 text-success" />
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Commitments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {privacyCommitments.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-card hover:border-success/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <item.icon className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-semibold text-foreground text-center mb-8">
            Security & Compliance Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 shadow-soft border border-border/50 text-center hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-sm">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="section-divider mb-8" />
          <p className="text-sm text-muted-foreground italic">
            "In a democracy, informed citizens make better decisions. We exist to 
            inform—never to influence, manipulate, or profile. Your trust is sacred, 
            and your privacy is non-negotiable."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
