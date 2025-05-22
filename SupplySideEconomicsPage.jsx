import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const SupplySideEconomicsPage = () => {
  return (
    <section className="py-10 bg-gray-800 text-white min-h-screen flex justify-center items-start">
      <div className="max-w-4xl w-full mx-auto"> {/* w-full for smaller screens, mx-auto for centering */}
        <div className="px-4"> {/* Added padding for small screens */}
            <RouterLink
              to="/"
              className="inline-block mb-6 text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              ← Back to Overview
            </RouterLink>
        </div>
        <article className="bg-gray-700 p-8 rounded-lg shadow-lg mx-4 sm:mx-0"> {/* Margin for small screens */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-500">
            Supply Side Economics
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-113494477.jpg"
              alt="Ronald Reagan"
              className="rounded-full shadow-lg w-36 h-36 sm:w-48 sm:h-48 object-cover border-4 border-blue-500"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl italic text-gray-300">
            “Government’s view of the economy could be summed up in a few short phrases: If it moves, tax it. If it keeps moving, regulate it. And if it stops moving, subsidize it."
            </p>
            <span className="block text-sm text-gray-400 mt-2">
              — Ronald Reagan
            </span>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                History
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              The history of supply side economics dates all the way back to 1776 in Adam Smith’s book the Wealth of Nations. In Smith’s book he argued that a nation's prosperity stems from free markets, competition, and limited government intervention. Much like Keynesian economics, supply side economics was born from crisis, specifically economic crises in the 1970s. Arthur Laffer is credited for developing supply side economics through the Laffer Curve, which said that cutting taxes would lead to increased government revenue by encouraging investment and work. The theory was then used most notably during Ronald Reagan’s presidency known as the Reagan Revolution.

              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Key Concepts
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-2">
                
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base sm:text-lg">
                <li><strong>Laissez Faire:</strong> Laissez faire (French for "let do" or "let it be") is an economic philosophy that advocates for minimal government interference in the economy. Under a laissez-faire approach, individuals and businesses are free to make their own economic decisions. In supplyside economics, laissez faire principles are key. Supply siders argue that the government should avoid over-taxing, over regulating, or distorting market signals. Instead, they believe economic growth is best achieved by letting markets move freely</li>
                <li><strong>Tax Cuts:</strong> A central feature of supply side theory is the belief that lowering taxes especially on businesses, investors, and high income earners—encourages greater production, work effort, and investment. By reducing tax rates, individuals are more incentivized to work and businesses are more likely to expand. This, in turn, boosts economic activity and can, under the right conditions, lead to higher government revenue, as described by the Laffer Curve..</li>
                <img src="https://www.investopedia.com/thmb/2mB9A8wzVXE506uOi-R6vwOuXrk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LafferCurve2-3509f81755554440855b5e48c182593e.png"
                alt="Laffer Curve"
                className="mx-auto h-100 w-100 m-5"></img>
                <li><strong>Deregulation:</strong> Deregulation is the process of reducing or eliminating government rules and restrictions on businesses and industries. The idea is that when businesses face fewer regulations, they can operate more efficiently, reduce costs, innovate more freely, and respond more quickly to consumer demand. deregulation is a key tool for boosting the aggregate supply of goods and service.</li>
                <li><strong>Trickle Down Effect:</strong> A commonly cited and controversial aspect of supply side economics is the trickle down effect. The idea is that policies that benefit businesses and high-income earners—such as tax cuts and deregulation will ultimately benefit the broader economy, including lower income individuals. Critics argue that these benefits are not always widely shared and can exacerbate income inequality.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Historical Example
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              The Reagan Revolution of the 1980s embraced supply side economics as its guiding principle, aiming to stimulate economic growth by reducing taxes, cutting regulations, and encouraging private investment. An example was the Economic Recovery Tax Act of 1981, which significantly lowered income tax rates, especially for high earners, under the belief that this would incentivize work, saving, and entrepreneurship. Reagan also pursued deregulation across multiple industries to reduce government interference and boost efficiency. Although the economy experienced growth and lower inflation, many critics argue that the benefits from supply side economics were unevenly distributed and that the trickle down effect did not work.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SupplySideEconomicsPage;