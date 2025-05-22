// src/components/EconomicTheories.jsx
import React from 'react';
import TheoryCard from './TheoryCard';

// --- Placeholder Data ---
// Ensure ALL your theories are listed here with correct slugs
const theoriesData = [
  {
    id: 1,
    slug: 'supplyside-economics',
    title: 'Supply Side Economics',
    description: 'Focuses on laissez faire, tax cuts, and the trickle down effect).',
  },
  {
    id: 2,
    slug: 'keynesian-economics',
    title: 'Keynesian Economics',
    description: 'Advocates for government spending and fiscal policy to manage demand and stabilize economies (John Maynard Keynes).',
  },
  {
    id: 3,
    slug: 'monetarism',
    title: 'Monetarism',
    description: 'Emphasizes the role of the money supply in economic stability and inflation control (Milton Friedman).',
  },
  {
    id: 4,
    slug: 'austrian-school',
    title: 'Austrian School',
    description: 'Highlights individual choice, market processes, and subjective value, critical of central planning.',
  },
  {
    id: 5,
    slug: 'marxian-economics',
    title: 'Marxian Economics',
    description: 'Analyzes capitalism through class struggle, surplus value, and the exploitation of labor (Karl Marx).',
  },
  {
    id: 6,
    slug: 'behavioral-economics',
    title: 'Behavioral Economics',
    description: 'Integrates psychological insights into economic models to explain irrational decision making.',
  },
];
// --- End Placeholder Data ---

const EconomicTheories = () => {
  return (
    <section id="theories" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
          Key Economic Theories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {theoriesData.map((theory) => (
            <TheoryCard
              key={theory.id}
              title={theory.title}
              description={theory.description}
              slug={theory.slug} // Pass the slug
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EconomicTheories;