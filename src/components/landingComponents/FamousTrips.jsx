import FamousTripCard from "../common/FamousTripCard"

export default function FamousTrips() {
    const famousTrips = [
        {
            name: "Kyoto Serenity",
            image: "https://tokyophotolog.wordpress.com/wp-content/uploads/2012/12/kitsune-fox-in-japanese-stands-sentry-with-key-to-rice-granary-at-fushimi-inari-taisha.jpg?w=848",
            cost: "$1,200",
            duration: "7 Days",
        },
        {
            name: "Mustang Adventure",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9d/e6/67/the-view-you-will-see.jpg?w=800&h=-1&s=1",
            cost: "$1,000",
            duration: "10 Days",
        },
        {
            name: "Swiss Alps Explorer",
            image: "https://alpexcursion.com/storage/media/Zermatt/zermatt-s-winter-in-switzerland.webp",
            cost: "$1,800",
            duration: "5 Days",
        },
        {
            name: "Machu Picchu Trek",
            image: "https://pictures.altai-travel.com/1920x0/panoramic-view-of-the-machu-picchu-35.jpg",
            cost: "$2,100",
            duration: "8 Days",
        }
    ]

    return (
        <section id="trips" className="py-24">
            <div className="px-4 sm:px-6 lg:px-20">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight">Famous Trips</h2>
                        <p className="text-muted-foreground mt-2">Ready-made itineraries from top travelers.</p>
                    </div>
                    <button className="text-sm font-bold border-b-2 border-purple-600 pb-1">View all</button>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {famousTrips.map((trip, index) => {
                        return (
                            <FamousTripCard key={index} trip={trip} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
