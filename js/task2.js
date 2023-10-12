const enterNumber = () => {
    return new Promise((resolve, reject) => {
      const userNumber = Number(window.prompt("Enter a number (1 - 6):")); 
      const randomNumber = Math.floor(Math.random() * 6 + 1); 
  
      if (isNaN(userNumber) || userNumber >= 7) {
        reject(new Error("Wrong Input Type")); 
      }
  
      if (userNumber === randomNumber) {
        resolve({
          points: 2,
          randomNumber,
        });
      } else if (
        userNumber === randomNumber - 1 ||
        userNumber === randomNumber + 1
      ) {
        resolve({
          points: 1,
          randomNumber,
        });
      } else { 
        resolve({
          points: 0,
          randomNumber,
        });
      }
    });
  };
  
  const continueGame = () => {
    return new Promise((resolve) => {
      if (window.confirm("Do you want to continue?")) { // Ask if the user want to continue the game with a confirm modal
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
  
  const handleGuess = async () => {
    try {
      const result = await enterNumber(); // Instead of the then method, we can get the result directly by just putting await before the promise
  
      alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);
  
      const isContinuing = await continueGame();
  
      if (isContinuing) {
        handleGuess();
      } else {
        alert("Game ends");
      }
    } catch (error) { // Instead of catch method, we can use the try, catch syntax
      alert(error);
    }
  };
  
  handleGuess(); // Run handleGuess function