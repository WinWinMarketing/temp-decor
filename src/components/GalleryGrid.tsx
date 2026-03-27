import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

interface GalleryImage {
  src: string;
  alt?: string;
}

interface Props {
  images: GalleryImage[];
  columns?: number;
}

export default function GalleryGrid({ images, columns = 3 }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({ src: img.src }));

  return (
    <>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${Math.min(columns, images.length)}, 1fr)` }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setOpen(true); }}
            className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer border-0 p-0 bg-transparent"
          >
            <img
              src={img.src}
              alt={img.alt || `Gallery image ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom, Counter]}
        styles={{
          container: { backgroundColor: 'rgba(26, 26, 26, 0.95)' },
        }}
        animation={{ fade: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
