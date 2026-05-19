"use client";

import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    category: "Destinations",
    title: "The Silk Road Reimagined: A Journey Through Central Asia",
    excerpt:
      "Uzbekistan's ancient cities of Samarkand and Bukhara hold centuries of history beneath their turquoise domes. We trace the old merchant routes on foot, by train, and through dusty desert roads — discovering that the Silk Road is very much alive.",
    author: "Nadia Karimov",
    authorRole: "Senior Travel Writer",
    date: "May 14, 2026",
    readTime: "9 min read",
    featured: true,
    tag: "Asia",
    image: "#1a1a2e",
    emoji: "🏛️",
  },
  {
    id: 2,
    category: "Adventure",
    title: "Trekking Patagonia: What No One Tells You About Torres del Paine",
    excerpt:
      "Wind that knocks you sideways. Sudden snowstorms in summer. And the most dramatic mountain scenery on the planet. Here is our honest guide to hiking the W Trek — from gear lists to the campsites that actually matter.",
    author: "Mateo Rivera",
    authorRole: "Adventure Correspondent",
    date: "May 8, 2026",
    readTime: "12 min read",
    featured: false,
    tag: "South America",
    image: "#0d1b2a",
    emoji: "⛰️",
  },
  {
    id: 3,
    category: "Culture",
    title: "Eating Your Way Through Kyoto: A Food-First Travel Guide",
    excerpt:
      "From pre-dawn tuna auctions to quiet kaiseki dinners in Gion, Kyoto's food culture is inseparable from its identity. We spent three weeks eating everything — so you don't have to guess.",
    author: "Yuki Tanaka",
    authorRole: "Food & Travel Editor",
    date: "April 30, 2026",
    readTime: "7 min read",
    featured: false,
    tag: "Asia",
    image: "#1a1a1a",
    emoji: "🍜",
  },
  {
    id: 4,
    category: "Tips & Guides",
    title: "How to Travel Africa on a Budget Without Missing a Thing",
    excerpt:
      "East Africa is not as expensive as you think — if you know where to look. We break down the real costs of a 30-day trip across Kenya, Tanzania and Rwanda, including safaris that don't break the bank.",
    author: "Amara Osei",
    authorRole: "Budget Travel Expert",
    date: "April 22, 2026",
    readTime: "10 min read",
    featured: false,
    tag: "Africa",
    image: "#1c1008",
    emoji: "🦁",
  },
  {
    id: 5,
    category: "Destinations",
    title: "Iceland in January: Chasing the Northern Lights Into the Dark",
    excerpt:
      "Most people visit Iceland in summer. We went in the dead of winter — through storms, across frozen roads, and into pitch-black lava fields — to chase the aurora borealis at its most dramatic.",
    author: "Sigrid Bjornsson",
    authorRole: "Nature & Wilderness Writer",
    date: "April 15, 2026",
    readTime: "8 min read",
    featured: false,
    tag: "Europe",
    image: "#0a1628",
    emoji: "🌌",
  },
  {
    id: 6,
    category: "Adventure",
    title: "Scuba Diving the Coral Triangle: The Ocean's Last Eden",
    excerpt:
      "The waters between Indonesia, the Philippines, and Papua New Guinea contain 76% of the world's coral species. We dove for two weeks straight and came back changed. Here is what is under the surface.",
    author: "Lena Schreiber",
    authorRole: "Ocean & Dive Writer",
    date: "April 5, 2026",
    readTime: "11 min read",
    featured: false,
    tag: "Asia Pacific",
    image: "#001a33",
    emoji: "🤿",
  },
];

const categories = [
  "All",
  "Destinations",
  "Adventure",
  "Culture",
  "Tips & Guides",
];

const popularPosts = [
  {
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    date: "Mar 2026",
    views: "24k",
  },
  {
    title: "The Complete Morocco Travel Guide for 2026",
    date: "Feb 2026",
    views: "18k",
  },
  {
    title: "Solo Travel Safety: An Honest Guide for Women",
    date: "Jan 2026",
    views: "31k",
  },
  {
    title: "How to Get a Digital Nomad Visa in 12 Countries",
    date: "Dec 2025",
    views: "15k",
  },
];

const tags = [
  "Beaches",
  "Mountains",
  "Solo Travel",
  "Budget",
  "Luxury",
  "Food",
  "Culture",
  "Backpacking",
  "Family",
  "Eco Travel",
  "City Breaks",
  "Off the Beaten Path",
];

