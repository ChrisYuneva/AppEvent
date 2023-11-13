export function api(url: string) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
