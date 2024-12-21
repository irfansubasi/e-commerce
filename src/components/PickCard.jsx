export default function PickCard({ category, imgSrc }) {
  return (
    <div
      style={{ backgroundImage: `url(${imgSrc})` }}
      className={`bg-no-repeat bg-center bg-cover relative w-full h-full`}
    >
      <h5 className="absolute bottom-5 left-5 bg-white text-txt px-10 py-2">
        {category}
      </h5>
    </div>
  );
}
