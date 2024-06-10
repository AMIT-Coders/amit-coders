"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
import React from "react";
import Image from "next/image";
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaPlay,
  FaShareAlt,
} from "react-icons/fa";

const ArticlePage = ({ post }: { post: SanityDocument }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-gray-50 text-dark-blue-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
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
              <span>{post.authorName}</span>
              {/* <span className="text-Light-Sea-Green">· Follow</span> */}
            </p>
            <p className="text-sm text-gray-500">
              4 min read · {convertDate(post._createdAt)}
            </p>
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
        {/* <div className="flex items-center justify-between border-t border-b border-gray-300 py-4 mb-8">
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
        </div> */}

        {/* Cover Image */}
        <div className="relative w-full h-64 mb-8 rounded-lg">
          {post?.mainImage ? (
            <Image
              src={builder.image(post.mainImage).width(300).height(300).url()}
              alt={post?.mainImage?.alt}
              width={300}
              height={300}
            />
          ) : null}
          {post?.body ? <PortableText value={post.body} /> : null}
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-blue mx-auto">
          {post.description}
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
