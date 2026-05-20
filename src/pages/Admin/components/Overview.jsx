import { useState } from "react";
export const DUMMY_PACKAGES = [
  {
    id: 1,
    name: "Bali Serenity Escape",
    destination: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 1299,
    category: "Beach",
    seats: 20,
    booked: 14,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
    rating: 4.8,
    description:
      "Immerse yourself in the tranquil beauty of Bali with temple tours, rice terrace walks, and beachside relaxation.",
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    destination: "Interlaken, Switzerland",
    duration: "10 Days / 9 Nights",
    price: 3499,
    category: "Adventure",
    seats: 12,
    booked: 9,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80",
    rating: 4.9,
    description:
      "Conquer the majestic Swiss Alps with skiing, paragliding, and breathtaking panoramic mountain views.",
  },
  {
    id: 3,
    name: "Kyoto Cultural Journey",
    destination: "Kyoto, Japan",
    duration: "8 Days / 7 Nights",
    price: 2199,
    category: "Cultural",
    seats: 18,
    booked: 18,
    status: "Sold Out",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80",
    rating: 4.7,
    description:
      "Walk through ancient temples, witness traditional tea ceremonies, and explore Japan's living cultural heritage.",
  },
  {
    id: 4,
    name: "Santorini Sunset Tour",
    destination: "Santorini, Greece",
    duration: "6 Days / 5 Nights",
    price: 1899,
    category: "Beach",
    seats: 16,
    booked: 7,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80",
    rating: 4.6,
    description:
      "Experience iconic blue-domed churches, volcanic beaches, and the world-famous Oia sunset in Greece.",
  },
  {
    id: 5,
    name: "Machu Picchu Explorer",
    destination: "Cusco, Peru",
    duration: "9 Days / 8 Nights",
    price: 2799,
    category: "Adventure",
    seats: 14,
    booked: 11,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&q=80",
    rating: 4.9,
    description:
      "Trek the legendary Inca Trail to Machu Picchu and discover the mysteries of the ancient Andean civilization.",
  },
  {
    id: 6,
    name: "Safari Serengeti",
    destination: "Tanzania, Africa",
    duration: "12 Days / 11 Nights",
    price: 4299,
    category: "Wildlife",
    seats: 10,
    booked: 4,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80",
    rating: 5.0,
    description:
      "Witness the Great Migration and experience Africa's most spectacular wildlife in their natural habitat.",
  },
];
const RECENT_BOOKINGS = [
  {
    id: "BK-001",
    customer: "Arjun Mehta",
    package: "Bali Serenity Escape",
    date: "May 18, 2026",
    amount: 1299,
    status: "Confirmed",
  },
  {
    id: "BK-002",
    customer: "Sophia Chen",
    package: "Swiss Alps Adventure",
    date: "May 17, 2026",
    amount: 3499,
    status: "Pending",
  },
  {
    id: "BK-003",
    customer: "Marcus Williams",
    package: "Safari Serengeti",
    date: "May 16, 2026",
    amount: 4299,
    status: "Confirmed",
  },
  {
    id: "BK-004",
    customer: "Layla Hassan",
    package: "Santorini Sunset Tour",
    date: "May 15, 2026",
    amount: 1899,
    status: "Confirmed",
  },
  {
    id: "BK-005",
    customer: "Tomás Rivera",
    package: "Machu Picchu Explorer",
    date: "May 14, 2026",
    amount: 2799,
    status: "Cancelled",
  },
];

function StatCard({ icon, label, value, sub, accent }) {
  return (
    <div className="flex-1 min-w-[180px] flex flex-col gap-2 bg-white border border-[#f0ece4] rounded-2xl p-6">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
        style={{ background: accent + "18", color: accent }}
      >
        {icon}
      </div>
      <div className="text-2xl font-bold text-[#1a1208] leading-tight">
        {value}
      </div>
      <div className="text-sm text-[#8a7f6e] font-medium">{label}</div>
      {sub && <div className="text-xs text-[#b4a88e]">{sub}</div>}
    </div>
  );
}

const statusColor = (s) =>
  ({
    Active: { bg: "#e6f9f0", color: "#166534" },
    "Sold Out": { bg: "#fef3c7", color: "#92400e" },
    Draft: { bg: "#f3f4f6", color: "#374151" },
    Confirmed: { bg: "#e6f9f0", color: "#166534" },
    Pending: { bg: "#eff6ff", color: "#1e40af" },
    Cancelled: { bg: "#fef2f2", color: "#991b1b" },
  })[s] || { bg: "#f3f4f6", color: "#374151" };

