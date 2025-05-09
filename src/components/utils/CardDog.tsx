import Button from "./Button";

function cardDog(dog: any, randomImage: string) {
  return (
    <div
      key={dog.id}
      className="p-5 m-5 border rounded shadow-md max-w-[350px]"
    >
      <img
        src={randomImage}
        alt={dog.attributes.name}
        className="w-130 max-h-96 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold">
        Name: <span className="font-normal">{dog.attributes.name}</span>
      </h1>
      <h1 className="text-2xl font-bold">
        Type: <span className="font-normal">{dog.type}</span>
      </h1>
      <h1 className="text-2xl font-bold">
        Prices:{" "}
        <span className="font-medium text-red-600">
          {dog.attributes.life.max} $
        </span>
      </h1>
      <Button
        text="Buy"
        href={`/profile/${dog.id}?name=${dog.attributes.name}&type=${dog.type}&prices=${dog.attributes.life.max}`}
        onClick={() => {}}
        className="bg-blue-500 text-white rounded hover:bg-blue-600 w-full py-3 mt-3"
      />
    </div>
  );
}
export default cardDog;
