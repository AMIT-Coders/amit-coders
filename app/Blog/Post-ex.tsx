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

const Post = ({ post }: { post: SanityDocument }) => {
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
              <span>Ahmed Abu Bakr</span>
              <span className="text-green-500">· Follow</span>
            </p>
            <p className="text-sm text-gray-500">4 min read · Sep 5, 2023</p>
          </div>
        </div>
        <div>
          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            post.category
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
        <div className="relative w-full h-64 mb-8 rounded-lg m-10">
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
        <article className="prose prose-lg prose-blue mx-auto mb-6">
          {post.description}
        </article>
      </div>
    </div>
  );
};

export default Post;
