'use strict';

{
  function render(quiz) {
    const main = document.querySelector('main');

    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = quiz[0];

    const ul = document.createElement('ul');
    const li0 = document.createElement('li');
    li0.textContent = quiz[1];
    li0.addEventListener('click', () => {
      if(quiz[4] === 0) {
        li0.classList.add('correct');
      } else {
        li0.classList.add('wrong');
      }
    });
    const li1 = document.createElement('li');
    li1.textContent = quiz[2];
    li1.addEventListener('click', () => {
      if(quiz[4] === 1) {
        li1.classList.add('correct');
      } else {
        li1.classList.add('wrong');
      }
    });
    const li2 = document.createElement('li');
    li2.textContent = quiz[3];
    li2.addEventListener('click', () => {
      if(quiz[4] === 2) {
        li2.classList.add('correct');
      } else {
        li2.classList.add('wrong');
      }
    });

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);

    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
  }

  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
  const quizzes = [
    ['①가족 () 언니가 제일 예뻐요.', '중에서', '들이서', '들이', 0],
    ['②매운 음식을 잘 () 됐어요.', '먹어', '먹게', '먹으려', 1],
    ['③일본은 () 유명해요.', '애니메이션을', '애니매이션으로', '애니매이션이', 2],
    ['④어제 잠을 못 잤어요. -().', '피곤해요', '피곤하겠어요', '피곤하세요', 1],
    ['⑤저는 () 닮았어요.', '엄마를', '엄마가', '엄마에', 0],
    ['⑥신발이 () 보여요.', '작다', '작아', '작게', 1],
    ['⑦저는 언니와 ()이 비슷해요.', '모양', '값', '생각', 2],
    ['⑧시험을 () 열심히 공부해야 해요.', '보다가', '봐야', '보려면', 2],
    ['⑨학교에 () 가지고 다녀요.', '가방을', '가방이', '가방으로', 0],
    ['⑩숙제가 ().', '많은가요', '많는가요', '많나요', 0],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });
}