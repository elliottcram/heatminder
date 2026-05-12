const PHOTO =
  "https://www.figma.com/api/mcp/asset/4b515df1-389c-408e-8567-751ee1aeaa1e";

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
