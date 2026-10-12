// const question = document.getElementById("question");
// const askBtn = document.getElementById("askBtn");
// const answer = document.getElementById("answer");

// askBtn.addEventListener("click", async () => {

//     const userQuestion = question.value.trim();

//     if (!userQuestion) {
//         answer.textContent = "Please enter a question.";
//         return;
//     }

//     answer.textContent = "Thinking...";

//     try {

//         const response = await fetch("/ask", {
//             method: "POST",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify({
//                 question: userQuestion
//             })
//         });

//         const data = await response.json();

//         if (!response.ok) {
//     console.log("Backend Error:", data);
//     throw new Error(JSON.stringify(data));
// }

//         answer.textContent = data.answer;

//     } catch (error) {

//         answer.textContent = "Error: " + error.message;

//     }
// });

let numbers = [1, 2, 3];

let result = numbers.map((num) => num * 2);

console.log(result);