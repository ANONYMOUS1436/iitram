const questions = [
    {
      question: "What is the primary purpose of sex education?",
      options: [
        "a) To teach people about the biological aspects of sex only.",
        "b) To teach healthy relationships, consent, and sexual rights, as well as the biological aspects.",
        "c) To promote abstinence before marriage.",
        "d) To teach people how to have sex."
      ],
      answer: "b"
    },
    {
      question: "What is one of the major benefits of comprehensive sex education?",
      options: [
        "a) It helps people avoid awkward conversations about sex.",
        "b) It ensures that everyone will get married.",
        "c) It provides knowledge on preventing unintended pregnancies and sexually transmitted infections (STIs).",
        "d) It teaches that sex should only happen in committed relationships."
      ],
      answer: "c"
    },
    {
      question: "True or False: Sex education should only be taught in high school.",
      options: ["a) True", "b) False"],
      answer: "b"
    },
    {
      question: "Which of the following is NOT typically included in comprehensive sex education?",
      options: [
        "a) Information on contraception methods.",
        "b) Teaching how to communicate about consent.",
        "c) Information about sexual orientation and gender identity.",
        "d) Encouraging students to engage in sexual activity."
      ],
      answer: "d"
    },
    {
      question: "How can learning about consent in sex education benefit individuals?",
      options: [
        "a) It helps people understand when it’s okay to say no or ask for a break.",
        "b) It allows people to know how to manipulate others into agreeing to sexual activity.",
        "c) It encourages people to avoid relationships.",
        "d) It teaches people to ignore their boundaries for the sake of the relationship."
      ],
      answer: "a"
    },
    {
      question: "Which of the following is a sign of a healthy relationship, as taught in sex education?",
      options: [
        "a) Constantly controlling your partner’s actions.",
        "b) Open communication and mutual respect.",
        "c) Believing your partner should agree with everything you say.",
        "d) Ignoring each other’s boundaries to avoid conflict."
      ],
      answer: "b"
    },
    {
      question: "Which of the following STIs can be prevented through vaccination?",
      options: [
        "a) Chlamydia",
        "b) HIV/AIDS",
        "c) Hepatitis B and Human Papillomavirus (HPV)",
        "d) Gonorrhea"
      ],
      answer: "c"
    },
    {
      question: "True or False: The concept of sexual orientation is a central topic in sex education.",
      options: ["a) True", "b) False"],
      answer: "a"
    },
    {
      question: "What does the term 'sexual health' in sex education typically include?",
      options: [
        "a) Only information about pregnancy prevention.",
        "b) Information about emotional well-being and healthy sexual relationships.",
        "c) Instructions for getting pregnant.",
        "d) Teaching people to avoid all forms of intimacy."
      ],
      answer: "b"
    },
    {
      question: "Why is it important to address issues like sexual harassment and violence in sex education?",
      options: [
        "a) It promotes fear and distrust.",
        "b) It helps individuals recognize unhealthy behaviors and stand up for their rights.",
        "c) It encourages avoidance of relationships.",
        "d) It helps people know how to manipulate others."
      ],
      answer: "b"
    },
    {
      question: "How does sex education help reduce the rates of teen pregnancy and STIs?",
      options: [
        "a) By providing access to free contraceptives.",
        "b) By teaching about the risks of sexual activity and prevention methods.",
        "c) By encouraging teens to wait until marriage.",
        "d) By providing students with sexual partners to practice safe sex."
      ],
      answer: "b"
    },
    {
      question: "What does the term 'gender identity' refer to in sex education?",
      options: [
        "a) The biological differences between males and females.",
        "b) A person’s personal sense of their gender, which may or may not match their biological sex.",
        "c) A system used to classify people into strict male or female categories.",
        "d) The roles that individuals are expected to play based on their gender."
      ],
      answer: "b"
    },
    {
      question: "Which of the following is a way to reduce the risk of sexually transmitted infections (STIs)?",
      options: [
        "a) Abstaining from sexual activity.",
        "b) Using barrier methods like condoms.",
        "c) Both a and b.",
        "d) None of the above."
      ],
      answer: "c"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let skipped = 0;
  let incorrect = 0;
  
  function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
      <div class="question">${questionData.question}</div>
      <form id="answers-form">
        ${questionData.options.map((option, index) => `
          <label>
            <input type="radio" name="answer" value="${String.fromCharCode(97 + index)}">
            ${option}
          </label>
        `).join('')}
      </form>
    `;
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('skip-btn').style.display = 'inline-block';
    document.getElementById('submit-btn').style.display = 'none';
  }
  
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === questions[currentQuestionIndex].answer) {
        score++;
      } else {
        incorrect++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        displayResults();
      }
    } else {
      alert('Please select an answer before proceeding.');
    }
  }
  
  function skipQuestion() {
    skipped++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      displayResults();
    }
  }
  
  function displayResults() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultContainer = document.getElementById('result');
    resultContainer.style.display = 'block';
    document.getElementById('score').innerText = `${score}`;
    document.getElementById('incorrect').innerText = `${incorrect}`;
    document.getElementById('skipped').innerText = `${skipped}`;
    document.getElementById('educational-link').style.display = 'inline-block';
  }
  
  function restartQuiz() {
    score = 0;
    skipped = 0;
    incorrect = 0;
    currentQuestionIndex = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
  }
  
  function redirectToEducationSite() {
    window.location.href = 'main.html';
  }
  
  displayQuestion();
  