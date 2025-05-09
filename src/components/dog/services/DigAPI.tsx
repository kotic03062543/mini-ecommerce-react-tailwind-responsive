export async function fetchDogs(): Promise<any[]> {
  try {
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
