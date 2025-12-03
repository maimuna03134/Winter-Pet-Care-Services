import React from 'react';

const ScrollTop = () => {
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-linear-to-r from-orange-400 to-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      >
        ↑
      </button>
    );
};

export default ScrollTop;