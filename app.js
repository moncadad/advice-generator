window.onload = function () {
  //Proper load indicator
  console.log("Page loaded!");

  //dom advice number
  const adviceIDBox = document.getElementById("adviceID");
  //dom advice msg
  const adviceMsgBox = document.getElementById("adviceMsg");
  //dom generateBtn
  const generateBtn = document.getElementById("generateBtn");

  // action button
  generateBtn.addEventListener("click", () => {
    generateAdvice();
  });

  // load
  // api code
  //api try catch and all that jazz

  function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        // Process the response data here
        console.log(data); // Example: Logging the data to the console

        let adviceID = data.slip.id;
        // console.log(adviceID);
        adviceIDBox.innerText = adviceID;
        let adviceMsg = data.slip.advice;
        // console.log(adviceMsg);
        adviceMsgBox.innerText = adviceMsg;
        // clean above section up somehow
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
      });
  }
};
