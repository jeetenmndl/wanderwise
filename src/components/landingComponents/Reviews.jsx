export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Digital Nomad",
      content:
        "Finally, an app that actually understands how groups plan trips. The packing list feature saved our lives in Iceland!",
    },
    {
      name: "Marcus Chen",
      role: "Family Traveler",
      content:
        "Planning for a family of five is stressful. Traverse made the itinerary sharing so simple that even my kids knew the plan.",
    },
    {
      name: "Elena Rodriguez",
      role: "Solo Backpacker",
      content:
        "I use it even when traveling solo. The UI is just so much cleaner than anything else out there. Highly recommend.",
    },
    {
      name: "David Smith",
      role: "Tour Guide",
      content:
        "I've started using this to share itineraries with my clients. They love the interactive map and the live updates.",
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-gray-100 text-gray-800">
      <div className="px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Loved by travelers everywhere</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl border border-gray-300"
            >
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-lg leading-relaxed mb-6 italic opacity-90">"{review.content}"</p>
              <div>
                <div className="font-bold">{review.name}</div>
                <div className="text-sm opacity-60">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
