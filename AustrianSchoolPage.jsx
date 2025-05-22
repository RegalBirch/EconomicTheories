import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const AustrianSchoolPage = () => {
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
            Austrian School
          </h1>

          <div className="flex justify-center items-centermb-6">
            <img
              src="https://images.squarespace-cdn.com/content/56eddde762cd9413e151ac92/1569655815358-E7YKQTDJNEEIB4KRVE91/ludwig+von+mises.jpg?content-type=image%2Fjpeg"
              alt="Ludwig Von Mises"
              className="rounded-full shadow-lg w-36 h-36 sm:w-48 sm:h-48 object-cover border-4 border-blue-500"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl italic text-gray-300">
            “The worst evils which mankind has ever had to endure were inflicted by bad governments”
            </p>
            <span className="block text-sm text-gray-400 mt-2">
            - Ludwig von Mises
            </span>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                History
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                The Austrian School, with roots in Carl Menger and influential figures like Ludwig von Mises and Friedrich Hayek, emphasizes methodological individualism, subjective value, and the importance of market processes. It is highly critical of central planning and mathematical formalism in economics.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Characteristics
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-2">
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base sm:text-lg">
                <li><strong>Methodological Dualism: </strong>Economics is a social science not a natural science. As such, economics requires a different methodology than the natural sciences, such as physics and chemistry. Methodical dualism is based on the belief that humans are significantly different from objects and therefore cannot be studied in the same way objects are. Instead, the Austrian school of economics uses the logic of priori thinking or something a person can think of on their own without relying on the outside world.
                </li>
                <li><strong>Praxeology: </strong>Praxeology is the study of human action based on the belief that individuals act with a purpose to achieve their goals or action axiom. Praxeology is different from empirical methods that science tends to rely on and focuses on observation and experimentation.
                </li>
                <li><strong>Invisible Hand: </strong>Individual self interest can lead to beneficial outcomes for the entire society. The concept came from Adam Smith, who is widely regarded to be the father of economics, in his book Wealth of Nations. 
                </li>
                <li><strong>Law of diminishing marginal utility: </strong>When a person consumes more of a good, the additionality satisfaction (utility) from each extra unit decreases. For example, although the first and second cupcake would provide a person with satisfaction, that satisfaction will subside after the 10th cupcake. The law of diminishing marginal utility is an example of a priori as it is something that can be reasoned and observed from how humans behave.
                .</li>
                <li><strong>Law of diminishing returns or law of diminishing marginal productivity: </strong>As investment in a specific area increases, the rate of profit from that investment will not continue to have the same positive effect and will eventually lead to a decrease in output. For example, as you add more people in a kitchen, the kitchen becomes more productive, but eventually it starts getting crowded and then becomes completely unproductive due to people bumping into each other. This is also an example of a priori.
                </li>
                <li><strong>Business Cycle: </strong>By arguing that cycles are primarily caused by credit expansion driven by central banks, which distorts the natural interest rate and leads to misallocation of capital. While Keynesian economists often advocate for fiscal and monetary policies to mitigate recessions, Austrian economists argue that such policies can exacerbate the problem by prolonging the artificial boom and making the eventual bust more severe. Their opposition to government intervention has led many people to connect them to libertarians, but not all Austrian economists are libertarian and vice versa.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Example
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Austrian economics had gained popularity during the 2008 United States recession. Austrian economists critqued the government's response heavily. They believed the housing bubble and crash was a result of artificially low interest rates and excessive credit expasion which was caused by the Federal Reserve. Bailouts, stimulus, and any sort of government monetary interventions would only make the recession worse. Instead, Austrian economists wanted to let the recession self correct itself in order to purge malinvestment.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AustrianSchoolPage;