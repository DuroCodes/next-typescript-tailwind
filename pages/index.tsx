import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="w-auto px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
      <h1 className="max-w-5xl text-center mx-auto text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-8xl xl:text-8xl font-sans">
        Welcome to Next.JS
      </h1>

      <p className="max-w-lg mx-auto mt-6 text-xl font-medium leading-tight text-center text-gray-400 ">
          Edit this page in <code>./pages/index.tsx</code>
        </p>
    </div>
  );
};

export default Home;
