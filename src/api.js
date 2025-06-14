const BASE_URL = 'https://linkshop-api.vercel.app';
const TEAM_ID = '16-송성학';

export async function getShopList() {
  const res = await fetch(`${BASE_URL}/${TEAM_ID}/linkshops`);
  const body = await res.json();
  return body;
}

export async function createShop(formData) {
  const res = await fetch(`${BASE_URL}/${TEAM_ID}/linkshops`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    throw new Error('쇼핑몰을 생성하는데 실패했습니다');
  }
  const body = await res.json();
  return body;
}
