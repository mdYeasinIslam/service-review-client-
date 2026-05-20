import { useState } from "react";
import Loader from "../../../base-component/Loader";
import useServices from "../../../hooks/useServices";

const CATEGORIES = [
  "Beach",
  "Adventure",
  "Cultural",
  "Wildlife",
  "City",
  "Mountain",
  "Desert",
  "Cruise",
];

const statusColor = (s) =>
  ({
    Active: { bg: "bg-emerald-50", color: "text-emerald-700" },
    "Sold Out": { bg: "bg-amber-50", color: "text-amber-900" },
    Draft: { bg: "bg-gray-100", color: "text-gray-700" },
    Confirmed: { bg: "bg-emerald-50", color: "text-emerald-700" },
    Pending: { bg: "bg-blue-50", color: "text-blue-900" },
    Cancelled: { bg: "bg-red-50", color: "text-red-900" },
  })[s] || { bg: "bg-gray-100", color: "text-gray-700" };

export default function ServicesPanel({ onAdd }) {
  const { services, loading } = useServices();

  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");
  const [deleting, setDeleting] = useState(null);
  const filtered = services?.filter(
    (p) =>
      (filterCat === "All" || p?.category === filterCat) &&
      (p?.name.toLowerCase().includes(search?.toLowerCase()) ),
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-start flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white m-0">
            Tour Packages
          </h1>
          <p className="mt-1 text-slate-300 text-sm">
            {services?.length} packages available
          </p>
        </div>
        <button
          onClick={onAdd}
          className="bg-amber-600 text-white border-none rounded-lg px-5 py-2 font-bold text-sm cursor-pointer flex items-center gap-1.5 hover:bg-amber-700"
        >
          + Add New Package
        </button>
      </div>

      <div className="flex gap-3 flex-wrap">
        <input
        //   value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search your destinations..."
          className="flex-1 min-w-60 px-3.5 py-2.5 border-2 border-amber-100 rounded-lg text-sm outline-none bg-white text-amber-950"
        />
        <select
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
          className="px-3.5 py-2.5 border-2 border-amber-100 rounded-lg text-sm bg-white text-amber-950 cursor-pointer"
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        {filtered?.length === 0 && (
          <div className="text-center py-12 text-amber-700 text-sm">
            No packages found.
          </div>
        )}
        {filtered?.map((p) => {
          const { _id, name, img, price } = p;

          const s = statusColor(p.status);
          return (
            <div
              key={_id}
              className={`bg-black/20 border border-amber-100 rounded-2xl flex overflow-hidden transition-opacity duration-300 ${
                deleting === p.id ? "opacity-40" : "opacity-100"
              }`}
            >
              <img
                src={img}
                alt={name}
                className="w-32 h-auto object-cover flex-shrink-0"
              />
              <div className="p-4 flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-bold text-white">
                      {p.name}
                    </span>
                    <span
                      className={`${s.bg} ${s.color} px-2.5 py-0.5 rounded-full text-xs font-bold`}
                    >
                      {p.status}
                    </span>
                    <span className="bg-amber-50 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-amber-50 text-amber-600 border-none rounded-lg px-3.5 py-1.5 text-xs font-semibold cursor-pointer hover:bg-amber-100">
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleting(p.id)}
                      className="bg-red-50 text-red-600 border-none rounded-lg px-3.5 py-1.5 text-xs font-semibold cursor-pointer hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {/* <div className="text-xs text-amber-700">
                  📍 {p.destination} · ⏱ {p.duration} · ⭐ {p.rating}
                </div> */}
                <div className="text-xs text-amber-900 leading-relaxed">
                  {p.description}
                </div>
                <div className="flex items-center gap-5 mt-1 flex-wrap">
                  <span className="text-xl font-extrabold text-amber-600">
                    ${price.toLocaleString()}
                    {/* <span className="text-xs font-medium text-amber-700">
                      /person
                    </span> */}
                  </span>
                  {/* <div className="flex-1 min-w-24">
                    <div className="flex justify-between text-xs text-amber-700 mb-1">
                      <span>Seats filled</span>
                      <span>
                        {p.booked}/{p.seats} ({pct}%)
                      </span>
                    </div>
                    <div className="h-1 bg-amber-100 rounded-full">
                      <div
                        className={`h-full rounded-full ${
                          pct >= 100 ? "bg-red-600" : "bg-amber-600"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
