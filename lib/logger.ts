type Logging = { email: string; password: string };

let JWT_TOKEN: boolean | string = false;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getProductsStringEndPoint() {
  return `${API_URL}products`;
}

export async function getProducts(amount: number = 15, page: number = 0) {
  return fetch(
    `${getProductsStringEndPoint()}?_page=${page}&_limit=${amount}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN,
      },

      method: "GET",
    }
  )
    .then((d) => d.json())
    .then((d) => d);
}

export async function validateUser(logging: Logging) {
  return fetch(`${API_URL}auth/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logging),
    method: "POST",
  })
    .then((d) => d.json())
    .then((d) => {
      JWT_TOKEN = d.access_token;

      return d;
    })
    .catch(() => (JWT_TOKEN = false));
}
