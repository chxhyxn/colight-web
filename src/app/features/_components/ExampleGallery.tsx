import Image from 'next/image';

type ExampleGalleryProps = {
  title?: string;
  images?: string[];
};

export default function ExampleGallery({ title = '참고 이미지', images = ['/colight_background.jpg', '/colight_background.jpg', '/colight_background.jpg', '/colight_background.jpg'] }: ExampleGalleryProps) {
  const exampleImages = images.length > 0 ? images : ['/colight_background.jpg'];

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {exampleImages.map((src, index) => (
          <li key={`${src}-${index}`}>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[16/9]">
                <Image src={src} alt={`참고 이미지 ${index + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="px-4 md:px-5 py-3 text-sm text-neutral-400">참고 이미지 {index + 1}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}




