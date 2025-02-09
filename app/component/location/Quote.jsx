import { toast } from "react-toastify";

const QuoteForm = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      destination: e.target.destination.value,
      message: e.target.message.value,
    };
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if(response.ok){
        toast.success('Form submitted successfully');
      }
    } catch (error) {
      console.error('Error:', error);

    }
  };
  return (
    <div className="relative flex flex-col-reverse px-6  mx-auto lg:flex-row lg:justify-between lg:items-center  md:px-8 sm:max-w-xl md:max-w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566406922140-8fcd0396b361?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:w-1/2 gap-6 justify-center h-full overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:justify-start lg:bottom-0 lg:left-0 lg:items-center">
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-white text-lg font-semibold mb-4">Top Packers & Movers in Your Area</p>
          <h2 className="text-4xl text-white font-extrabold sm:text-5xl sm:leading-tight">Get Reliable Shifting Services</h2>
          <p className="text-white text-lg mt-4">We ensure safe and affordable moving solutions for your home and office. Get your free quote today!</p>
        </div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto  lg:max-w-screen-xl my-16 px-6 py-8 bg-white rounded-lg shadow-xl opacity-90 lg:w-1/2 flex justify-center flex-col">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get a Free Quote</h3>
        <form onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label className="block text-gray-700 font-medium">Name *</label>
              <input
                name="name" // Add name attribute
                placeholder="Your Name"
                required
                type="text"
                className="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone Number *</label>
              <input
                name="phone" // Add name attribute
                placeholder="Your Phone"
                required
                type="tel"
                className="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Moving Date *</label>
            <input
              name="date" // Add name attribute
              type="date"
              required
              className="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Moving To *</label>
            <input
              name="destination" // Add name attribute
              placeholder="Destination Address"
              required
              type="text"
              className="w-full h-12 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Message *</label>
            <textarea
              name="message" // Add name attribute
              placeholder="Details of items to be moved"
              required
              className="w-full h-32 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Get a Quote
            </button>
            <button
              type="reset"
              className="mt-4 w-full px-6 py-3 bg-gray-400 text-white font-semibold rounded-md shadow-md hover:bg-gray-500 transition-all duration-300"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
