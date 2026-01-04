import { useState } from 'react';
import { X, Check, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MythFact {
  id: number;
  myth: string;
  fact: string;
  source: string;
  sourceUrl: string;
}

const MythFactSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const mythFacts: MythFact[] = [
    {
      id: 1,
      myth: "ONOE will weaken regional parties and state politics",
      fact: "Research shows that voters can distinguish between national and state issues. Simultaneous elections have been conducted successfully in India until 1967 without diminishing regional representation.",
      source: "Law Commission of India, Report No. 170",
      sourceUrl: "#",
    },
    {
      id: 2,
      myth: "It's unconstitutional to hold simultaneous elections",
      fact: "Constitutional experts confirm that simultaneous elections are feasible with appropriate amendments. The Constitution originally envisioned synchronized terms for Lok Sabha and State Assemblies.",
      source: "Constitutional Experts Committee Report",
      sourceUrl: "#",
    },
    {
      id: 3,
      myth: "ONOE will reduce government accountability",
      fact: "Accountability mechanisms like no-confidence motions, judicial review, and media scrutiny remain intact. Fixed terms can enhance policy planning and reduce populist short-term decisions.",
      source: "NITI Aayog Analysis",
      sourceUrl: "#",
    },
    {
      id: 4,
      myth: "The cost savings are exaggerated",
      fact: "Studies estimate potential savings of ₹4,500 crore per election cycle through resource optimization, reduced security deployment, and minimized administrative overhead.",
      source: "Election Commission of India Studies",
      sourceUrl: "#",
    },
    {
      id: 5,
      myth: "Voters will be confused voting for multiple elections",
      fact: "Voters have successfully voted in simultaneous elections in India (pre-1967) and continue to do so in other democracies. Clear ballot designs and voter education can address any concerns.",
      source: "International IDEA Electoral Studies",
      sourceUrl: "#",
    },
  ];

  return (
    <section id="myths" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-4">
            Fact Check
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Myth vs Fact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Separating misinformation from verified facts. Every claim is 
            backed by credible sources and presented neutrally.
          </p>
        </div>

        {/* Myth-Fact Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {mythFacts.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-card"
            >
              {/* Card Header */}
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full p-6 text-left flex items-start gap-4"
              >
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  {/* Myth */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-destructive uppercase tracking-wide">
                        Myth
                      </span>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {item.myth}
                      </p>
                    </div>
                  </div>

                  {/* Fact Preview */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-success uppercase tracking-wide">
                        Fact
                      </span>
                      <p className={`text-sm text-muted-foreground mt-1 ${expandedId !== item.id ? 'line-clamp-2' : ''}`}>
                        {item.fact}
                      </p>
                    </div>
                  </div>
                </div>

                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 mt-1 ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Expanded Content */}
              {expandedId === item.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Source:</span>
                      <a 
                        href={item.sourceUrl}
                        className="text-trust hover:underline flex items-center gap-1"
                      >
                        {item.source}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="civic" size="lg">
            Submit a Claim for Verification
          </Button>
        </div>

        {/* Trust Note */}
        <div className="max-w-2xl mx-auto mt-8 p-4 rounded-lg bg-trust/5 border border-trust/20 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-trust">Our Commitment:</strong> All facts are verified 
            through multiple credible sources including government reports, academic research, 
            and non-partisan organizations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MythFactSection;
