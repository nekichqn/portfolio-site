// 1. ボタンを取得
const button = document.getElementById('btn')

// 2. ボタンにアクションを追加
// 3. 押したときの処理を書く
button.addEventListener('click', function () {
  // 4. 入力された文字を取得して
  const selectA = document.getElementById('mbti-a')
  const selectValueA = selectA.value
  const selectB = document.getElementById('mbti-b')
  const selectValueB = selectB.value

  // 5. spanタグに反映
  const result = document.getElementById('result')
  // 星(が入ったtemplete)を入れる変数を作る
  const star = document.getElementById('star')
  let starNum = 0

  // ボタンを押すたびにresult内の要素を削除する
  result.innerHTML = ''

  if (selectValueA === selectValueB) {
    // 星を3つ表示
    // result.textContent = 'ふつう'
    starNum = 3
  } else if (selectValueA === 'entp' && selectValueB === 'intj') {
    // 星を5つ表示
    // result.textContent = '期待大'
    starNum = 5
  } else {
    // 星を1つ表示
    starNum = 1
    // result.textContent = 'だめ'
  }

  for (let i = 0; i < starNum; i++) {
    const clone = star.content.cloneNode(true)
    result.appendChild(clone)
  }

  // result.textContent = "期待大";
  // result.textContent = "だめ";
  // result.textContent = "ふつう";
  // result.textContent = "NG";
  // result.textContent = "OK";
})
