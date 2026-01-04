import { Vote, Calendar, Users, Building2, Clock, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Synchronized Elections',
      description: 'Holding Lok Sabha and State Assembly elections together on a single date or within a specified timeframe.',
    },
    {
      icon: Users,
      title: 'Reduced Voter Fatigue',
      description: 'Citizens vote once for both national and state representatives, simplifying the democratic process.',
    },
    {
      icon: Building2,
      title: 'Governance Continuity',
      description: 'Minimizes disruption to governance caused by the Model Code of Conduct during frequent elections.',
    },
    {
      icon: Clock,
      title: 'Cost Efficiency',
      description: 'Significant reduction in election expenditure for both government and political parties.',
    },
    {
      icon: Vote,
      title: 'Higher Participation',
      description: 'Potential to increase voter turnout by reducing election frequency and voter burden.',
    },
    {
      icon: TrendingUp,
      title: 'Policy Focus',
      description: 'Enables governments to focus on governance rather than continuous election preparation.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 civic-pattern">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Understanding ONOE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What is One Nation One Election?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            One Nation One Election is a proposed electoral reform aimed at synchronizing 
            elections to the Lok Sabha and all State Legislative Assemblies, enabling 
            citizens to vote for both on the same day.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-trust to-success hidden md:block" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:text-right md:pr-12 relative">
              <div className="hidden md:block absolute right-0 top-6 w-4 h-4 rounded-full bg-accent shadow-lg transform translate-x-1/2 -translate-y-1/2" />
              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-shadow">
                <span className="text-sm font-semibold text-accent uppercase tracking-wide">Current System</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">Staggered Elections</h3>
                <p className="text-muted-foreground text-sm">
                  Currently, elections to the Lok Sabha and different State Assemblies are held at different times, 
                  leading to a continuous cycle of elections across the country.
                </p>
              </div>
            </div>
            
            <div className="md:col-start-2 md:pl-12 md:mt-32 relative">
              <div className="hidden md:block absolute left-0 top-6 w-4 h-4 rounded-full bg-success shadow-lg transform -translate-x-1/2 -translate-y-1/2" />
              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-shadow">
                <span className="text-sm font-semibold text-success uppercase tracking-wide">Proposed Reform</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">Unified Voting</h3>
                <p className="text-muted-foreground text-sm">
                  Under ONOE, voters would cast their ballots for both national and state 
                  representatives on the same day, streamlining the electoral process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-trust flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-trust-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            This information is presented for educational purposes only and does not represent 
            any political stance or endorsement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
