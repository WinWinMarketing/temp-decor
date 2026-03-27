import { useState } from 'react';

interface Project {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
}

interface Props {
  projects: Project[];
  categories: string[];
}

export default function PortfolioFilter({ projects, categories }: Props) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm uppercase tracking-[0.12em] font-medium rounded-full border transition-all duration-300 ${
              active === cat
                ? 'bg-gold text-ivory border-gold'
                : 'bg-transparent text-warm-gray border-warm-gray-light hover:border-gold hover:text-gold'
            }`}
            style={{ fontFamily: 'var(--font-family-body)' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <a
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group relative overflow-hidden rounded-2xl block"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span
                className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.2em] bg-gold/80 text-ivory rounded-full mb-3 font-medium"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                {project.category}
              </span>
              <h3
                className="text-xl text-ivory group-hover:text-gold-light transition-colors duration-300"
                style={{ fontFamily: 'var(--font-family-heading)', lineHeight: '1.2' }}
              >
                {project.title}
              </h3>
              <p className="text-xs text-ivory/60 mt-2 line-clamp-2" style={{ fontFamily: 'var(--font-family-body)' }}>
                {project.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
