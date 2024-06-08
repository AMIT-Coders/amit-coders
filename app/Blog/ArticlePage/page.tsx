import React from 'react';
import Image from 'next/image';
import { FaRegHeart, FaRegComment, FaRegBookmark, FaPlay, FaShareAlt } from 'react-icons/fa';

const ArticlePage = () => {
  return (
    <div className="bg-gray-50 text-dark-blue-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">A Comprehensive Guide to Next.js</h1>
        </header>

        {/* Author Details Section */}
        <div className="flex items-center space-x-4 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1603217039863-aa0c865404f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Author's Profile Picture" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <div>
            <p className="text-base font-semibold text-gray-900 flex items-center space-x-2">
              <span>Ahmed Abu Bakr</span>
              <span className="text-green-500">· Follow</span>
            </p>
            <p className="text-sm text-gray-500">4 min read · Sep 5, 2023</p>
          </div>
        </div>
        <div>
        
          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Full Stack
          </span>
          <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
            Cyber Security
          </span>
          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Data Analytics
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Work Enviroment
          </span>
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            Machine Learning
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
            UI/UX
          </span>
          <span className="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
            Software Engineering
          </span>
      
        </div>
        <div className="flex items-center justify-between border-t border-b border-gray-300 py-4 mb-8">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-500 space-x-1">
              <FaRegHeart className="w-5 h-5" />
              <span>45</span>
            </button>
            <button className="text-gray-500">
              <FaRegComment className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500">
              <FaRegBookmark className="w-5 h-5" />
            </button>
            <button className="text-gray-500">
              <FaPlay className="w-5 h-5" />
            </button>
            <button className="text-gray-500">
              <FaShareAlt className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-64 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Cover Image" 
            // layout="fill" 
            // objectFit="cover" 
            className="rounded-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-blue mx-auto">
          <p>Next.js is a popular React framework that enables several extra features, including server-side rendering and generating static websites. It's a robust solution for building scalable web applications.</p>
          
          <h2>Getting Started</h2>
          <p>First, you need to create a Next.js project. You can do this by using the following command:</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg">
            <code>npx create-next-app my-next-app</code>
          </pre>
          <p>This command sets up everything you need to start developing a Next.js application.</p>

          <h2>File Structure</h2>
          <p>Next.js comes with a standard file structure:</p>
          <ul>
            <li><code>pages/</code>: Contains all your page components.</li>
            <li><code>public/</code>: Static assets like images.</li>
            <li><code>styles/</code>: Global and modular CSS files.</li>
          </ul>

          <h2>Routing</h2>
          <p>Next.js uses file-based routing, which means that any file inside the <code>pages/</code> directory becomes a route:</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg">
            <code>/pages/about.js</code>
          </pre>
          <p>This would create a route <code>/about</code>.</p>

          <h2>API Routes</h2>
          <p>Next.js also allows you to create API endpoints with file-based routing. Create a file under <code>pages/api/</code>:</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg">
            <code>/pages/api/hello.js</code>
          </pre>
          <p>This sets up an endpoint at <code>/api/hello</code> that you can call from your front end.</p>

          <h2>Deployment</h2>
          <p>Next.js applications can be deployed on Vercel, the creators of Next.js:</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg">
            <code>vercel</code>
          </pre>
          <p>This command will deploy your app to Vercel, making it available on the web.</p>

          <p>Next.js is a powerful framework that provides all the tools you need to build scalable and fast web applications.</p>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
