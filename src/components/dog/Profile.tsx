import { useParams, useSearchParams } from "react-router-dom";
import Button from "../utils/Button";

function Profile() {
  const queryString = useParams();
  const [useData] = useSearchParams();
  const { id } = queryString;

  const name = useData.get("name");
  const type = useData.get("type");
  const prices = useData.get("prices");
  // console.log(name, type, prices);

  return (
    <div>
      <h1>Dog Id : {id}</h1>
      <h1>Name : {name}</h1>
      <h1>Type : {type}</h1>
      <h1>Prices : {prices}</h1>
      <Button
        text="Buy"
        onClick={() => {
          alert("Buy สำเร็จ");
          setTimeout(() => {
            window.location.href = "/card";
          }, 100);
        }}
        className="bg-blue-500 text-white rounded hover:bg-blue-600 w-full py-3 mt-3"
      />
    </div>
  );
}

export default Profile;
