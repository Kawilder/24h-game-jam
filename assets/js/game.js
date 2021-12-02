var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(Math.max(10, 20, 100));
console.log(Math.max(0, -50));

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = math.max(0, enemyHealth - damage);
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');

        // award player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
        } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        
        playerHealth = Math.max(0, playerHealth - enemyAttack);
        console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
        } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

// function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
            var pickedEnemyName = enemyNames[i];
  
            enemyHealth = randomNumber(40, 60);
  
            fight(pickedEnemyName);

            //if we're not at last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask player if they want to enter the shop berfore next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round? ");

                //if yes, take them to store
                if (storeConfirm){
                    shop();
                }  
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of health or has won all fights
    endGame();
};

//fuction to end the game
var endGame = function() {
    window.alert("The game has now ended. Lat's see how you did!");    
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    
    //ask player if they'ed like to play agioan
    var playAgainConfirm = window.confirm("would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

var shop = function () {
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPgrade your attack, or LEAVE the shop?"
    );

    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7){
                window.alert("Refilling players health by 20 for 7 dollers.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("you don't have enough money!")
            }

            break;
        case "UPGRADE": //new case 
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You dont have enough money!")
            }
            break;
        case "LEAVE": //newc ase
        case "leave":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You did not pick a valit option. Try again.");
            //call shop() again to force player ti pick a valid option
            shop();
            break;
    }
};

//function to generate a random numeric value
var randomNumber = function( min, max) {
    var value = Math.floor(Math.random() * (max - min) + 1) + 40;

    return value;
};

startGame();