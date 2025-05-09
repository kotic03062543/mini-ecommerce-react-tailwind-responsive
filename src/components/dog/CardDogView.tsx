import CardDogViewModel from "./CardDogViewModel";
import CardDog from "../utils/CardDog";
import Loading from "../utils/Loading";
import DataNotFoundPage from "../utils/DataNotFoundPage";

function card() {
  const { useDog, loading, images } = CardDogViewModel();
  // console.log(useDog, "useDog");
  // console.log(images, "images");
  if (loading) return <Loading />;
  if (!useDog) return <DataNotFoundPage />;

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-10">Dog Card</h1>
      <div className="flex flex-row flex-wrap gap-1 sm:gap-5 items-center justify-center">
        {useDog.map((dog: any) => {
          const randomImage = images[Math.floor(Math.random() * images.length)];
          return CardDog(dog, randomImage);
        })}
      </div>
    </div>
  );
}

export default card;
