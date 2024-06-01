

	// Hello! If you didn't read the README file, check it out. I'm Wesley, and here's my tetris style block game.
	// As of 10-23-2023, the game is a work in progress, and this is version 4. I started working on this game before -
	// making a github account, but now I'll be continuing progress of this game on my github.

	// Thanks for checking this out!!

	board = document.getElementById("gameBoard");

	boardSize = (window.innerHeight*0.90) - ((window.innerHeight*0.90)%10); //Sets height to 90% screen size, rounded down to nearest 10px
	board.style.width = boardSize/2  + "px"; // Game width is set to half the height
	board.style.height = boardSize +"px";
	board.style.left = (window.innerWidth/2)-(boardSize/4) + "px";


	// Initializing button press variables
	left = false;
	right = false;
	up = false;
	down = false;
	rotL = false;
	rotR = false;

	lastRotation = 0; // last rotation state to revert to, if rotation is blocked
	rotation = 0; // rotation state

	newPiece = true;
	pieceSize = (boardSize/10)/2; // Size of each block on screen

	pieceArray = []; // The array where the pieces get stored
	xArray = []; // The corresponding X array.
	yArray = []; // The corresponding Y array.

	spawnXPosition = pieceSize*3; // Spawns the piece 3 spaces inward (the middle of the board)
	spawnYPosition = 0;
	pieceGenerated = "S";

	currentX = spawnXPosition;
	currentY = spawnYPosition;
	lastX = spawnXPosition-pieceSize;
	lastY = spawnYPosition-pieceSize;


	dropMax = 40; // The ammount of frames needed to advance a drop stage
	dropTimer = dropMax;

	i = -4;
	// i Is my index counter for the 3 main arrays used in this game.
	//I start it at negative 4, as it goes up 4 before each piece is made.

	function generatePiece(){

		function generateZ(){
				
				currentX1 = spawnXPosition; // Assigns the 4 pairs of coordinates of the new piece.
				currentY1 = spawnYPosition;

				currentX2 = spawnXPosition;
				currentY2 = spawnYPosition-pieceSize;

				currentX3 = spawnXPosition+pieceSize;
				currentY3 = spawnYPosition-pieceSize;

				currentX4 = spawnXPosition+pieceSize;
				currentY4 = spawnYPosition-pieceSize*2;
		}


		function generateS(){
				
				currentX1 = spawnXPosition;
				currentY1 = spawnYPosition;

				currentX2 = spawnXPosition;
				currentY2 = spawnYPosition-pieceSize;

				currentX3 = spawnXPosition-pieceSize;
				currentY3 = spawnYPosition-pieceSize;

				currentX4 = spawnXPosition-pieceSize;
				currentY4 = spawnYPosition-pieceSize*2;			
		}



		function generateJ(){
				
				currentX1 = spawnXPosition;
				currentY1 = spawnYPosition;

				currentX2 = spawnXPosition-pieceSize;
				currentY2 = spawnYPosition;

				currentX3 = spawnXPosition;
				currentY3 = spawnYPosition-pieceSize;

				currentX4 = spawnXPosition;
				currentY4 = spawnYPosition-pieceSize*2;
			
		}

		function generateL(){

			currentX1 = spawnXPosition;
			currentY1 = spawnYPosition;

			currentX2 = spawnXPosition+pieceSize;
			currentY2 = spawnYPosition;

			currentX3 = spawnXPosition;
			currentY3 = spawnYPosition-pieceSize;

			currentX4 = spawnXPosition;
			currentY4 = spawnYPosition-pieceSize*2;

		}

		function generateO(){

			currentX1 = spawnXPosition;
			currentY1 = spawnYPosition;

			currentX2 = spawnXPosition+pieceSize;
			currentY2 = spawnYPosition;

			currentX3 = spawnXPosition;
			currentY3 = spawnYPosition-pieceSize;

			currentX4 = spawnXPosition+pieceSize;
			currentY4 = spawnYPosition-pieceSize;	
		}

		function generateI(){

			currentX1 = spawnXPosition;
			currentY1 = spawnYPosition;

			currentX2 = spawnXPosition;
			currentY2 = spawnYPosition-pieceSize;

			currentX3 = spawnXPosition;
			currentY3 = spawnYPosition-pieceSize*2;

			currentX4 = spawnXPosition;
			currentY4 = spawnYPosition-pieceSize*3;
		}

		function generateT(){

			currentX1 = spawnXPosition;
			currentY1 = spawnYPosition;

			currentX2 = spawnXPosition+pieceSize;
			currentY2 = spawnYPosition;

			currentX3 = spawnXPosition;
			currentY3 = spawnYPosition-pieceSize;

			currentX4 = spawnXPosition+pieceSize;
			currentY4 = spawnYPosition-pieceSize;
		}

		
if (newPiece == true){

			r = Math.floor(Math.random()*255); //Random RGB values. Right now, all pieces are completely randomly colored.
			g = Math.floor(Math.random()*255);
			b = Math.floor(Math.random()*255);

			i+=4;
			rotation =0;
			lastX = -99; // This is just to re-initialize these values
			lastY = -99;

			ranPiece = Math.floor(Math.random()*6); // RNG for generating a piece

			if (ranPiece==0){
				pieceGenerated = "Z";
				generateZ();
			}

			if (ranPiece==1){
				pieceGenerated = "S";
				generateS();
			}

			if (ranPiece==2){
				pieceGenerated = "J";
				generateJ();
			}

			if (ranPiece==3){
				pieceGenerated = "L";
				generateL();
			}

			if (ranPiece==4){
				pieceGenerated = "O";
				generateO();
			}

			if (ranPiece==5){
				pieceGenerated = "I";
				generateI();
			}

			if (ranPiece>=6){
				pieceGenerated = "T";
				generateT();
			}
			
				newBlock = document.createElement("div"); // New DIV element for each of the 4 blocks that make a piece.

				newBlock.className += 'pieceStyle'; // The piece universal style applied.

				newBlock.style.width = pieceSize +"px"; // Style elements that'll only apply to this individual piece.
				newBlock.style.height = pieceSize+"px";
				newBlock.style.backgroundColor="rgb("+r+","+g+","+b+")";

				newBlock.style.left = currentX1 + "px";
				newBlock.style.top = currentY1 + "px";

				pieceArray[i] = newBlock; // The new piece is added to the piece array.

				board.appendChild(newBlock); // New Piece is appened to the game board on the page.

				// Same process is applied 3 more times, for each of the blocks making a piece.

				newBlock = document.createElement("div"); // Second block.
				newBlock.className += 'pieceStyle';
				newBlock.style.width = pieceSize +"px";
				newBlock.style.height = pieceSize+"px";
				newBlock.style.backgroundColor="rgb("+r+","+g+","+b+")";
				
				newBlock.style.left = currentX2 + "px";
				newBlock.style.top = currentY2 + "px";
				pieceArray[i+1] = newBlock;
				board.appendChild(newBlock);

				newBlock = document.createElement("div"); // Third block
				newBlock.className += 'pieceStyle';
				newBlock.style.width = pieceSize +"px";
				newBlock.style.height = pieceSize+"px";
				newBlock.style.backgroundColor="rgb("+r+","+g+","+b+")";
				
				newBlock.style.left = currentX3 + "px";
				newBlock.style.top = currentY3 + "px";
				pieceArray[i+2] = newBlock;
				board.appendChild(newBlock);

				newBlock = document.createElement("div"); // Fourth block
				newBlock.className += 'pieceStyle';
				newBlock.style.width = pieceSize +"px";
				newBlock.style.height = pieceSize+"px";
				newBlock.style.backgroundColor="rgb("+r+","+g+","+b+")";
				
				newBlock.style.left = currentX4 + "px";
				newBlock.style.top = currentY4 + "px";
				pieceArray[i+3] = newBlock;
				board.appendChild(newBlock);

				newPiece = false;

		} // for new piece


	}


	function checkXCollide(currentX,currentY,isRotating){

		if (currentX<0 || currentX>(boardSize/2)-pieceSize) { // Checks if any pieces are out of bounds, left or right
			currentX1 = lastX1;
			currentX2 = lastX2;
			currentX3 = lastX3;
			currentX4 = lastX4;

			currentY1 = lastY1;
			currentY2 = lastY2;
			currentY3 = lastY3;
			currentY4 = lastY4;
			if (isRotating){rotation = lastRotation};

		}
		else{
			for (z=0;z<=yArray.length;z++){ // Checks if the block is colliding with another block
				if (currentY == yArray[z] && currentX == xArray[z]){
						currentX1 = lastX1;
						currentX2 = lastX2;
						currentX3 = lastX3;
						currentX4 = lastX4;

						currentY1 = lastY1;
						currentY2 = lastY2;
						currentY3 = lastY3;
						currentY4 = lastY4;
						if (isRotating){rotation = lastRotation};
					
				}
			}
		}
	
	}


	function checkYCollide(currentX,currentY){
		if (currentY >= boardSize ){ // Meaning, the piece has made contact with the floor of the game board

			xArray[i]=lastX1; // If the piece made contact, then the last legal positions are put into the position arrays
			yArray[i]=lastY1;

			xArray[i+1]=lastX2;
			yArray[i+1]=lastY2;

			xArray[i+2]=lastX3;
			yArray[i+2]=lastY3;

			xArray[i+3]=lastX4;
			yArray[i+3]=lastY4;

			newPiece = true; // A new piece can now be made, and the current piece will be logged in the array
		}
		else{ // If the piece didn't make contact with the floor, then these collisions are checked next
			for (z=0;z<=yArray.length;z++){
				if (currentY == yArray[z] && currentX == xArray[z]){
							
							xArray[i]=lastX1;
							yArray[i]=lastY1;

							xArray[i+1]=lastX2;
							yArray[i+1]=lastY2;

							xArray[i+2]=lastX3;
							yArray[i+2]=lastY3;

							xArray[i+3]=lastX4;
							yArray[i+3]=lastY4;
							newPiece = true;
					
				}
			}
		}

	}


	function zRotate(){  // Commented more on how this works in the sRotate function


		if (rotation == 0){
			lastRotation = rotation;
			rotation++;
			currentX1-=pieceSize;
			currentY1-=pieceSize;

			//currentX2+=0;
			//currentY2+=0;

			currentX3-=pieceSize;
			currentY3+=pieceSize;

			currentX4+=0
			currentY4+=pieceSize*2


		}
		else if (rotation >=1){
			lastRotation = rotation;
			rotation = 0;
			currentX1+=pieceSize;
			currentY1+=pieceSize;

			//currentX2+=0;
			//currentY2+=0;

			currentX3+=pieceSize;
			currentY3-=pieceSize;

			currentX4+=0;
			currentY4-=pieceSize*2;
		}

	checkXCollide(currentX1,currentY1,true);
	checkXCollide(currentX2,currentY2,true);
	checkXCollide(currentX3,currentY3,true);
	checkXCollide(currentX4,currentY4,true);
	}

	function sRotate(){


		if (rotation == 0){ // Checks which rotation state the piece is in. Some pieces have 2 states total, others have 4.

			lastRotation = rotation; // current rotation is saved, in case it needs to be reverted back upon collision.

			rotation++; // rotation state incremented


			currentX1-=pieceSize; // Then, all the pieces are updated according to how they need to be moved.
			currentY1-=pieceSize;

			//currentX2+=0;
			//currentY2+=0;

			currentX3-=pieceSize;
			currentY3+=pieceSize;

			currentX4+=0;
			currentY4+=pieceSize*2;


		}
		else if (rotation >=1){
			lastRotation = rotation;
			rotation = 0; // s Piece only has two rotation states, so it reverts back to 0 after 1.

			currentX1+=pieceSize; // Knowing the current position of the block with 'rotation', I can move them as needed.
			currentY1+=pieceSize;

			//currentX2 +=0;
			//currentY2 +=0;

			currentX3+=pieceSize;
			currentY3-=pieceSize;

			currentX4+=0;
			currentY4-=pieceSize*2;
		}
	checkXCollide(currentX1,currentY1,true); // If the rotation results in a collision, it is reverted. 
	checkXCollide(currentX2,currentY2,true); // All 4 sets of coordinates must pass this check, to go through.
	checkXCollide(currentX3,currentY3,true);
	checkXCollide(currentX4,currentY4,true);
	}


	function jRotate(){ // Commented more on how this works in the sRotate function
		
		

		if (rotation == 0){
			
			lastRotation = rotation;
			rotation++;
			currentX1+=0;
			currentY1+=0; // Boattom right piece of J

			currentX2+=0; // Buttom left piece of J
			currentY2+=0;

			currentX3-=pieceSize; // Middle piece of J
			currentY3+=0;

			currentX4+=pieceSize; // top of J
			currentY4+=pieceSize*2;


		}
		else if (rotation ==1){
			lastRotation = rotation;
			rotation += 1;

			currentX1-=0;
			currentY1-=pieceSize;

			currentX2-=0;
			currentY2+=0;

			currentX3+=0;
			currentY3+=0;

			currentX4-=pieceSize*2;
			currentY4+=pieceSize;
		}

		else if (rotation ==2){
			lastRotation = rotation;
			rotation +=1;

			currentX1-=0;
			currentY1-=0;

			currentX2+=pieceSize;
			currentY2+=0;

			currentX3-=0;
			currentY3+=0;

			currentX4-=pieceSize;
			currentY4-=pieceSize*2;
		}

		else if (rotation >=3){
			lastRotation = rotation; // I have to do interesting movements to get them to sync back with the first position, but it's ok
			rotation =0;

			currentX1-=0;
			currentY1+=pieceSize;

			currentX2-=pieceSize;
			currentY2+=0;

			currentX3+=pieceSize;
			currentY3+=0;

			currentX4+=pieceSize*2;
			currentY4-=pieceSize;
		}

	checkXCollide(currentX1,currentY1,true);
	checkXCollide(currentX2,currentY2,true);
	checkXCollide(currentX3,currentY3,true);
	checkXCollide(currentX4,currentY4,true);
	}



	function selectPieceToRotate(){ // This function is called when the player tries to rotate a piece
		switch(pieceGenerated){
			case "S":{sRotate()};break; // Then depending on which piece is currently generated, it calls one of these functions.
			case "Z":{zRotate()};break;
			case "J":{jRotate()};break;
		}

	}



	function movePiece(){
		dropTimer-=1;

		lastX1 = currentX1; // These 'Last' coordinates are basically the last known possible coordinates.
		lastY1 = currentY1; // So if a piece tries to move, and the move isn't possible due to collision, it reverts back to these coordinates.

		lastX2 = currentX2;
		lastY2 = currentY2;

		lastX3 = currentX3;
		lastY3 = currentY3;

		lastX4 = currentX4;
		lastY4 = currentY4;

		switch(true){ // Switch case for player pressing the directional keys.

			case left:{currentX1-=pieceSize;currentX2-=pieceSize;currentX3-=pieceSize;currentX4-=pieceSize;checkXCollide(currentX1,currentY1);checkXCollide(currentX2,currentY2);checkXCollide(currentX3,currentY3);checkXCollide(currentX4,currentY4); left=false} break;

			case right:{currentX1+=pieceSize;currentX2+=pieceSize;currentX3+=pieceSize;currentX4+=pieceSize;checkXCollide(currentX1,currentY1);checkXCollide(currentX2,currentY2);checkXCollide(currentX3,currentY3);checkXCollide(currentX4,currentY4); right=false} break;

			case down:{dropTimer -= 20;} break;

			case rotL:{selectPieceToRotate(); rotL = false } break;

			//case rotR:{zRotate()};break; // Haven't programmed the other rotation, will do soon
			
		}

		pieceArray[i].style.top =currentY1 +"px"; //Updates the CSS, so each block moves when needed
		pieceArray[i].style.left =currentX1 +"px";

		pieceArray[i+1].style.top =currentY2 +"px";
		pieceArray[i+1].style.left =currentX2 +"px";

		pieceArray[i+2].style.top =currentY3 +"px";
		pieceArray[i+2].style.left =currentX3 +"px";

		pieceArray[i+3].style.top =currentY4 +"px";
		pieceArray[i+3].style.left =currentX4 +"px";

		if (dropTimer <=0) { // This is the forced drop, even if the player doesn't press anything.

			currentY1 +=pieceSize;// The 'current' coordinates change first here, and if they are obstructed by collision,
			currentY2 +=pieceSize;// they will be reverted back to 'Last coordinates' in the checkYCollide Function.
			currentY3 +=pieceSize;
			currentY4 +=pieceSize;

			dropTimer = dropMax; // Drop timer is reset

			// Since the piece will always be moving downward right now, we only need to check for collisions on the Y axis right now.
			checkYCollide(currentX1,currentY1);
			if (newPiece ==false){checkYCollide(currentX2,currentY2)};
			if (newPiece ==false){checkYCollide(currentX3,currentY3)};
			if (newPiece ==false){checkYCollide(currentX4,currentY4)};
			// If all four pairs of coordinates pass these collision checks, then the current coordinates will stay updated and will not be reverted.



		}

	}


	function moveDownPieces(yLevelToDelete){ //After erasing the bar pieces

		for(q=0;q<pieceArray.length;q++){
			if(yArray[q] < yLevelToDelete){
				yArray[q]+=pieceSize;
				pieceArray[q].style.top = yArray[q] +"px";
			}
		}
	}

	function erasePieces(yLevelToDelete){// After a bar

		for(q=0;q<pieceArray.length;q++){
			if(yArray[q] == yLevelToDelete){
				pieceArray[q].parentNode.removeChild(pieceArray[q]);
				pieceArray.splice(q,1);
				yArray.splice(q,1);
				xArray.splice(q,1);
				q--;
			}
		}

		moveDownPieces(yLevelToDelete);

	}

	function checkBar(){// To check for a bar, I just have to confirm at least 10 blocks have the same Y coordinate;

		for (w=0;w<=20;w++){ // This loops 20 times, one for each board Y level.
			currentYLevel = pieceSize*w;
			blocksInLineCounter = 0;

				for (z=0;z<yArray.length;z++){// This loops for each block, for each Y level.
					if(yArray[z]==currentYLevel){
						blocksInLineCounter ++;
					}
			}
			if (blocksInLineCounter >=10) {
				//Line happens!
				erasePieces(currentYLevel);

			}

		}
		
	}


	function main(){

		generatePiece();
		movePiece();
		checkBar();
	}

	onkeydown = function(){
		key = event.keyCode;
		//alert(key);
		if (key == 38){rotL = true} //Up arrow key
		if (key == 39){right = true} //Right arrow key
		if (key == 37){left = true} //Left arrow key
		if (key == 40){down = true} //Down arrow key
		if (key == 65){rotL = true} //rotate left - A key

		if (key == 68){rotR = true} //rotate right - D key

	}


	onkeyup = function(){
		key = event.keyCode;
		//alert(key);
		if (key == 38){rotL = false} //Up arrow key
		if (key == 39){right = false}//Right arrow key
		if (key == 37){left = false} //Left arrow key
		if (key == 40){down = false} //Down arrow key
		if (key == 65){rotL = false} //rotate left - A key

		if (key == 68){rotR = false} //rotate right - D key
	}

	setInterval(main,1000/60);

