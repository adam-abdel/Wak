const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // ما يخليش الفورم يبدل الصفحة

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert("📩 Message Sent Successfully!");
    form.reset();
  } else {
    alert("❌ Something went wrong. Please try again!");
  }
});
