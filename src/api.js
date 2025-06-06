const BASE_URL = 'https://linkshop-api.vercel.app';
const TEAM_ID = '16-송성학';

export async function getShopList() {
  const res = await fetch(`${BASE_URL}/${TEAM_ID}/linkshops `);
  const body = await res.json();
  return body;
}
