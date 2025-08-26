addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Complex Worker Website</title>
<style>
  body { font-family: Arial, sans-serif; margin:0; padding:0; background:#f5f5f5; }
  header { background:#333; color:white; padding:20px; text-align:center; }
  nav { background:#444; color:white; padding:10px; text-align:center; }
  nav a { color:white; margin:0 10px; text-decoration:none; }
  main { padding:20px; }
  section { margin-bottom:30px; }
  footer { background:#333; color:white; padding:10px; text-align:center; }
  button { padding:10px 20px; font-size:16px; cursor:pointer; }
</style>
</head>
<body>
  <header>
    <h1>Welcome to My Worker Website</h1>
  </header>
  <nav>
    <a href="#about">About</a>
    <a href="#features">Features</a>
    <a href="#contact">Contact</a>
  </nav>
  <main>
    <section id="about">
      <h2>About</h2>
      <p>This is a complex website example served entirely from a Cloudflare Worker.</p>
    </section>
    <section id="features">
      <h2>Features</h2>
      <ul>
        <li>Serverless deployment</li>
        <li>Fast response</li>
        <li>Managed via Terraform</li>
      </ul>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
      <button onclick="showAlert()">Click Me!</button>
    </section>
  </main>
  <footer>
    &copy; 2025 My Worker Website
  </footer>

<script>
function showAlert() {
  alert("Hello from Cloudflare Worker!");
}
</script>
</body>
</html>
  `

  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  })
}
