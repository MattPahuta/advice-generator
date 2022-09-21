// Advice Slip API
// https://api.adviceslip.com/advice

// get advice function
async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  const id = data.slip.id;
  const advice = data.slip.advice;
  console.log(data.slip.advice)
  console.log(data.slip.id);

  displayAdvice(id, advice);

}


function displayAdvice(id, advice) {
  const adviceId = document.querySelector('#advice-id');
  const adviceText = document.querySelector('#advice-text');

  adviceId.textContent = id;
  adviceText.textContent = advice;

}

getAdvice()