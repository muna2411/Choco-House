

const Xman = () => {
  return (
    <div className="relative">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("r17.jpg")' }}
      ></div>

      {/* Scrollable Content */}
      <div className="relative z-10 p-8">
        <p>Your scrollable content goes here...</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Xman;
