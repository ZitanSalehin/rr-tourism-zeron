import { Calendar, User } from "feather-icons-react";

const posts = [
  {
    id: 1,
    title: "The Ultimate Packing List For Every Type Of Traveler",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "administrator",
    date: "August 6, 2024",
    excerpt:
      "Packing can be one of the most stressful parts of traveling, but with our ultimate packing list, you’ll be ready for any adventure. Here’s what you need to pack based on your travel style...",
  },
  {
    id: 2,
    title: "A Comprehensive Guide To Eco-Friendly Travel",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "administrator",
    date: "August 6, 2024",
    excerpt:
      "As awareness of environmental issues grows, more travelers are seeking ways to reduce their carbon footprint. This guide will show you how to make your travel more sustainable...",
  },
  {
    id: 3,
    title: "Top Destinations You Must Visit In 2025",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    author: "administrator",
    date: "August 7, 2024",
    excerpt:
      "Planning your next adventure? From tropical beaches to mountain escapes, discover the most breathtaking destinations you should add to your 2025 travel bucket list...",
  },
];

export default function BlogContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 lg:py-18 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT CONTENT */}
      <div className="lg:col-span-2 space-y-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
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

              {/* Excerpt */}
              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              {/* Read More */}
              <button className="text-md font-medium hover:underline">
                Read More
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
