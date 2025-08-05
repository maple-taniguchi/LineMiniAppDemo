const liffId = "2007876533-XpBAawGd";

async function main() {
  try {
    await liff.init({ liffId });

    if (!liff.isLoggedIn()) {
      liff.login();
      document.getElementById("resultMessage").textContent = "LINEログイン中です...";
      return;
    }

    const profile = await liff.getProfile();

    // ユーザー名とアイコンを表示
    document.getElementById("displayName").textContent = profile.displayName;
    document.getElementById("pictureUrl").src = profile.pictureUrl;

    // 成功メッセージを表示
    document.getElementById("resultMessage").textContent = "ユーザー情報の取得に成功しました。";

  } catch (error) {
    // エラーメッセージを表示
    document.getElementById("resultMessage").textContent =
      "ユーザー情報の取得に失敗しました: " + error.message;
  }
}

main();
