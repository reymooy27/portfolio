export default function handler(req, res) {
  const { OAUTH_CLIENT_ID, OAUTH_REDIRECT_URL } = process.env;

  const params = new URLSearchParams({
    client_id: OAUTH_CLIENT_ID,
    scope: "repo,user",
    redirect_uri: OAUTH_REDIRECT_URL,
  });

  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params}`,
  });
  res.end();
}
