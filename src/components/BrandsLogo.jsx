export default function BrandsLogo({ url, imgSrc }) {
  return (
    <a href={url} target="_blank">
      <img className="grayscale max-w-24 max-h-20" src={imgSrc} alt={url} />
    </a>
  );
}
