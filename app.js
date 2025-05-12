const answers = {
  answer1: "Yes, FrontendPro prepares you to develop the skills neccesary to land your first job.",
  answer2: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.",
  answer3: "We add new challenges every week for you to constantly improve.",
  answer4: "You can expect challenges of all types, from beginner, to intermediate, to advanced.",
  answer5: "No, it is not practical for you to use them, you should use pure hardcode code.",
}

const questionsTitle = document.querySelectorAll('.question-title h2')
const questionsAnswer = document.querySelectorAll('.question-bottom p')
const moreBtns = document.querySelectorAll('#moreBtn')
const lessBtns = document.querySelectorAll('#lessBtn')

questionsTitle.forEach((title, index) => {
  title.addEventListener('click', () => {
    title

    questionsAnswer[index].style.display = 'block'
  })
})