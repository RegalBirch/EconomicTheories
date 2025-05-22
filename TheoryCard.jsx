import React from 'react';
import { Link } from 'react-router-dom';

const TheoryCard = ({ title, description, slug }) => {
  return (
    // The Link component will navigate to the specific theory page
    <Link to={`/theory/${slug}`} className="block h-full group"> {/* Added group for potential group-hover effects */}
      <div
        className="
          bg-gray-800
          p-6
          rounded-lg
          shadow-md
          text-center
          cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-gray-700
          hover:-translate-y-2
          hover:shadow-xl
          hover:shadow-blue-500/30
          h-full flex flex-col justify-between /* Ensure cards have same height and content is spaced */
        "
      >
        <div> {/* Wrapper for title and description to control their spacing from "Learn More" */}
          <h3 className="text-xl font-semibold mb-3 text-blue-300">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <span className="mt-4 text-xs text-blue-500 group-hover:text-blue-400 self-center transition-colors">
          Learn More →
        </span>
      </div>
    </Link>
  );
};

export default TheoryCard;