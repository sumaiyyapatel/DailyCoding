// script.js

document.getElementById('askButton').addEventListener('click', () => {
    const userName = document.getElementById('userName').value.trim();
    const userQuestion = document.getElementById('userQuestion').value.trim();
    const responseElement = document.getElementById('response');
    const eightBall = document.querySelector('.eight-ball');
  
    if (!userQuestion) {
      displayText(responseElement, "Please enter a question!");
      return;
    }
  
    // Add shake animation to the eight ball
    eightBall.classList.add('shake');
    setTimeout(() => {
      eightBall.classList.remove('shake');
      
      // Generate random response
      const randomNumber = Math.floor(Math.random() * 8);
      let eightBallResponse = '';
  
      switch (randomNumber) {
        case 0:
          eightBallResponse = 'It is certain!';
          break;
        case 1:
          eightBallResponse = 'It is decidedly so!';
          break;
        case 2:
          eightBallResponse = 'Reply hazy, try again!';
          break;
        case 3:
          eightBallResponse = 'Cannot predict now!';
          break;
        case 4:
          eightBallResponse = 'Do not count on it!';
          break;
        case 5:
          eightBallResponse = 'My sources say no!';
          break;
        case 6:
          eightBallResponse = 'Outlook not so good!';
          break;
        case 7:
          eightBallResponse = 'Signs point to yes!';
          break;
      }
  
      // Add dynamic text effect
      const fullResponse = `${userName ? userName + ' asks: ' : ''}${userQuestion}\nThe Magic Eight Ball says: ${eightBallResponse}`;
      displayText(responseElement, fullResponse);
    }, 1000); // Wait for shake animation to complete
  });
  
  // Typing effect function
  function displayText(element, text) {
    element.textContent = ''; // Clear previous content
    let index = 0;
  
    const typingInterval = setInterval(() => {
      element.textContent += text[index];
      index++;
  
      if (index === text.length) {
        clearInterval(typingInterval);
        element.style.border = "none"; // Remove cursor effect after typing
      }
    }, 50); // Adjust speed for typing effect
  }