function FeaturesSection({ cat }: { cat: string }) {
  const colors: Record<string, string> = {
    Destinations: "bg-blue-900/60 text-blue-300 border-blue-800",
    Adventure: "bg-orange-900/60 text-orange-300 border-orange-800",
    Culture: "bg-purple-900/60 text-purple-300 border-purple-800",
    "Tips & Guides": "bg-emerald-900/60 text-emerald-300 border-emerald-800",
  };
  return (
    <span
      className={`text-xs font-medium px-2.5 py-1 border rounded-full ${colors[cat] ?? "bg-neutral-800 text-neutral-300 border-neutral-700"}`}
    >
      {cat}
    </span>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const gridPosts = filtered.filter(
    (p) => !p.featured || activeCategory !== "All" || searchQuery !== "",
  );
  const showFeatured = activeCategory === "All" && searchQuery === "";

  return (
    <div
      className="min-h-screen bg-black/50 text-neutral-100"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* ── HEADER ── */}
      {/* <header className="border-b border-neutral-800 bg-black/70 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-bold text-white tracking-tight">
                WanderLog
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-white font-medium">
                Blog
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Destinations
              </a>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </nav>
            <button className="bg-amber-500 hover:bg-amber-400 transition-colors text-black text-sm font-semibold px-4 py-2 rounded-lg">
              Plan a Trip
            </button>
          </div>
        </div>
      </header> */}

      {/* ── HERO BANNER ── */}
      {/* <section className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              The WanderLog Journal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Stories from the
              <br />
              <span className="text-amber-400">World's Edge</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Real travel. Honest guides. Destinations you haven't seen on a
              postcard yet. Written by travellers who live out of a bag.
            </p>
            <div className="flex gap-2 max-w-md">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search destinations, tips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm rounded-lg pl-9 pr-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <button className="bg-amber-500 hover:bg-amber-400 transition-colors text-black font-semibold text-sm px-5 rounded-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── LEFT: POSTS ── */}
          <div className="flex-1 min-w-0">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm px-4 py-2 rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-amber-500 border-amber-500 text-black font-semibold"
                      : "bg-transparent border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            {showFeatured && featuredPost && (
              <article className="mb-10 group cursor-pointer">
                <div
                  className="relative rounded-2xl overflow-hidden mb-5 flex items-end"
                  style={{
                    backgroundColor: featuredPost.image,
                    minHeight: "340px",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10 select-none">
                    {featuredPost.emoji}
                  </div>
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #000000ee 0%, transparent 55%)",
                    }}
                  />
                  <div className="relative z-10 p-7 w-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-amber-500 text-black text-xs font-bold px-2.5 py-1 rounded-full">
                        Featured
                      </span>
                      <CategoryBadge cat={featuredPost.category} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-2 group-hover:text-amber-300 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-neutral-300 text-sm leading-relaxed line-clamp-2 max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-xs text-neutral-400">
                      <span>{featuredPost.author}</span>
                      <span>·</span>
                      <span>{featuredPost.date}</span>
                      <span>·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Post Count */}
            {(searchQuery || activeCategory !== "All") && (
              <p className="text-neutral-500 text-sm mb-6">
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}{" "}
                found
                {searchQuery ? ` for "${searchQuery}"` : ""}
                {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
              </p>
            )}

            {/* Posts Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-neutral-500">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-lg font-medium text-neutral-400">
                  No articles found
                </p>
                <p className="text-sm mt-1">
                  Try a different search or category
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(showFeatured ? gridPosts : filtered).map((post) => (
                  <article
                    key={post.id}
                    className="group cursor-pointer bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all"
                  >
                    {/* Card Image */}
                    <div
                      className="relative flex items-center justify-center"
                      style={{ backgroundColor: post.image, height: "180px" }}
                    >
                      <span className="text-6xl opacity-20 select-none">
                        {post.emoji}
                      </span>
                      <div className="absolute top-3 left-3">
                        <CategoryBadge cat={post.category} />
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 text-neutral-300 text-xs px-2 py-1 rounded-full">
                        {post.tag}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-white leading-snug mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-amber-800 flex items-center justify-center text-amber-300 text-xs font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs text-neutral-300 font-medium leading-none">
                              {post.author}
                            </p>
                            <p className="text-xs text-neutral-500 mt-0.5">
                              {post.date}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-neutral-500 flex items-center gap-1">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Load More */}
            {filtered.length > 0 && (
              <div className="text-center mt-12">
                <button className="border border-neutral-700 hover:border-amber-500 hover:text-amber-400 text-neutral-400 text-sm font-medium px-8 py-3 rounded-full transition-all">
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="w-full lg:w-72 xl:w-80 shrink-0 space-y-8">
            {/* Newsletter */}
            <div className="bg-neutral-950 border border-amber-800/40 rounded-2xl p-6">
              <div className="text-2xl mb-3">📬</div>
              <h3 className="text-white font-semibold text-base mb-1">
                Get Travel Stories Weekly
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                No spam. Just one well-written story from somewhere in the
                world, every Friday.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-neutral-900 border border-neutral-700 text-white text-sm placeholder-neutral-500 rounded-lg px-4 py-2.5 mb-3 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="w-full bg-amber-500 hover:bg-amber-400 transition-colors text-black font-semibold text-sm py-2.5 rounded-lg">
                Subscribe Free
              </button>
            </div>

            {/* Popular Posts */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-500 rounded-full inline-block" />
                Most Read
              </h3>
              <div className="space-y-4">
                {popularPosts.map((p, i) => (
                  <div key={i} className="flex gap-3 group cursor-pointer">
                    <span className="text-2xl font-bold text-neutral-800 w-6 shrink-0 leading-tight">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-neutral-300 leading-snug group-hover:text-amber-300 transition-colors line-clamp-2 font-medium">
                        {p.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-neutral-500">
                          {p.date}
                        </span>
                        <span className="text-xs text-neutral-600">·</span>
                        <span className="text-xs text-amber-600">
                          {p.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Destinations Map (decorative) */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-500 rounded-full inline-block" />
                Explore by Region
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { region: "Asia", icon: "🏯", count: 28 },
                  { region: "Europe", icon: "🏰", count: 19 },
                  { region: "Americas", icon: "🌎", count: 14 },
                  { region: "Africa", icon: "🦒", count: 11 },
                  { region: "Oceania", icon: "🐨", count: 7 },
                  { region: "Middle East", icon: "🕌", count: 9 },
                ].map(({ region, icon, count }) => (
                  <button
                    key={region}
                    className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 rounded-xl px-3 py-2.5 transition-all text-left group"
                  >
                    <span className="text-base">{icon}</span>
                    <div>
                      <p className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors">
                        {region}
                      </p>
                      <p className="text-xs text-neutral-600">{count} posts</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-500 rounded-full inline-block" />
                Browse by Topic
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="text-xs text-neutral-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 px-3 py-1.5 rounded-full transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-amber-500/5 border border-amber-700/40 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-white font-semibold text-sm mb-2">
                Ready to Go?
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Let us plan your next adventure — personalised itineraries from
                our travel experts.
              </p>
              <button className="w-full bg-amber-500 hover:bg-amber-400 transition-colors text-black font-semibold text-xs py-2.5 rounded-lg">
                Start Planning →
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* ── FULL WIDTH CTA ── */}
      <section className="border-t border-neutral-800 bg-neutral-950 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-4xl mb-4 block">✈️</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Your Next Adventure is One Click Away
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            We've helped over 120,000 travellers find their perfect destination.
            Let us do the same for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-amber-500 hover:bg-amber-400 transition-colors text-black font-semibold px-8 py-3.5 rounded-xl text-sm">
              Browse All Destinations
            </button>
            <button className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium px-8 py-3.5 rounded-xl text-sm transition-all">
              Talk to a Travel Expert
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">✈️</span>
                <span className="text-lg font-bold text-white">WanderLog</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Real travel stories from real travellers. No sponsored fluff.
              </p>
            </div>
            {[
              {
                heading: "Explore",
                links: [
                  "Destinations",
                  "Adventures",
                  "City Guides",
                  "Beach Escapes",
                ],
              },
              {
                heading: "Resources",
                links: [
                  "Travel Guides",
                  "Visa Info",
                  "Packing Lists",
                  "Travel Insurance",
                ],
              },
              {
                heading: "Company",
                links: [
                  "About Us",
                  "Write for Us",
                  "Contact",
                  "Privacy Policy",
                ],
              },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="text-white text-sm font-semibold mb-3">
                  {heading}
                </p>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-neutral-600 text-xs">
              © 2026 WanderLog. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-600">
              <a href="#" className="hover:text-neutral-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-neutral-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-neutral-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
