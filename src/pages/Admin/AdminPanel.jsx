import { useState } from "react";


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


const statusColor = (s) =>
  ({
    Active: { bg: "#e6f9f0", color: "#166534" },
    "Sold Out": { bg: "#fef3c7", color: "#92400e" },
    Draft: { bg: "#f3f4f6", color: "#374151" },
    Confirmed: { bg: "#e6f9f0", color: "#166534" },
    Pending: { bg: "#eff6ff", color: "#1e40af" },
    Cancelled: { bg: "#fef2f2", color: "#991b1b" },
  })[s] || { bg: "#f3f4f6", color: "#374151" };



function Services({ packages, onAdd }) {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");
  const [deleting, setDeleting] = useState(null);

  const filtered = packages.filter(
    (p) =>
      (filterCat === "All" || p.category === filterCat) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.destination.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#1a1208",
              margin: 0,
            }}
          >
            Tour Packages
          </h1>
          <p style={{ margin: "4px 0 0", color: "#8a7f6e", fontSize: 14 }}>
            {packages.length} packages available
          </p>
        </div>
        <button
          onClick={onAdd}
          style={{
            background: "#d97706",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "10px 20px",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          + Add New Package
        </button>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search packages or destinations..."
          style={{
            flex: "1 1 240px",
            padding: "10px 14px",
            border: "1.5px solid #f0ece4",
            borderRadius: 10,
            fontSize: 14,
            outline: "none",
            background: "#fff",
            color: "#1a1208",
          }}
        />
        <select
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
          style={{
            padding: "10px 14px",
            border: "1.5px solid #f0ece4",
            borderRadius: 10,
            fontSize: 14,
            background: "#fff",
            color: "#1a1208",
            cursor: "pointer",
          }}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: "#b4a88e",
              fontSize: 15,
            }}
          >
            No packages found.
          </div>
        )}
        {filtered.map((p) => {
          const s = statusColor(p.status);
          const pct = Math.round((p.booked / p.seats) * 100);
          return (
            <div
              key={p.id}
              style={{
                background: "#fff",
                border: "1px solid #f0ece4",
                borderRadius: 16,
                display: "flex",
                gap: 0,
                overflow: "hidden",
                opacity: deleting === p.id ? 0.4 : 1,
                transition: "opacity 0.3s",
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: 140,
                  height: "auto",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  padding: "1rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#1a1208",
                      }}
                    >
                      {p.name}
                    </span>
                    <span
                      style={{
                        background: s.bg,
                        color: s.color,
                        padding: "2px 10px",
                        borderRadius: 20,
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      {p.status}
                    </span>
                    <span
                      style={{
                        background: "#f9f3e8",
                        color: "#92400e",
                        padding: "2px 10px",
                        borderRadius: 20,
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      style={{
                        background: "#f9f3e8",
                        color: "#d97706",
                        border: "none",
                        borderRadius: 8,
                        padding: "6px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleting(p.id)}
                      style={{
                        background: "#fef2f2",
                        color: "#dc2626",
                        border: "none",
                        borderRadius: 8,
                        padding: "6px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#8a7f6e" }}>
                  📍 {p.destination} · ⏱ {p.duration} · ⭐ {p.rating}
                </div>
                <div
                  style={{ fontSize: 13, color: "#4a3f2f", lineHeight: 1.5 }}
                >
                  {p.description}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    marginTop: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{ fontSize: 20, fontWeight: 800, color: "#d97706" }}
                  >
                    ${p.price.toLocaleString()}
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#b4a88e",
                      }}
                    >
                      /person
                    </span>
                  </span>
                  <div style={{ flex: 1, minWidth: 100 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 11,
                        color: "#8a7f6e",
                        marginBottom: 4,
                      }}
                    >
                      <span>Seats filled</span>
                      <span>
                        {p.booked}/{p.seats} ({pct}%)
                      </span>
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#f0ece4",
                        borderRadius: 99,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background: pct >= 100 ? "#dc2626" : "#d97706",
                          borderRadius: 99,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}




export default function AdminPanel() {
  return (
    <div className="flex min-h-screen  font-['Segoe_UI',system-ui,sans-serif]">


      {/* Main Content */}
      {/* <main className="flex-1 p-8 overflow-y-auto min-w-0 bg-amber-50 ">
        {page === "overview" && <Overview packages={packages} />}
        {page === "services" && (
          <Services packages={packages} onAdd={() => setPage("add-service")} />
        )}
        {page === "add-service" && (
          <AddService
            onCancel={() => setPage("services")}
            onSuccess={(pkg) => {
              setPackages((prev) => [pkg, ...prev]);
              setTimeout(() => setPage("services"), 1500);
            }}
          />
        )}
      </main> */}
    </div>
  );
}