const Overview = () => {
  const [packages,] = useState(DUMMY_PACKAGES);
  const totalRevenue = RECENT_BOOKINGS.filter(
    (b) => b.status === "Confirmed",
  ).reduce((s, b) => s + b.amount, 0);
  const totalBooked = packages.reduce((s, p) => s + p.booked, 0);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-[#1a1208] m-0">Overview</h1>
        <p className="mt-1 text-[#8a7f6e] text-sm">
          Welcome back — here&lsquo;s what&lsquo;s happening at Adventa.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap">
        <StatCard
          icon="✈️"
          label="Total Packages"
          value={packages.length}
          sub="2 added this month"
          accent="#d97706"
        />
        <StatCard
          icon="🎟️"
          label="Total Bookings"
          value={totalBooked}
          sub="Across all packages"
          accent="#0f766e"
        />
        <StatCard
          icon="💰"
          label="Revenue (Confirmed)"
          value={`$${totalRevenue.toLocaleString()}`}
          sub="From 3 confirmed bookings"
          accent="#7c3aed"
        />
        <StatCard
          icon="🌍"
          label="Destinations"
          value="6"
          sub="Across 5 continents"
          accent="#dc2626"
        />
      </div>

      <div className="flex gap-5 flex-wrap items-start">
        <div className="flex-[2_1_340px] min-w-0 bg-white border border-[#f0ece4] rounded-2xl p-6">
          <h2 className="text-sm font-bold text-[#1a1208] mb-4">
            Recent Bookings
          </h2>
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#f0ece4]">
                {["ID", "Customer", "Package", "Date", "Amount", "Status"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-2 py-1.5 text-[#8a7f6e] font-semibold text-xs"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {RECENT_BOOKINGS.map((b) => {
                const s = statusColor(b.status);
                return (
                  <tr key={b.id} className="border-b border-[#f9f6f0]">
                    <td className="px-2 py-2.5 text-[#b4a88e] font-mono">
                      {b.id}
                    </td>
                    <td className="px-2 py-2.5 text-[#1a1208] font-medium">
                      {b.customer}
                    </td>
                    <td className="px-2 py-2.5 text-[#4a3f2f]">{b.package}</td>
                    <td className="px-2 py-2.5 text-[#8a7f6e]">{b.date}</td>
                    <td className="px-2 py-2.5 text-[#1a1208] font-semibold">
                      ${b.amount.toLocaleString()}
                    </td>
                    <td className="px-2 py-2.5">
                      <span
                        className="px-2.5 py-0.75 rounded-full text-xs font-semibold inline-block"
                        style={{ background: s.bg, color: s.color }}
                      >
                        {b.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex-[1_1_200px] min-w-0 bg-white border border-[#f0ece4] rounded-2xl p-6">
          <h2 className="text-sm font-bold text-[#1a1208] mb-4">
            Package Fill Rate
          </h2>
          <div className="flex flex-col gap-3.5">
            {packages.map((p) => {
              const pct = Math.round((p.booked / p.seats) * 100);
              return (
                <div key={p.id}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs text-[#4a3f2f] font-medium">
                      {p.name.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <span className="text-xs text-[#8a7f6e]">
                      {p.booked}/{p.seats}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#f0ece4] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-400"
                      style={{
                        width: `${pct}%`,
                        background:
                          pct >= 100
                            ? "#d97706"
                            : pct > 60
                              ? "#0f766e"
                              : "#7c3aed",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#f0ece4] rounded-2xl p-6">
        <h2 className="text-sm font-bold text-[#1a1208] mb-4">
          All Tour Packages
        </h2>
        <div className="flex gap-4 flex-wrap">
          {packages.map((p) => {
            const s = statusColor(p.status);
            const pct = Math.round((p.booked / p.seats) * 100);
            return (
              <div
                key={p.id}
                className="flex-[1_1_220px] min-w-0 border border-[#f0ece4] rounded-xl overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3.5">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-sm font-bold text-[#1a1208]">
                      {p.name}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap"
                      style={{ background: s.bg, color: s.color }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="text-xs text-[#8a7f6e]">
                    📍 {p.destination}
                  </div>
                  <div className="flex justify-between mt-2.5 text-xs">
                    <span className="text-[#4a3f2f]">⏱ {p.duration}</span>
                    <span className="text-[#d97706] font-bold">
                      ${p.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 h-1 bg-[#f0ece4] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, background: "#d97706" }}
                    />
                  </div>
                  <div className="text-xs text-[#b4a88e] mt-1">
                    {p.booked} of {p.seats} seats filled
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Overview;
