import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Mohana decorated my daughter\'s 18th debut party and she did an amazing job! Everything was stunning — from the backdrop to the centrepieces. All our guests were blown away.',
    name: 'Mary Grace Hatt',
    role: '18th Debut Party',
  },
  {
    quote: "Mohana did an amazing job for the decor for all our wedding events. She added her own twist to the designs and made it even better than we could've imagined!",
    name: 'R.T.',
    role: 'Full Wedding Weekend Decor',
  },
  {
    quote: 'She handled all our family decorations so beautifully. Color coordination and finishing touches truly made the event special. Highly recommend Sai Decoration!',
    name: 'Nijantha Kanagu',
    role: 'Family Event Decoration',
  },
  {
    quote: "From our first consultation to the final reveal, the experience was seamless. Mohana truly listens to what you want and then makes it ten times better.",
    name: 'Priya & Arjun Patel',
    role: 'Cultural Wedding Celebration',
  },
  {
    quote: 'The balloon garland and themed props for my son\'s first birthday were absolutely show-stopping. Every parent at the party was asking who did the decor. Incredible work!',
    name: 'Rebecca Chen',
    role: 'First Birthday Party',
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="bg-linen rounded-2xl p-8 lg:p-10 h-full flex flex-col">
                <svg
                  className="w-8 h-8 text-gold/30 mb-6 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-charcoal leading-relaxed flex-grow mb-6" style={{ fontFamily: 'var(--font-family-body)' }}>
                  {t.quote}
                </p>
                <div className="border-t border-warm-gray-light pt-5">
                  <p className="font-semibold text-charcoal text-sm" style={{ fontFamily: 'var(--font-family-body)' }}>
                    {t.name}
                  </p>
                  <p className="text-warm-gray text-xs mt-0.5" style={{ fontFamily: 'var(--font-family-body)' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? 'bg-gold w-6' : 'bg-warm-gray-light hover:bg-warm-gray'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
