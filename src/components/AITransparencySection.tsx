import { Brain, Eye, Shield, Database, CheckCircle, Sparkles } from 'lucide-react';

const AITransparencySection = () => {
  const transparencyFeatures = [
    {
      icon: Database,
      title: 'Verified Data Sources',
      description: 'Our AI only processes information from government publications, academic research, and verified news outlets.',
      items: ['Election Commission Reports', 'Parliamentary Proceedings', 'Peer-reviewed Research'],
    },
    {
      icon: Eye,
      title: 'Explainable AI',
      description: 'Every AI-generated insight includes reasoning and source citations, so you understand how conclusions are reached.',
      items: ['Reasoning Transparency', 'Source Attribution', 'Confidence Scores'],
    },
    {
      icon: Shield,
      title: 'Bias Detection',
      description: 'Multi-layer checks ensure content remains neutral, factual, and free from political or ideological bias.',
      items: ['Sentiment Analysis', 'Neutrality Scoring', 'Human Review Layer'],
    },
  ];

  const workflowSteps = [
    { step: 1, title: 'Content Ingestion', description: 'Information collected from verified sources' },
    { step: 2, title: 'AI Analysis', description: 'Natural language processing for fact extraction' },
    { step: 3, title: 'Bias Check', description: 'Automated neutrality and accuracy verification' },
    { step: 4, title: 'Human Review', description: 'Expert validation before publication' },
    { step: 5, title: 'Publication', description: 'Transparent display with full source attribution' },
  ];

  return (
    <section id="transparency" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust/10 text-trust text-sm font-semibold mb-4">
            AI Transparency
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explainable & Neutral AI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our AI systems are designed with transparency at their core. We believe citizens 
            deserve to understand how technology helps combat misinformation.
          </p>
        </div>

        {/* AI Brain Visual */}
        <div className="relative max-w-md mx-auto mb-20">
          <div className="aspect-square rounded-full bg-gradient-to-br from-trust/20 to-primary/20 flex items-center justify-center animate-pulse-glow">
            <div className="w-3/4 h-3/4 rounded-full bg-card shadow-elevated flex items-center justify-center">
              <Brain className="w-20 h-20 text-trust" />
            </div>
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute inset-0">
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateX(140px) rotate(-${deg}deg) translate(-50%, -50%)`,
                }}
              >
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {transparencyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl gradient-trust flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-trust-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Verification Workflow */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-10">
            Our Verification Workflow
          </h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-trust via-accent to-success hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-12 h-12 rounded-full bg-card shadow-card border-2 border-trust flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="font-bold text-trust">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ethics Note */}
        <div className="max-w-3xl mx-auto mt-16 p-6 rounded-xl bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                Our AI Ethics Commitment
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are committed to using AI responsibly. Our systems are designed to educate, 
                not manipulate. We never use AI for targeted political messaging, persuasion, 
                or any form of voter manipulation. All AI decisions are auditable and 
                explainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransparencySection;
