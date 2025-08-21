


const SecondComponent = ({ title, description, imageSrc, pageInfo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="relative">
            {/* The "Read More" button and dropdown */}
            <button className="flex items-center text-blue-500 hover:text-blue-700 font-medium">
              আরও পড়ুন
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown content can be hidden/shown with state */}
          </div>
          <span className="text-gray-400 text-sm">{pageInfo}</span>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;