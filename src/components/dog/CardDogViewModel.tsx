import { useState, useEffect } from "react";
import { fetchDogs } from "./services/DigAPI";

function CardDogViewModel() {
  const [useDog, setDog] = useState<any>(null);
  const [useLoading, setLoading] = useState(true);

  // list images hardcoded
  const images = [
    "https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1676390051589-bead49b416a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const data = await fetchDogs();
        console.log(data, "dogData");
        setDog(data);
      } catch (error) {
        alert("Error fetching dog data");
        console.error("Error fetching dog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDog();
  }, []);

  return {
    useDog,
    loading: useLoading,
    images,
  };
}

export default CardDogViewModel;
