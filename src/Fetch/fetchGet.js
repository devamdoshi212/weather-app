export async function fetchGet(apiURL, pathName = "", method = "GET") {
  try {
    const request = await fetch(apiURL + pathName, {
      method,
    });
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
}
