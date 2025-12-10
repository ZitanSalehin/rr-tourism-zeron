import { blog1, blog2, blog3 } from "@/assets/index";
import { Calendar, User } from "feather-icons-react";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "The Ultimate Packing List For Every Type Of Traveler",
    img: blog1,
    author: "administrator",
    date: "August 6, 2024",
    excerpt:
      "Packing can be one of the most stressful parts of traveling, but with our ultimate packing list, you’ll be ready for any adventure. Here’s what you need to pack based on your travel style—from essential clothing and gadgets to smart packing hacks that save space and time. Whether you're a minimalist traveler or someone who brings everything 'just in case,' this guide helps you stay organized and fully prepared. We break down must-have accessories, important travel documents, tech essentials, and health & safety items often forgotten until the last minute. With detailed tips for different climates, trip durations, adventure types, and packing methods, this comprehensive guide ensures that nothing slows you down on your journey.",
  },
  {
    id: 2,
    title: "A Comprehensive Guide To Eco-Friendly Travel",
    img: blog2,
    author: "administrator",
    date: "August 6, 2024",
    excerpt:
      "As awareness of environmental issues grows, more travelers are seeking ways to reduce their carbon footprint. This guide will show you how to make your travel more sustainable with practical tips like choosing eco-friendly accommodation, minimizing waste, supporting local communities, and being mindful of wildlife. Simple changes in the way you travel can make a big difference in protecting our planet for future generations. We explore sustainable packing habits, responsible transportation choices, ethical tour companies, and how to reduce single-use plastics on the go. Whether you're exploring cities or remote destinations, this guide empowers you to enjoy meaningful experiences while ensuring that your travel decisions have a positive impact on the environment.",
  },
  {
    id: 3,
    title: "Top Destinations You Must Visit In 2025",
    img: blog3,
    author: "administrator",
    date: "August 7, 2024",
    excerpt:
      "Planning your next adventure? From tropical beaches to mountain escapes, discover the most breathtaking destinations you should add to your 2025 travel bucket list. We highlight both hidden gems and world-famous hotspots, giving you inspiration for every type of traveler. Whether you're looking for cultural experiences, luxury stays, or untouched natural beauty, these destinations promise unforgettable memories. Explore vibrant cities with rich history, coastal retreats offering pure relaxation, and nature escapes ideal for adventure seekers. The list includes insights on the best times to visit, local attractions you can’t miss, and unique experiences that make each location stand out. Start planning now to make 2025 your most exciting travel year yet.",
  },
];

export default function BlogContent() {
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 lg:py-18 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT CONTENT */}
      <div className="lg:col-span-2 space-y-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white h-fit rounded-xl shadow-md overflow-hidden"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-110 hover:scale-110"
              />
            </div>

            <div className="p-6">
              {/* Title */}
              <h2 className="text-2xl font-bold mb-3 leading-snug playfair">
                {post.title}
              </h2>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <User size={16} className="text-black" /> {post.author}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar size={16} className="text-black" /> {post.date}
                </span>
              </div>

              <p
                className={`text-gray-600 mb-4 ${
                  expanded[post.id] ? "" : "excerpt"
                }`}
              >
                {post.excerpt}
              </p>

              <button
                onClick={() => toggleExpand(post.id)}
                className="text-md font-medium hover:underline cursor-pointer"
              >
                {expanded[post.id] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SIDEBAR */}
      <div className="space-y-8">
        {/* Search */}
        <div className="border border-gray-300 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 relative">
            Search
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-black mt-1"></span>
          </h3>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg">
              Search
            </button>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="border border-gray-300 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 relative">
            Recent Posts
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-black mt-1"></span>
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm mt-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="border-b border-gray-200 pb-2 hover:text-[#F16C52] cursor-pointer"
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Comments */}
        <div className="border border-gray-300 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 relative">
            Recent Comments
            <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-black mt-1"></span>
          </h3>
          <p className="text-sm text-gray-500 mt-3">No comments to show.</p>
        </div>

        {/* Archives */}
        <div className="border border-gray-300 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 relative">
            Archives
            <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-black mt-1"></span>
          </h3>
          <p className="text-sm text-gray-700 mt-3">August 2024</p>
        </div>

        {/* Categories */}
        <div className="border border-gray-300 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 relative">
            Categories
            <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-black mt-1"></span>
          </h3>
          <p className="text-sm text-gray-700 mt-3">Uncategorized</p>
        </div>
      </div>
    </div>
  );
}
