
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

function iRotate(){

    if (rotation == 0){
        
        lastRotation = rotation;
        rotation++;
        currentX1-=pieceSize;
        currentY1-=pieceSize; // Boattom piece of i

        currentX2+=0; // second to bottom piece
        currentY2+=0;

        currentX3+=pieceSize; // second to top piece
        currentY3+=pieceSize;

        currentX4+=pieceSize*2; // top of i
        currentY4+=pieceSize*2;


    }
    else if (rotation ==1){
        lastRotation = rotation;
        rotation += 1;

        currentX1+=pieceSize;
        currentY1-=pieceSize;

        currentX2-=0;
        currentY2+=0;

        currentX3-=pieceSize;
        currentY3+=pieceSize;

        currentX4-=pieceSize*2;
        currentY4+=pieceSize*2;
    }

    else if (rotation ==2){
        lastRotation = rotation;
        rotation +=1;

        currentX1+=pieceSize;
        currentY1+=pieceSize;

        currentX2-=0;
        currentY2+=0;

        currentX3-=pieceSize;
        currentY3-=pieceSize;

        currentX4-=pieceSize*2;
        currentY4-=pieceSize*2;
    }

    else if (rotation >=3){
        lastRotation = rotation; // I have to do interesting movements to get them to sync back with the first position, but it's ok
        rotation =0;

        currentX1-=pieceSize;
        currentY1+=pieceSize;

        currentX2-=0;
        currentY2+=0;

        currentX3+=pieceSize;
        currentY3-=pieceSize;

        currentX4+=pieceSize*2;
        currentY4-=pieceSize*2;
    }

checkXCollide(currentX1,currentY1,true);
checkXCollide(currentX2,currentY2,true);
checkXCollide(currentX3,currentY3,true);
checkXCollide(currentX4,currentY4,true);
}

function lRotate(){

    if (rotation == 0){
        
        lastRotation = rotation;
        rotation++;

        currentX1-=pieceSize;
        currentY1+=pieceSize; 

        currentX2+=0; 
        currentY2+=0;

        currentX3+=pieceSize;
        currentY3+=pieceSize;

        currentX4+=pieceSize*2; 
        currentY4+=pieceSize*2;


    }
    else if (rotation ==1){
        lastRotation = rotation;
        rotation += 1;

        currentX1-=pieceSize;
        currentY1-=pieceSize;

        currentX2-=0;
        currentY2+=0;

        currentX3-=pieceSize;
        currentY3+=pieceSize;

        currentX4-=pieceSize*2;
        currentY4+=pieceSize*2;
    }

    else if (rotation ==2){
        lastRotation = rotation;
        rotation +=1;

        currentX1+=pieceSize;
        currentY1-=pieceSize;

        currentX2-=0;
        currentY2+=0;

        currentX3-=pieceSize;
        currentY3-=pieceSize;

        currentX4-=pieceSize*2;
        currentY4-=pieceSize*2;
    }

    else if (rotation >=3){
        lastRotation = rotation;
        rotation =0;

        currentX1+=pieceSize;
        currentY1+=pieceSize;

        currentX2-=0;
        currentY2+=0;

        currentX3+=pieceSize;
        currentY3-=pieceSize;

        currentX4+=pieceSize*2;
        currentY4-=pieceSize*2;
    }

checkXCollide(currentX1,currentY1,true);
checkXCollide(currentX2,currentY2,true);
checkXCollide(currentX3,currentY3,true);
checkXCollide(currentX4,currentY4,true);
}