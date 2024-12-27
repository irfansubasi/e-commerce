export default function ShopCategoryCard({ bgUrl }) {
  return (
    <div
      className={`relative bg-${bgUrl} bg-no-repeat bg-center bg-cover text-white aspect-square flex justify-center w-full`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-35 z-10"></div>
      <div className="z-20 flex flex-col items-center justify-center gap-10">
        <h5>CLOTHS</h5>
        <h6>5 Items</h6>
      </div>
    </div>
  );
}
