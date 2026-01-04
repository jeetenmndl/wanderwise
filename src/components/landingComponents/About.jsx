export default function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-300">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-3/4 rounded-2xl overflow-hidden">
                <img src="https://alpexcursion.com/storage/media/Zermatt/zermatt-s-winter-in-switzerland.webp" alt="Travel" className="object-cover w-full h-full" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://pictures.altai-travel.com/1920x0/panoramic-view-of-the-machu-picchu-35.jpg" alt="Packing" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9d/e6/67/the-view-you-will-see.jpg?w=800&h=-1&s=1" alt="Map" className="object-cover w-full h-full" />
              </div>
              <div className="aspect-3/4 rounded-2xl overflow-hidden">
                <img src="https://tokyophotolog.wordpress.com/wp-content/uploads/2012/12/kitsune-fox-in-japanese-stands-sentry-with-key-to-rice-granary-at-fushimi-inari-taisha.jpg?w=848" alt="Collaboration" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Born from a passion for exploration.</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We started Traverse because we were tired of losing track of flight confirmations in long email threads
              and forgetting who owed whom for dinner.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to make the planning phase as enjoyable as the trip itself. By removing the friction of
              coordination, we help you focus on what matters: the experience.
            </p>
            <div className="flex gap-12 border-t border-gray-300 pt-8">
              <div>
                <div className="text-3xl font-bold">500k+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Trips Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">180+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Countries Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
