import React from 'react';

/**
 * ScreenshotsMockups Component
 * Placeholder for product screenshots or animated mockups.
 * Use this to visually explain the platform and build trust.
 *
 * To customize: Replace placeholder boxes with real images or animations.
 */
const ScreenshotsMockups: React.FC = () => {
  return (
    <section className="bg-gray-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">See Predictly in Action</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Placeholder screenshot boxes - replace with real images or animated GIFs */}
          <div className="w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg border-2 border-dashed border-green-500">
            Screenshot 1
          </div>
          <div className="w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg border-2 border-dashed border-yellow-500">
            Screenshot 2
          </div>
        </div>
        <div className="mt-4 text-gray-400 text-sm">* Replace these with real product images or animated mockups</div>
      </div>
    </section>
  );
};

export default ScreenshotsMockups; 