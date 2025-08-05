const liffId = "2007876533-XpBAawGd";

async function main() {
  await liff.init({ liffId });

  if (!liff.isLoggedIn()) {
    liff.login();
    console.log('未ログインです');
    return;
  }

  const profile = await liff.getProfile();
  const idToken = liff.getDecodedIDToken();

  document.getElementById("displayName").textContent = profile.displayName;
  document.getElementById("pictureUrl").src = profile.pictureUrl;
  document.getElementById("email").textContent = idToken?.email || "（未取得）";
}

main();
