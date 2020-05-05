export const fetcher = (url: string): Promise<any> => {
  return fetch(url).then((response) => {
    return response.json()
  })
}
