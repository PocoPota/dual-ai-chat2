// 初期設定
let apiKey, sysP1, sysP2, sysPAll = "";
let history = [];

const chatStart = () => {
  // APIキー
  apiCheck();

  // システムプロンプトの取得
  sysP1 = document.getElementById("sysP1").value;
  sysP2 = document.getElementById("sysP2").value;
  sysPAll = document.getElementById("sysPAll").value;
}

const chatStop = () => {
  console.log("chat stop");
}

const memoryReset = () => {
  console.log("memory reset");
}

const sendMessage = () => {
  apiCheck();
}

const apiCheck = () =>{
  apiKey = document.getElementById("apiKey").value;
  if (!apiKey) {
    alert("APIキーが入力されていません");
    return;
  }
}