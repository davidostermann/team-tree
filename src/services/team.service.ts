export async function getList() {
  const r = fetch('http://localhost:5000/list').then((res) => res.json())
  return r
}
