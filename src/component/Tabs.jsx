import { useState } from 'react';

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (event) => {
  if (event.key === 'ArrowRight') {
    setActiveTab((prev) =>
      prev === children.length - 1 ? 0 : prev + 1
    )
  }

  if (event.key === 'ArrowLeft') {
    setActiveTab((prev) =>
      prev === 0 ? children.length - 1 : prev - 1
    )
  }
}

  return (
    <div className="w-1/2 mt-10">

      <div className="flex border">
        {children.map((child, index) => (
          <button
            key={index}
            onKeyDown={handleKeyDown}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-semibold select-none ${
              activeTab === index
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
          >
            {child.props.title}
          </button>
        ))}
      </div>

      <div className="border p-6 select-none">
        {children[activeTab]}
      </div>

    </div>
  );
}

export default Tabs;