const PHOTO = "/images/photo-break.png";

export default function PhotoBreak() {
  return (
    <div
      className="w-full h-[500px] md:h-[900px] bg-cover bg-center"
      style={{ backgroundImage: `url(${PHOTO})` }}
      role="img"
      aria-label="Harvey Specter shooting on location"
    />
  );
}
