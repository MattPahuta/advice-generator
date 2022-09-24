// Advice Slip API
// https://api.adviceslip.com/advice

// get advice function
async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const id = data.slip.id;
  const advice = data.slip.advice;
  displayAdvice(id, advice);
}

getAdvice(); 

function displayAdvice(id, advice) {
  const adviceId = document.querySelector('#advice-id');
  const adviceText = document.querySelector('#advice-text');
  adviceId.textContent = id;
  adviceText.textContent = advice;
}

document.querySelector('#advice-btn').addEventListener('click', getAdvice);