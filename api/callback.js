export default async function handler(req, res) {
  const { code } = req.query;
  const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;

  const tokenRes = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code,
      }),
    }
  );

  const data = await tokenRes.json();

  if (data.error) {
    res.end(JSON.stringify(data));
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.end(`
<!DOCTYPE html>
<html>
<body>
<script>
  (function() {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
        e.origin
      );
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body>
</html>
  `);
}
