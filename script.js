const form = document.getElementById("registerForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const institution = document.getElementById("institution").value;

  try {
    await db.collection("registrations").add({
      name,
      email,
      institution,
      timestamp: new Date()
    });
    statusText.innerText = "✅ Registration successful!";
    form.reset();
  } catch (error) {
    statusText.innerText = "❌ Error: " + error.message;
  }
});
