import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery — Our Wedding Portfolio',
  description: 'Browse our portfolio of luxury Indian destination weddings across Cancun, Italy, Dubai, Thailand, and more. Real weddings, real magic.',
};

const galleries = [
  {
    category: 'Riviera Maya',
    images: [
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop', alt: 'Beachfront mandap ceremony', span: 'col-span-1 row-span-2' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', alt: 'Indian bride in Riviera Maya', span: 'col-span-1' },
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop', alt: 'Sangeet night on the beach', span: 'col-span-1' },
    ],
  },
  {
    category: 'Italy',
    images: [
      { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop', alt: 'Amalfi Coast wedding ceremony', span: 'col-span-1' },
      { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=800&fit=crop', alt: 'Indian couple in Tuscany', span: 'col-span-1 row-span-2' },
      { src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=400&fit=crop', alt: 'Lake Como reception', span: 'col-span-1' },
    ],
  },
  {
    category: 'Dubai',
    images: [
      { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=800&fit=crop', alt: 'Dubai skyline wedding', span: 'col-span-1 row-span-2' },
      { src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop', alt: 'Desert ceremony at sunset', span: 'col-span-1' },
      { src: 'https://images.unsplash.com/photo-1546038088-39f5a6a1fd61?w=600&h=400&fit=crop', alt: 'Luxury ballroom reception Dubai', span: 'col-span-1' },
    ],
  },
  {
    category: 'Thailand',
    images: [
      { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop', alt: 'Phuket beach wedding', span: 'col-span-1' },
      { src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop', alt: 'Thai temple wedding details', span: 'col-span-1' },
      { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=800&fit=crop', alt: 'Indian couple at Koh Samui', span: 'col-span-1 row-span-2' },
    ],
  },
];

const allImages = [
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop', alt: 'Beachfront mandap ceremony', dest: 'Riviera Maya' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', alt: 'Bridal portrait', dest: 'Riviera Maya' },
  { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=800&fit=crop', alt: 'Amalfi ceremony', dest: 'Italy' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop', alt: 'Sangeet night', dest: 'Punta Cana' },
  { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop', alt: 'Dubai skyline', dest: 'Dubai' },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=600&fit=crop', alt: 'Beach pheras', dest: 'Thailand' },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=800&fit=crop', alt: 'Couple portrait', dest: 'Thailand' },
  { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop', alt: 'Italian villa wedding', dest: 'Italy' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=600&fit=crop', alt: 'Luxury mandap setup', dest: 'Dubai' },
  { src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop', alt: 'Desert ceremony', dest: 'Dubai' },
  { src: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=600&fit=crop', alt: 'Jamaica beach ceremony', dest: 'Jamaica' },
  { src: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=800&fit=crop', alt: 'Punta Cana resort wedding', dest: 'Punta Cana' },
];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-charcoal text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Portfolio</p>
        <h1 className="font-playfair text-5xl text-ivory font-bold mb-6">Our Wedding Gallery</h1>
        <p className="font-inter text-ivory/60 max-w-xl mx-auto">
          Every image is a story of love, family, and culture — celebrated against some of the world's most breathtaking backdrops. These are our couples.
        </p>
      </section>

      {/* Destination galleries */}
      {galleries.map((gallery) => (
        <section key={gallery.category} className="py-12 px-4 border-b border-champagne">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-2xl text-charcoal font-bold mb-6 flex items-center gap-4">
              {gallery.category}
              <span className="flex-1 h-px bg-champagne" />
            </h2>
            <div className="grid grid-cols-3 gap-3 h-80">
              {gallery.images.map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-sm ${img.span}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Full masonry grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl text-charcoal font-bold text-center mb-12">All Celebrations</h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {allImages.map((img, i) => (
              <div key={i} className="break-inside-avoid relative overflow-hidden rounded-sm group cursor-pointer">
                <Image src={img.src} alt={img.alt} width={600} height={i % 3 === 0 ? 800 : i % 2 === 0 ? 400 : 600} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-ivory font-inter text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.dest}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-beige text-center">
        <h2 className="font-playfair text-3xl text-charcoal font-bold mb-4">Your Wedding Could Be Next</h2>
        <p className="font-inter text-charcoal/70 mb-8 max-w-lg mx-auto">Every one of these celebrations started with a free 30-minute consultation.</p>
        <Link href="/inquire" className="inline-block bg-maroon text-ivory font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-maroon-dark transition-colors">
          Start Planning
        </Link>
      </section>
    </div>
  );
}
