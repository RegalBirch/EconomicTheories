import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const MarxianEconomicsPage = () => {
  return (
    <section className="py-10 bg-gray-800 text-white min-h-screen flex justify-center items-start">
      <div className="max-w-4xl w-full mx-auto">
         <div className="px-4">
            <RouterLink
              to="/"
              className="inline-block mb-6 text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              ← Back to Overview
            </RouterLink>
        </div>
        <article className="bg-gray-700 p-8 rounded-lg shadow-lg mx-4 sm:mx-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-500">
            Marxian Economics
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/800px-Karl_Marx_001.jpg"
              alt="Karl Marx"
              className="rounded-full shadow-lg w-36 h-36 sm:w-48 sm:h-48 object-cover border-4 border-blue-500"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl italic text-gray-300">
              "The theory of the Communists may be summed up in the single sentence: Abolition of private property."
            </p>
            <span className="block text-sm text-gray-400 mt-2">
              — Karl Marx, The Communist Manifesto
            </span>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                History
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              Marxian Economics originates from the works of Karl Marx and Friedrich Engels in the 19th century, specifically Marx’s The Communist Manifesto (1848) and Das Kapital (1867). This school of thought critiques classical economics, focusing on the role of labor in the development of an economy and the inequalities caused by capitalism. Marxian principles went on to influence early 20th century communist movements.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Characteristics
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-2">
                
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base sm:text-lg">
                <li><strong>Labor Theory of Value: </strong>Marxian economics believes that the value of a commodity is determined by the average number of labor hours necessary to produce it. This theory suggests that labor is the source of all value, and the exploitation of workers happens when they are paid less than the value they produce.</li>
                <li><strong>Surplus Value: </strong>The concept of surplus value refers to the difference between the value produced by labor and the wages paid to laborers. This surplus is allocated to capitalists, leading to wealth accumulation for a select few. As a result, the phenomenon creates clear class divisions that are continually growing as wealth accumulates.
                </li>
                <li><strong>Class Struggle: </strong>Marxian economics emphasizes the conflict between the bourgeoisie (capitalist class) and the proletariat (working class). This struggle is seen as the driving force of historical and economic development, ultimately leading to revolutionary changes due to anger and frustration of the lower class.
                </li>
                <li><strong>Critque of Capitalism: </strong>Marx argued that capitalism is unstable and prone to crises due to overproduction, underconsumption, and the concentration of wealth. He believed these contradictions would eventually lead to the system's self-destruction and the rise of a socialist economy. </li>
                <li><strong>State Intervention: </strong>Unlike classical economists who advocated for free markets, Marx supported state intervention to manage economic decisions and redistribute resources, aiming to eliminate class distinctions and achieve a classless society. </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Example
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              Marxian economics has been applied in various forms, notably in the economic systems of the former Soviet Union, Maoist China, and Cuba. These implementations focused on state ownership of the means of production and centralized economic planning. The results of these countries, however, have led people to become disillusioned of Marixan economics.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MarxianEconomicsPage;