async function fetchData() {
  const response = await fetch('http://<BACKEND-EC2-PUBLIC-IP>:3000/api');
  const data = await response.text();
  document.getElementById('data').innerText = data;
}
