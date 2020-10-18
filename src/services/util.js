export const isBrowser = () => typeof window !== "undefined"

export const apiURL = process.env.GATSBY_API_URL ? process.env.GATSBY_API_URL : "https://api.innovationbattlefield.com"

export const getScoreboard = async () => {
  return fetch(`${apiURL}/teams/`)
    .then(resp => resp.json())
    .then(data => data)
}
