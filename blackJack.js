
		const card = [];
		let sumCard =0;
		let hasblackjack=false;
		let isAlive = true;
		let message="";
		let cardEl = document.querySelector("#Card-el")

        let player = {
            playerName :"jeetu",
            playerChips :122
        }

        let playerEl = document.getElementById("player-el")
        playerEl.textContent = player.playerName + ": Rs" + player.playerChips
        function getRendomCard() {
			let floorNumber1 = Math.floor(Math.random() * 13) + 1;
            if(floorNumber1 == 1){
                return 11
            }
            else if(floorNumber1 == 11 || floorNumber1 == 12 || floorNumber1 == 13){
                return 10
            }
			return floorNumber1;
		}
		function startGame() {
            let firstCard = getRendomCard();
		    let secondCard= getRendomCard();
            card = [firstCard , secondCard];
            sumCard =firstCard+secondCard;
			renderGame();
		}
		function renderGame(){
			// document.getElementById("sum-el").textContent = "sum : " + sumCard;
			//document.querySelector("#Card-el").textContent = "Card : " + card[0] + " " + card[1]
			cardEl.textContent = "Card : "
			for(let i = 0; i < card.length; i++){
				cardEl.textContent += card[i] + " "
			}
			document.querySelector("#sum-el").textContent = "sum : " + sumCard
				if(sumCard<21){
					message = "Do you want to draw a new card ?";
			}else if(sumCard == 21){
				message = "Wohoo! you've got Backjack !";
				hasblackjack= true;
			}else if(sumCard>21){
				message = "You're out of the game";
				isAlive=false;
			}else{
				console.log("sorry ");
			}
			document.getElementById("message-el").textContent = message;
			// console.log(message);
		}
		function newCard() {
			//console.log("Drawing a new card from the  deck");
            if(hasblackjack === false && isAlive === true){
                firstCard =getRendomCard();
                secondCard = getRendomCard();
                card.push(firstCard);
                card.push(secondCard);
                sumCard = firstCard + secondCard;
                renderGame();
            }
		}
        
       