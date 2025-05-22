// src/components/BehavioralEconomicsPage.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const BehavioralEconomicsPage = () => {
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
            Behavioral Economics
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CQCgz8aE3k-gBLwu-xjp3O31QEDzTqLPfg&s" // Daniel Kahneman
              alt="Behavioral Economics"
              className="rounded-full shadow-lg w-36 h-36 sm:w-48 sm:h-48 object-cover border-4 border-blue-500"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl italic text-gray-300">
              "We are very influenced by completely arbitrary coherences."
            </p>
            <span className="block text-sm text-gray-400 mt-2">
              — Dan Ariely
            </span>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                History
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              Behavioral Economics emerged in the late 20th century as a response to traditional economic models that assume humans are perfectly rational and always make decisions in their best interest. Economists such as Daniel Kahneman and Amos Tversky laid the foundation with their research on cognitive biases and decision making under uncertainty. Richard Thaler further developed the field by integrating these psychological insights into economics, earning the Nobel Prize in Economics in 2017. 
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Characteristics
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-2">
             
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base sm:text-lg">
  <li>
    <strong>Bounded Rationality:</strong> Behavioral economics argues that people are not perfect and cannot process all information given to them. Instead of making optimal decisions like traditional economic models assume, individuals use simplified strategies, heuristics, to make choices that are “good enough.” 
  </li>
  
  <li>
    <strong>Heuristics and Biases:</strong> Rather than making purely logical decisions, people rely on mental shortcuts, or heuristics, that can lead to errors:
    <ol className="list-decimal list-inside ml-5 space-y-1">
      <li>Anchoring: The tendency to rely too heavily on the first piece of information (the "anchor") when making decisions, such as when setting a price.</li>
      <li>Loss Aversion: People feel the pain of losing something more intensely than they feel the pleasure of gaining something of equal value. This can lead to risk-averse behavior, even when taking a risk might be more beneficial.</li>
      <li>Overconfidence: Individuals often overestimate their own knowledge, skills, or ability to predict future outcomes.</li>
    </ol>
  </li>

  <li>
    <strong>Nudge Theory:</strong> One of the most influential concepts in behavioral economics is the idea of "nudging", subtly altering the environment in which choices are made to encourage better decisions without eliminating freedom of choice.
  </li>

  <li>
    <strong>Departure from Rational Actor Model:</strong> Traditional economics is built on the assumption of Homo Economicus, a rational and self interested decision maker. Behavioral economics challenges this by demonstrating that people are often influenced by emotion, habits, and social context, not just what is defined in the Rational Actor Model.
  </li>
</ul>
 
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Example
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                An example of Behavioral Economics in everyday life is how stores price their items at $1.99 rather than $2. Although only being a cent less, stores use this method to make their prices seem more attractive to consumers. This is known as charm pricing which preys on customer's perceptions and biases in order to make the item look cheaper and make the customer more likely to buy.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BehavioralEconomicsPage;