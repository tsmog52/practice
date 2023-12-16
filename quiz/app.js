//問題文・選択肢・答えの3つを変数・定数で定義する
//問題文は1つしかないため定数を使用
const quiz = [
{
  question: '東北楽天ゴールデンイーグルスの球団創設はいつ？',
  answers: [
    '1994',
    '2000',
    '2004',
    '2009'  
  ],
  correct:'2004'
},{
    question: '東北楽天ゴールデンイーグルスの本拠地は？',
    answers: [
      '千葉県',
      '福岡県',
      '埼玉県',
      '宮城県'
  ],
  correct:'宮城県'
},{
    question: '東北楽天ゴールデンイーグルス出身で2013年に24連勝し日本プロ野球史上初のシーズン無敗での最多勝を達成した投手は？',
    answers: [
      '田中将大',
      '則本昂大',
      '松井裕樹',
      '岸孝之'
],
correct: '田中将大'
  }
];

const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent =  quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }
  quizIndex++;
  if(quizIndex < quizlength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizlength + 'です！')

  }

};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while(handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}












