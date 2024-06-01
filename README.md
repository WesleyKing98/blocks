# blocks


About me:
Hello! My name is Wesley King. I'm a hobbyist computer programmer with interest to move into the software development field. 
I have experience in writing: HTML, CSS, JavaScript, Python, PHP, MySQL, Lua and SmileBasic.
I'm currently working in the audio-visual field, but have loved coding in my free time, so I'm looking to move into that field soon.



About this game:
Blocks is a game that is very similar to the classic game Tetris. I started working on it as a fun portfolio project.
I started this Tetris-style game using HTML, CSS and Vanilla Javascript before having made a github account.
Unfortunately, I won't be able to have the entire history of this project on my github, but I'm resuming progress on the project, so further work will be reflected in this repository.

The project is approximately halfway done. 
So far I have added:
Responsive game board for various devices / screen sizes,
Random Piece Generation,
Collision Detection,
Partial Piece-Rotation,
Player-controlled moving pieces

Next to be added:

Full piece rotation,
All piece types generated,
Scoreboard,
"Tetris" detection, as well as all pieces lowering consequently,
On-Screen D-Pad and buttons for mobile players
Game Over if the pieces land above the game zone

L piece + rotations
I piece + rotations
Square Piece + rotations
T piece + rotations

Controls (as of now):
Directional buttons to move pieces,
A Key to rotate pieces.

Extra, fun notes:

Some Tetris-style game programs use image files for the pieces, but I decided to use basic HTML divs.
I wanted this project to not need any assets or images, but pure HTML, CSS and JavaScript. 

Instead of one solid piece that drops and moves, each piece consists of 4 separate blocks that fall and move together. 
Technically when you rotate the pieces, the piece isn’t actually “rotating”, but rather, the 4 blocks are warping positions together.


Currently working on 5-31-2024:

Function for checkBar: Checks if a line is occuring. If a line occurs, then it deletes those blocks and moves all blocks above that Y level down one space.
Then it checks again, up to 4 times, which is the max logically possible.

