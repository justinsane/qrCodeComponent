import './App.css';

function App() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-light-gray'>
      <div className='bg-white rounded-3xl shadow-md max-w-md mt-8 mb-20 p-2'>
        <div className='p-2 mx-auto'>
          <img
            src='/image-qr-code.png'
            alt='QR Code'
            className='object-cover w-full rounded-2xl'
          />
        </div>
        <h1 className='px-4 mt-5 text-center text-3xl text-dark-blue font-bold'>
          Improve your front-end skills by building projects
        </h1>
        <p className='mt-1 text-center text-grayish-blue py-4 px-8 mb-8'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
