async function test() {
  const response = await fetch("https://formsubmit.co/ajax/paxiphique@gmail.com", {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name: "Test", message: "Hello" })
  });
  
  const text = await response.text();
  console.log("Status:", response.status);
  console.log("Response:", text);
}
test();
