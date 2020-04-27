
async function getAPI(string) {
    const url = string;
    const result = await fetch(url);
    return result;
}