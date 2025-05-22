import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const MonetarismPage = () => {
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
            Monetarism
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="https://cdn.britannica.com/76/81676-050-E48B74C8/Milton-Friedman.jpg"
              alt="Milton Friedman"
              className="rounded-full shadow-lg w-36 h-36 sm:w-48 sm:h-48 object-cover border-4 border-blue-500"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl italic text-gray-300">
              "Inflation is always and everywhere a monetary phenomenon."
            </p>
            <span className="block text-sm text-gray-400 mt-2">
              — Milton Friedman
            </span>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                History
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              Monetarism emerged in the mid 20th century, particularly gaining traction during the 1960s and 1970s as a response to the perceived failures of Keynesian economics. During this period, many Western economies were experiencing a troubling mix of high inflation and high unemployment, a phenomenon known as stagflation, which traditional Keynesian models struggled to explain or address.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Characteristics
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-2">
                
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base sm:text-lg">
                <li><strong>Money Supply Control:</strong> The primary focus of monetary policy should be stable and predictable growth in the money supply.</li>
                <li><strong>Quantity Theory of Money:</strong> At the heart of monetarism is the Quantity Theory of Money, expressed by the equation:
 MV=PQ
 Where:


M = Money supply


V = Velocity of money (the rate at which money circulates)


P = Price level


Q = Real output (quantity of goods and services produced)


Monetarists assume that V is stable and Q grows at a steady rate. Therefore, any change in M directly affects P, implying that increasing the money supply leads to inflation.


</li>
                <li><strong>Limited Government Intervention:</strong> Monetarists argue against active fiscal policy, such as government spending and taxation adjustments, to manage economic cycles. They believe that such interventions often lead to inefficiencies and unintended consequences. Instead, they advocate for a limited role of government, focusing on maintaining a stable money supply.</li>
                <li><strong>Natural Rate of Unemployment:</strong> Monetarism introduces the concept of a natural rate of unemployment, suggesting that there is a specific level of unemployment that the economy tends to gravitate toward in the long run. Attempts to reduce unemployment below this natural rate using expansionary policies can lead to accelerating inflation without long-term gains in employment.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Example
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              In the late 1970s, the U.S. faced stagflation, high inflation coupled with stagnant economic growth. Federal Reserve Chairman Paul Volcker implemented monetarist policies by raising the federal funds rate to nearly 20% in 1980. This move aimed to reduce the money supply and curb inflation. While successful in lowering inflation, it led to a significant recession and unemployment rates exceeding 10%
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MonetarismPage;