var GAME_NAME = "Serpent Works";
var DIFFICULTY = 2;
var TYPE_OF_AI = 1;
var Menu = /** @class */ (function () {
    function Menu() {
        this.game = new Game();
        this.width = 640;
        this.height = 480;
    }
    Menu.prototype.ShowMenu = function (container) {
        var _this = this;
        //SET UP BUTTONS AND CLICK EVENTS
        container.innerHTML = "";
        var left_column = document.createElement("div");
        left_column.className = "col-md-2";
        var menu = document.createElement("div");
        menu.className = "col-md-8";
        var title_div = document.createElement("div");
        title_div.className = "col-md-12";
        var lblTitle = document.createElement("label");
        lblTitle.appendChild(document.createTextNode(GAME_NAME));
        lblTitle.className = "title";
        title_div.appendChild(lblTitle);
        menu.appendChild(title_div);
        var difficulty_menu_left = document.createElement("div");
        var difficulty_menu_center = document.createElement("div");
        var difficulty_menu_right = document.createElement("div");
        difficulty_menu_left.className = "col-md-4";
        difficulty_menu_center.className = "col-md-4";
        difficulty_menu_right.className = "col-md-4";
        var btnEasy = document.createElement("button");
        btnEasy.appendChild(document.createTextNode("Easy"));
        btnEasy.className = "" + (DIFFICULTY == 1 ? 'btn btn-block btn-danger difficultyItem chosenDifficultyItem' : 'btn btn-block btn-danger difficultyItem');
        btnEasy.addEventListener("click", function (e) {
            DIFFICULTY = 1;
            btnEasy.className = 'btn btn-block btn-danger difficultyItem chosenDifficultyItem';
            btnNormal.className = 'btn btn-block btn-danger difficultyItem';
            btnHard.className = 'btn btn-block btn-danger difficultyItem ';
        });
        difficulty_menu_left.appendChild(btnEasy);
        var btnNormal = document.createElement("button");
        btnNormal.appendChild(document.createTextNode("Normal"));
        btnNormal.className = "" + (DIFFICULTY == 2 ? 'btn btn-block btn-danger difficultyItem chosenDifficultyItem' : 'btn btn-block btn-danger difficultyItem');
        btnNormal.addEventListener("click", function (e) {
            DIFFICULTY = 2;
            btnEasy.className = 'btn btn-block btn-danger difficultyItem';
            btnNormal.className = 'btn btn-block btn-danger difficultyItem chosenDifficultyItem';
            btnHard.className = 'btn btn-block btn-danger difficultyItem';
        });
        difficulty_menu_center.appendChild(btnNormal);
        var btnHard = document.createElement("button");
        btnHard.appendChild(document.createTextNode("Hard"));
        btnHard.className = "" + (DIFFICULTY == 3 ? 'btn btn-block btn-danger difficultyItem chosenDifficultyItem' : 'btn btn-block btn-danger difficultyItem');
        btnHard.addEventListener("click", function (e) {
            DIFFICULTY = 3;
            btnEasy.className = 'btn btn-block btn-danger difficultyItem';
            btnNormal.className = 'btn btn-block btn-danger difficultyItem';
            btnHard.className = 'btn btn-block btn-danger difficultyItem chosenDifficultyItem';
        });
        difficulty_menu_right.appendChild(btnHard);
        menu.appendChild(difficulty_menu_left);
        menu.appendChild(difficulty_menu_center);
        menu.appendChild(difficulty_menu_right);
        var difficulty_menu_col_md_4 = document.createElement("div");
        var difficulty_menu_col_md_8 = document.createElement("div");
        difficulty_menu_col_md_4.className = "col-md-4";
        difficulty_menu_col_md_8.className = "col-md-8";
        var select = document.createElement("select");
        var stack_div = document.createElement("div");
        stack_div.className = "col-md-12";
        var btnSinglePlayer = document.createElement("button");
        btnSinglePlayer.appendChild(document.createTextNode("1 Player"));
        btnSinglePlayer.className = 'btn btn-block btn-danger menuItem';
        btnSinglePlayer.addEventListener("click", function (e) {
            _this.StartSinglePlayer(container);
        });
        var btnTwoPlayer = document.createElement("button");
        btnTwoPlayer.appendChild(document.createTextNode("2 Player"));
        btnTwoPlayer.className = 'btn btn-block btn-danger menuItem';
        btnTwoPlayer.addEventListener("click", function (e) {
            // this.StartMultiPlayer(container);
            _this.gamelogic_old_code(container, _this.ShowMenu);
        });
        var btnSinglePlayerHighScores = document.createElement("button");
        btnSinglePlayerHighScores.appendChild(document.createTextNode("1 Player High Scores"));
        btnSinglePlayerHighScores.className = 'btn btn-block btn-danger menuItem';
        btnSinglePlayerHighScores.addEventListener("click", function (e) {
            _this.ShowHighScores(container);
        });
        var btnTwoPlayerHighScores = document.createElement("button");
        btnTwoPlayerHighScores.appendChild(document.createTextNode("2 Player High Scores"));
        btnTwoPlayerHighScores.className = 'btn btn-block btn-danger menuItem';
        btnTwoPlayerHighScores.addEventListener("click", function (e) {
            _this.ShowTwoPlayerHighScores(container);
        });
        var btnBFSSnake = document.createElement("button");
        btnBFSSnake.appendChild(document.createTextNode("Uninformed Search Serpent [BFS]"));
        btnBFSSnake.className = 'btn btn-block btn-danger menuItem';
        btnBFSSnake.addEventListener("click", function (e) {
            TYPE_OF_AI = 0;
            _this.ShowBFSSnake(container);
        });
        var btnAStarSnake = document.createElement("button");
        btnAStarSnake.appendChild(document.createTextNode("Informed Search Serpent [A*]"));
        btnAStarSnake.className = 'btn btn-block btn-danger menuItem';
        btnAStarSnake.addEventListener("click", function (e) {
            TYPE_OF_AI = 1;
            _this.ShowAStarSnake(container);
        });
        var btnSettings = document.createElement("button");
        btnSettings.appendChild(document.createTextNode("Settings"));
        btnSettings.className = 'btn btn-block btn-danger menuItem';
        btnSettings.addEventListener("click", function (e) {
            _this.ShowSettings(container);
        });
        var btnInstructions = document.createElement("button");
        btnInstructions.appendChild(document.createTextNode("Instructions"));
        btnInstructions.className = 'btn btn-block btn-danger menuItem';
        btnInstructions.addEventListener("click", function (e) {
            _this.ShowInstructions(container);
        });
        var btnExit = document.createElement("button");
        btnExit.appendChild(document.createTextNode("Exit"));
        btnExit.className = 'btn btn-block btn-danger menuItem';
        btnExit.addEventListener("click", function (e) {
            window.location.replace("http://google.com");
        });
        stack_div.appendChild(btnSinglePlayer);
        stack_div.appendChild(btnTwoPlayer);
        stack_div.appendChild(btnSinglePlayerHighScores);
        stack_div.appendChild(btnTwoPlayerHighScores);
        stack_div.appendChild(btnBFSSnake);
        stack_div.appendChild(btnAStarSnake);
        stack_div.appendChild(btnInstructions);
        stack_div.appendChild(btnSettings);
        stack_div.appendChild(btnExit);
        menu.appendChild(stack_div);
        container.appendChild(left_column);
        container.appendChild(menu);
    };
    Menu.prototype.StartSinglePlayer = function (container) {
        var board = new Board(container, WIDTH, HEIGHT, DIFFICULTY, TYPE_OF_AI);
        board.startSinglePlayer();
    };
    Menu.prototype.StartMultiPlayer = function (container) {
        var _this = this;
        //initalize game canas, same as single player
        isPaused = false;
        container.innerHTML = '';
        var canvas = document.createElement("canvas");
        canvas.setAttribute('width', WIDTH.toString());
        canvas.setAttribute('height', HEIGHT.toString());
        canvas.id = 'game';
        var ctx = canvas.getContext("2d");
        ctx.font = "22px Tahoma";
        var quitButton = document.createElement("button");
        quitButton.className = 'quit red';
        quitButton.appendChild(document.createTextNode("✖"));
        quitButton.addEventListener("click", function () {
            _this.ShowMenu(container);
        });
        container.appendChild(quitButton);
        container.appendChild(canvas);
        //set up both players starting stats
        var player1 = [];
        var p1x = 5;
        var p1y = 5;
        var length1 = 5;
        var player2 = [];
        var p2x = 15;
        var p2y = 15;
        var length2 = 5;
        //create and set up each player's apple
        var apple1 = this.game.createApple2(player1, player2);
        var apple2 = this.game.createApple2(player1, player2);
        var apple1img = document.getElementById("apple");
        var apple2img = document.getElementById("apple2");
        var sApple;
        setInterval(this.game.createSpecialApple2(player1, player2, function (a) {
            sApple = a;
        }), 15000);
        var d1x = 1;
        var d1y = 0;
        var d2x = -1;
        var d2y = 0;
        document.addEventListener("keydown", function (e) {
            // change either player's direction or pause
            switch (e.keyCode) {
                case 37:
                    d1x = -1;
                    d1y = 0;
                    break;
                case 38:
                    d1x = 0;
                    d1y = -1;
                    break;
                case 39:
                    d1x = 1;
                    d1y = 0;
                    break;
                case 40:
                    d1x = 0;
                    d1y = 1;
                    break;
                case 65:
                    d2x = -1;
                    d2y = 0;
                    break;
                case 87:
                    d2x = 0;
                    d2y = -1;
                    break;
                case 68:
                    d2x = 1;
                    d2y = 0;
                    break;
                case 83:
                    d2x = 0;
                    d2y = 1;
                    break;
                case 80:
                    isPaused = !isPaused;
                    if (isPaused)
                        clearInterval(cycle);
                    else
                        cycle = setInterval(game, 60);
                    break;
            }
        });
        var interval = 60;
        var cycle = setInterval(play, interval);
        var game = this.game;
        var getName = this.getName;
        var ShowMenu = this.ShowMenu;
        function play() {
            //refresh
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
            // draw player 1's head and apple
            ctx.fillStyle = "#0000FF";
            ctx.fillRect(10 + p1x * BLOCK_SIZE, 40 + p1y * BLOCK_SIZE, 15, 15);
            // ctx.drawImage(apple1img, 10 + apple1.x * BLOCK_SIZE, 40 + apple1.y * BLOCK_SIZE);
            // draw player 2's head and apple
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(10 + p2x * BLOCK_SIZE, 40 + p2y * BLOCK_SIZE, 15, 15);
            ctx.drawImage(this.game.apple2img, 10 + apple2.x * BLOCK_SIZE, 40 + apple2.y * BLOCK_SIZE);
            // draw special apple
            ctx.fillStyle = "#FF00FF";
            ctx.fillRect(10 + sApple.x * BLOCK_SIZE, 40 + sApple.y * BLOCK_SIZE, 15, 15);
            //check colissions
            if (!game.check2(p1x, p1y, player1, player2) && !game.check2(p2x, p2y, player1, player2)) {
                //shift boddies and draw them
                player1.push({ x: p1x, y: p1y });
                player2.push({ x: p2x, y: p2y });
                if (player1.length > length1)
                    player1.shift();
                if (player2.length > length2)
                    player2.shift();
                game.drawPlayer(ctx, player1, '#0000FF');
                p1x += d1x;
                p1y += d1y;
                game.drawPlayer(ctx, player2, '#FF0000');
                p2x += d2x;
                p2y += d2y;
                //wrap both players
                if (p1x === hSize)
                    p1x = 0;
                else if (p1x === -1)
                    p1x = hSize - 1;
                if (p1y === vSize)
                    p1y = 0;
                else if (p1y === -1)
                    p1y = vSize - 1;
                if (p2x === hSize)
                    p2x = 0;
                else if (p2x === -1)
                    p2x = hSize - 1;
                if (p2y === vSize)
                    p2y = 0;
                else if (p2y === -1)
                    p2y = vSize - 1;
                //if any of them has eaten an apple, grow them
                if (p1x === apple1.x && p1y === apple1.y) {
                    length1++;
                    apple1 = game.createApple(player1);
                }
                if (p1x === sApple.x && p1y === sApple.y) {
                    switch (sApple.type) {
                        case "big":
                            length1 += 2;
                            break;
                        case "minimize":
                            length1 -= Math.round(length / 10);
                            break;
                        case "speed":
                            interval *= 0.955;
                            clearInterval(cycle);
                            cycle = setInterval(game, interval);
                            setTimeout(function () {
                                interval *= 1 / 0.955;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                            }, 5000);
                            break;
                        case "slow":
                            interval *= 1.045;
                            clearInterval(cycle);
                            cycle = setInterval(game, interval);
                            setTimeout(function () {
                                interval *= 1 / 1.045;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                            }, 5000);
                            break;
                    }
                    game.createSpecialApple2(player1, player2, function (a) { return sApple = a; });
                }
                if (p2x === apple2.x && p2y === apple2.y) {
                    length2++;
                    apple2 = this.game.createApple(player2);
                }
                if (p2x === sApple.x && p2y === sApple.y) {
                    switch (sApple.type) {
                        case "big":
                            length2 += 2;
                            break;
                        case "minimize":
                            length2 -= Math.round(length / 10);
                            break;
                        case "speed":
                            interval *= 0.945;
                            clearInterval(cycle);
                            cycle = setInterval(game, interval);
                            setTimeout(function () {
                                interval *= 1 / 0.945;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                            }, 5000);
                            break;
                        case "slow":
                            interval *= 1.055;
                            clearInterval(cycle);
                            cycle = setInterval(game, interval);
                            setTimeout(function () {
                                interval *= 1 / 1.055;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                            }, 5000);
                            break;
                    }
                    game.createSpecialApple2(player1, player2, function (a) { return sApple = a; });
                }
                game.drawPlayer(ctx, player2, '#0000FF');
                ctx.fillText("Player 1 - Length: " + length1, 15, 18);
                game.drawPlayer(ctx, player2, '#FF0000');
                ctx.fillText("Player 2 - Length: " + length2, 315, 18);
            }
            else {
                getName(canvas, ctx, "Enter team name: ", function (name) {
                    game.add2playerHighScore(length1 + length2, name);
                    ShowMenu(container);
                });
                clearInterval(cycle);
            }
        }
    };
    Menu.prototype.ShowHighScores = function (container) {
        var _this = this;
        container.innerHTML = "";
        var left_column = document.createElement("div");
        left_column.className = "col-md-2";
        var menu = document.createElement("div");
        menu.className = "col-md-8";
        for (var score in HighScores) {
            container.innerHTML += (parseInt(score) + 1) + '. ' + HighScores[score].name + ' - ' + HighScores[score].score + '<br/>';
        }
        var backButton = document.createElement("button");
        backButton.appendChild(document.createTextNode("Go Back"));
        backButton.addEventListener("click", function () { return _this.ShowMenu(container); });
        backButton.className = 'btn btn-block btn-danger menuItem';
        menu.appendChild(backButton);
        container.appendChild(left_column);
        container.appendChild(menu);
    };
    Menu.prototype.ShowTwoPlayerHighScores = function (container) {
        var _this = this;
        container.innerHTML = "";
        var left_column = document.createElement("div");
        left_column.className = "col-md-2";
        var menu = document.createElement("div");
        menu.className = "col-md-8";
        for (var score in TwoPlayerHighScores) {
            container.innerHTML += (parseInt(score) + 1) + '. ' + TwoPlayerHighScores[score].name + ' - ' + TwoPlayerHighScores[score].score + '<br/>';
        }
        var backButton = document.createElement("button");
        backButton.appendChild(document.createTextNode("Go Back"));
        backButton.addEventListener("click", function () { return _this.ShowMenu(container); });
        backButton.className = 'btn btn-block btn-danger menuItem';
        menu.appendChild(backButton);
        container.appendChild(left_column);
        container.appendChild(menu);
    };
    Menu.prototype.getName = function (canvas, ctx, text, cb) {
        //setup screen
        var name = '';
        ctx.fillStyle = 'white';
        ctx.fillRect(100, 180, 440, 60);
        ctx.fillStyle = 'black';
        ctx.fillText(text + name, 110, 210);
        //listen to keystrokes
        document.addEventListener("keyup", listenToName, true);
        function listenToName(e) {
            // if character or number add to name, if backspace shorten last char, if enter
            // callback function and remove this event listener
            if (e.key.length == 1 && e.key.match(/[a-z0-9]/i))
                name += e.key;
            else if (e.key == 'Backspace')
                name = name.slice(0, -1);
            else if (e.key == 'Enter') {
                cb(name);
                document.removeEventListener("keyup", listenToName, true);
            }
            //refresh name dialog
            ctx.fillStyle = 'white';
            ctx.fillRect(100, 180, 440, 60);
            ctx.fillStyle = 'black';
            ctx.fillText(text + name, 110, 210);
        }
    };
    Menu.prototype.ShowBFSSnake = function (container) {
        var board = new Board(container, WIDTH, HEIGHT, DIFFICULTY, TYPE_OF_AI);
        board.start();
    };
    Menu.prototype.ShowAStarSnake = function (container) {
        // start game, set up canvas, and create quit button
        var board = new Board(container, WIDTH, HEIGHT, DIFFICULTY, TYPE_OF_AI);
        board.start();
    };
    Menu.prototype.ShowInstructions = function (container) {
        var _this = this;
        container.innerHTML = "";
        var left_column = document.createElement("div");
        left_column.className = "col-md-2";
        var menu = document.createElement("div");
        menu.className = "col-md-8";
        var lines = [
            "Don't run the snake into its own tail: you will die.",
            'Use your cursor keys: up, left, right, and down.',
            'Keyboard "P" may also be used for "Play" and "Pause"',
            'Eat the colored apples to gain points.',
            "You win if the length of your snake equals all the points of the board"
        ];
        container.innerHTML += "<h1>Instructions</h1><br/>";
        var i = 1;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            container.innerHTML += "<span>" + i + ". " + line + "</span><br/>";
            i += 1;
        }
        var backButton = document.createElement("button");
        backButton.appendChild(document.createTextNode("Go Back"));
        backButton.addEventListener("click", function () { return _this.ShowMenu(container); });
        backButton.className = 'btn btn-block btn-danger menuItem';
        menu.appendChild(backButton);
        container.appendChild(left_column);
        container.appendChild(menu);
    };
    Menu.prototype.ShowSettings = function (container) {
        var _this = this;
        container.innerHTML = "";
        var left_column = document.createElement("div");
        left_column.className = "col-md-2";
        var menu = document.createElement("div");
        menu.className = "col-md-8";
        container.innerHTML += "\n        <div class=\"col-md-12\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n                <h1>Settings</h1><br/>\n                \n                <span id=\"current_difficulty\">Current Difficulty " + (DIFFICULTY == 1 ? "Easy" : DIFFICULTY == 2 ? "Normal" : "Hard") + "</span><br><br>\n                <div class=\"form-group\">\n                  <span for=\"sel1\">Select Difficulty:</span>\n                  <select class=\"form-control\" id=\"selectDifficulty\" onchange=\"Menu.changeDifficulty()\">\n                        <option value=\"1\">Easy</option>\n                        <option value=\"2\">Normal</option>\n                        <option value=\"3\">Hard</option>\n                  </select>\n                </div><br>\n                \n                <span id=\"current_resolution\">Current Resolution " + WIDTH + " x " + HEIGHT + "</span><br><br>\n                <div class=\"form-group\">\n                  <span for=\"sel1\">Select Resolution:</span>\n                  <select class=\"form-control\" id=\"resolution\" onchange=\"Menu.changeResolution()\">\n<option value=\"" + (this.width - (this.width * 0.25)) + "," + (this.height - (this.height * 0.25)) + "\">" + (this.width - (this.width * 0.25)) + " x " + (this.height - (this.height * 0.25)) + "</option>\n<option value=\"" + (this.width - (this.width * 0.125)) + "," + (this.height - (this.height * 0.125)) + "\">" + (this.width - (this.width * 0.125)) + " x " + (this.height - (this.height * 0.125)) + "</option>                  \n<option value=\"" + this.width + "," + this.height + "\">" + this.width + " x " + this.height + "</option>\n<option value=\"" + (this.width + (this.width * 0.125)) + "," + (this.height + (this.height * 0.125)) + "\">" + (this.width + (this.width * 0.125)) + " x " + (this.height + (this.height * 0.125)) + "</option>\n<option value=\"" + (this.width + (this.width * 0.25)) + "," + (this.height + (this.height * 0.25)) + "\">" + (this.width + (this.width * 0.25)) + " x " + (this.height + (this.height * 0.25)) + "</option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>    \n        </div>\n        ";
        var btnPlayVideo = document.createElement("button");
        btnPlayVideo.appendChild(document.createTextNode("Play Music"));
        btnPlayVideo.addEventListener("click", function () { return $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); });
        btnPlayVideo.className = 'btn btn-block btn-danger menuItem';
        var btnPauseVideo = document.createElement("button");
        btnPauseVideo.appendChild(document.createTextNode("Pause Music"));
        btnPauseVideo.addEventListener("click", function () { return $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); });
        btnPauseVideo.className = 'btn btn-block btn-danger menuItem';
        var btnBack = document.createElement("button");
        btnBack.appendChild(document.createTextNode("Go Back"));
        btnBack.addEventListener("click", function () { return _this.ShowMenu(container); });
        btnBack.className = 'btn btn-block btn-danger menuItem';
        menu.appendChild(btnPlayVideo);
        menu.appendChild(btnPauseVideo);
        menu.appendChild(btnBack);
        container.appendChild(left_column);
        container.appendChild(menu);
    };
    Menu.changeResolution = function () {
        // console.log($("#resolution")[0].value);
        var width_and_height = $("#resolution")[0].value.split(",");
        WIDTH = parseInt(width_and_height[0]);
        HEIGHT = parseInt(width_and_height[1]);
        console.log(WIDTH, HEIGHT);
        var msg = "Resolution changed to " + WIDTH + " x " + HEIGHT;
        document.getElementById("current_resolution").innerHTML = msg.toString();
    };
    Menu.changeDifficulty = function () {
        var new_difficulty = document.getElementById("selectDifficulty").value;
        DIFFICULTY = new_difficulty;
        console.log(DIFFICULTY);
        var msg = "Difficulty changed to " + (DIFFICULTY == 1 ? "Easy" : DIFFICULTY == 2 ? "Normal" : "Hard");
        document.getElementById("current_difficulty").innerHTML = msg.toString();
    };
    Menu.prototype.gamelogic_old_code = function (container, modern_ShowMenu) {
        function ShowMenu(container) {
            //SET UP BUTTONS AND CLICK EVENTS
            container.innerHTML = 'SNAKES GAME';
            var SPBtn = document.createElement("button");
            SPBtn.appendChild(document.createTextNode("1 Player"));
            SPBtn.className = 'menuItem';
            SPBtn.addEventListener("click", function (e) {
                StartSinglePlayer(container);
            });
            var MPBtn = document.createElement("button");
            MPBtn.appendChild(document.createTextNode("2 Player"));
            MPBtn.className = 'menuItem';
            MPBtn.addEventListener("click", function (e) {
                x_StartMultiPlayer(container);
            });
            var HSbtn = document.createElement("button");
            HSbtn.appendChild(document.createTextNode("1 Player High Scores"));
            HSbtn.className = 'menuItem';
            HSbtn.addEventListener("click", function (e) {
                ShowHighScores(container);
            });
            var TPHSbtn = document.createElement("button");
            TPHSbtn.appendChild(document.createTextNode("2 Player High Scores"));
            TPHSbtn.className = 'menuItem';
            TPHSbtn.addEventListener("click", function (e) {
                ShowTwoPlayerHighScores(container);
            });
            container.appendChild(SPBtn);
            container.appendChild(MPBtn);
            container.appendChild(HSbtn);
            container.appendChild(TPHSbtn);
        }
        var HighScores = [];
        var TwoPlayerHighScores = [];
        var isPaused;
        var WIDTH = 640;
        var HEIGHT = 480;
        var hSize = 40;
        var vSize = 28;
        var BLOCK_SIZE = (640 - 40) / hSize;
        var SNAKE_WIDTH = BLOCK_SIZE - 4;
        var appleTypes = ['big', 'speed', 'slow', 'minimize'];
        function StartSinglePlayer(container) {
            // start game, set up canvas, and create quit button
            isPaused = false;
            var cycle;
            container.innerHTML = '';
            var canvas = document.createElement("canvas");
            canvas.setAttribute('width', WIDTH);
            canvas.setAttribute('height', HEIGHT);
            canvas.id = 'game';
            container.appendChild(canvas);
            var quitButton = document.createElement("button");
            quitButton.className = 'quit';
            //quitButton.appendChild(document.createTextNode("x"));
            quitButton.addEventListener("click", function () { ShowMenu(container); });
            container.appendChild(quitButton);
            var ctx = canvas.getContext("2d");
            ctx.font = "22px Arial";
            //initialize the player
            var player = [];
            var px = 5;
            var py = 5;
            var length = 5;
            var dx = 1;
            var dy = 0;
            //initialize the apple
            var apple = createApple(player);
            var appleimg = document.getElementById("apple");
            var sApple;
            setInterval(createSpecialApple(player, function (a) {
                sApple = a;
            }), 15000);
            var interval = 60;
            document.addEventListener("keydown", function (e) {
                //handle direction changes and pauses
                switch (e.keyCode) {
                    //left
                    case 37:
                        dx = -1;
                        dy = 0;
                        break;
                    //up
                    case 38:
                        dx = 0;
                        dy = -1;
                        break;
                    //right
                    case 39:
                        dx = 1;
                        dy = 0;
                        break;
                    //down
                    case 40:
                        dx = 0;
                        dy = 1;
                        break;
                    //pause
                    case 80:
                        isPaused = !isPaused;
                        if (isPaused)
                            clearInterval(cycle);
                        else
                            cycle = setInterval(game, interval);
                        break;
                }
            });
            cycle = setInterval(game, interval);
            function game() {
                //refresh
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
                //draw head and apple
                ctx.fillStyle = "#0000FF";
                ctx.fillRect(10 + px * BLOCK_SIZE, 40 + py * BLOCK_SIZE, 15, 15);
                ctx.drawImage(appleimg, 10 + apple.x * BLOCK_SIZE, 40 + apple.y * BLOCK_SIZE);
                ctx.fillStyle = "#FF00FF";
                ctx.fillRect(10 + sApple.x * BLOCK_SIZE, 40 + sApple.y * BLOCK_SIZE, 15, 15);
                //check death
                if (check(px, py, player)) {
                    //create body and draw it
                    player.push({ x: px, y: py });
                    while (player.length > length)
                        player.shift();
                    drawPlayer(ctx, player, '#0000FF');
                    //move player
                    px += dx;
                    py += dy;
                    //wrap screen
                    if (px == hSize)
                        px = 0;
                    else if (px == -1)
                        px = hSize - 1;
                    if (py == vSize)
                        py = 0;
                    else if (py == -1)
                        py = vSize - 1;
                    //check if apple is eaten
                    if (px == apple.x && py == apple.y) {
                        length++;
                        if (length % 5 == 0) {
                            //speed game up every 5th apple
                            clearInterval(cycle);
                            interval *= 0.985;
                            cycle = setInterval(game, interval);
                        }
                        apple = createApple(player);
                    }
                    if (px == sApple.x && py == sApple.y) {
                        switch (sApple.type) {
                            case "big":
                                length += 2;
                                break;
                            case "minimize":
                                length -= Math.round(length / 10);
                                break;
                            case "speed":
                                interval *= 0.945;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                                setTimeout(function () {
                                    interval *= 1 / 0.945;
                                    clearInterval(cycle);
                                    cycle = setInterval(game, interval);
                                }, 5000);
                                break;
                            case "slow":
                                interval *= 1.055;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                                setTimeout(function () {
                                    interval *= 1 / 1.055;
                                    clearInterval(cycle);
                                    cycle = setInterval(game, interval);
                                }, 5000);
                                break;
                        }
                        createSpecialApple(player, function (a) {
                            sApple = a;
                        });
                    }
                    ctx.fillText("Player 1 - Length: " + length + "Speed: " + interval, 15, 18);
                }
                else {
                    getName(canvas, ctx, "Enter name: ", function (name) {
                        addHighScore(length, name);
                        ShowMenu(container);
                    });
                    clearInterval(cycle);
                }
            }
        }
        function createSpecialApple(player, cb) {
            var type = appleTypes[Math.floor(Math.random() * appleTypes.length)];
            var pos = createApple(player);
            cb({ type: type, x: pos.x, y: pos.y });
            console.log(type);
        }
        function createSpecialApple2(player1, player2, cb) {
            var type = appleTypes[Math.floor(Math.random() * appleTypes.length)];
            var pos = createApple2(player1, player2);
            cb({ type: type, x: pos.x, y: pos.y });
            console.log(type);
        }
        function getName(canvas, ctx, text, cb) {
            //setup screen
            var name = '';
            ctx.fillStyle = 'white';
            ctx.fillRect(100, 180, 440, 60);
            ctx.fillStyle = 'black';
            ctx.fillText(text + name, 110, 210);
            //listen to keystrokes
            document.addEventListener("keyup", listenToName, true);
            function listenToName(e) {
                // if character or number add to name, if backspace shorten last char, if enter
                // callback function and remove this event listener
                if (e.key.length == 1 && e.key.match(/[a-z0-9]/i))
                    name += e.key;
                else if (e.key == 'Backspace')
                    name = name.slice(0, -1);
                else if (e.key == 'Enter') {
                    cb(name);
                    document.removeEventListener("keyup", listenToName, true);
                }
                //refresh name dialog
                ctx.fillStyle = 'white';
                ctx.fillRect(100, 180, 440, 60);
                ctx.fillStyle = 'black';
                ctx.fillText(text + name, 110, 210);
            }
        }
        function ShowHighScores(container) {
            container.innerHTML = '';
            for (var score in HighScores) {
                container.innerHTML += (parseInt(score) + 1) + '. ' + HighScores[score].name + ' - ' + HighScores[score].score + '<br/>';
            }
            var backButton = document.createElement("button");
            backButton.appendChild(document.createTextNode("Go Back"));
            backButton.addEventListener("click", function () { ShowMenu(container); });
            backButton.className = 'menuItem';
            container.appendChild(backButton);
        }
        function ShowTwoPlayerHighScores(container) {
            container.innerHTML = '';
            for (var score in TwoPlayerHighScores) {
                container.innerHTML += (parseInt(score) + 1) + '. ' + TwoPlayerHighScores[score].name + ' - ' + TwoPlayerHighScores[score].score + '<br/>';
            }
            var backButton = document.createElement("button");
            backButton.appendChild(document.createTextNode("Go Back"));
            backButton.addEventListener("click", function () { ShowMenu(container); });
            backButton.className = 'menuItem';
            container.appendChild(backButton);
        }
        function createApple(trail) {
            // create an apple on a random tile until it doesn't overlap player
            do {
                var x = Math.floor(Math.random() * hSize);
                var y = Math.floor(Math.random() * vSize);
            } while (!check(x, y, trail));
            return { x: x, y: y };
        }
        function createApple2(trail1, trail2) {
            do {
                var x = Math.floor(Math.random() * hSize);
                var y = Math.floor(Math.random() * vSize);
            } while (!check2(x, y, trail1, trail2));
            return { x: x, y: y };
        }
        function check(x, y, trail) {
            for (var element in trail) {
                element = trail[element];
                if (element.x == x && element.y == y)
                    return false;
            }
            return true;
        }
        function check2(x, y, trail1, trail2) {
            return check(x, y, trail1) && check(x, y, trail2);
        }
        function drawPlayer(ctx, trail, color) {
            ctx.fillStyle = color;
            trail.forEach(function (element) {
                ctx.fillRect(10 + element.x * BLOCK_SIZE + 2, 40 + element.y * BLOCK_SIZE + 2, 11, 11);
            });
        }
        function addHighScore(score, name) {
            HighScores.push({ score: score, name: name });
            HighScores.sort(function (a, b) { return b.score > a.score; });
            if (HighScores.length > 10)
                HighScores.pop();
            console.log(HighScores);
        }
        function add2playerHighScore(score, name) {
            TwoPlayerHighScores.push({ score: score, name: name });
            TwoPlayerHighScores.sort(function (a, b) { return b.score > a.score; });
            if (TwoPlayerHighScores.length > 10)
                TwoPlayerHighScores.pop();
            console.log(TwoPlayerHighScores);
        }
        function x_StartMultiPlayer() {
            //initalize game canas, same as single player
            isPaused = false;
            container.innerHTML = '';
            var canvas = document.createElement("canvas");
            canvas.setAttribute('width', WIDTH);
            canvas.setAttribute('height', HEIGHT);
            canvas.id = 'game';
            var ctx = canvas.getContext("2d");
            ctx.font = "22px Arial";
            var quitButton = document.createElement("button");
            quitButton.className = 'quit';
            quitButton.appendChild(document.createTextNode("x"));
            quitButton.addEventListener("click", function () {
                document.location.reload();
                modern_ShowMenu(container);
            });
            container.appendChild(quitButton);
            container.appendChild(canvas);
            //set up both players starting stats
            var player1 = [];
            var p1x = 5;
            var p1y = 5;
            var length1 = 5;
            var player2 = [];
            var p2x = 15;
            var p2y = 15;
            var length2 = 5;
            //create and set up each player's apple
            var apple1 = createApple2(player1, player2);
            var apple2 = createApple2(player1, player2);
            var apple1img = document.getElementById("apple");
            var apple2img = document.getElementById("apple2");
            var sApple;
            setInterval(createSpecialApple2(player1, player2, function (a) {
                sApple = a;
            }), 15000);
            var d1x = 1;
            var d1y = 0;
            var d2x = -1;
            var d2y = 0;
            document.addEventListener("keydown", function (e) {
                // change either player's direction or pause
                switch (e.keyCode) {
                    case 37:
                        d1x = -1;
                        d1y = 0;
                        break;
                    case 38:
                        d1x = 0;
                        d1y = -1;
                        break;
                    case 39:
                        d1x = 1;
                        d1y = 0;
                        break;
                    case 40:
                        d1x = 0;
                        d1y = 1;
                        break;
                    case 65:
                        d2x = -1;
                        d2y = 0;
                        break;
                    case 87:
                        d2x = 0;
                        d2y = -1;
                        break;
                    case 68:
                        d2x = 1;
                        d2y = 0;
                        break;
                    case 83:
                        d2x = 0;
                        d2y = 1;
                        break;
                    case 80:
                        isPaused = !isPaused;
                        if (isPaused)
                            clearInterval(cycle);
                        else
                            cycle = setInterval(game, 60);
                        break;
                }
            });
            var interval = 60;
            cycle = setInterval(game, interval);
            function game() {
                //refresh
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
                // draw player 1's head and apple
                ctx.fillStyle = "#0000FF";
                ctx.fillRect(10 + p1x * BLOCK_SIZE, 40 + p1y * BLOCK_SIZE, 15, 15);
                ctx.drawImage(apple1img, 10 + apple1.x * BLOCK_SIZE, 40 + apple1.y * BLOCK_SIZE);
                // draw player 2's head and apple
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(10 + p2x * BLOCK_SIZE, 40 + p2y * BLOCK_SIZE, 15, 15);
                ctx.drawImage(apple2img, 10 + apple2.x * BLOCK_SIZE, 40 + apple2.y * BLOCK_SIZE);
                // draw special apple
                ctx.fillStyle = "#FF00FF";
                ctx.fillRect(10 + sApple.x * BLOCK_SIZE, 40 + sApple.y * BLOCK_SIZE, 15, 15);
                //check colissions
                if (check2(p1x, p1y, player1, player2) && check2(p2x, p2y, player1, player2)) {
                    //shift boddies and draw them
                    player1.push({ x: p1x, y: p1y });
                    player2.push({ x: p2x, y: p2y });
                    if (player1.length > length1)
                        player1.shift();
                    if (player2.length > length2)
                        player2.shift();
                    drawPlayer(ctx, player1, '#0000FF');
                    p1x += d1x;
                    p1y += d1y;
                    drawPlayer(ctx, player2, '#FF0000');
                    p2x += d2x;
                    p2y += d2y;
                    //wrap both players
                    if (p1x == hSize)
                        p1x = 0;
                    else if (p1x == -1)
                        p1x = hSize - 1;
                    if (p1y == vSize)
                        p1y = 0;
                    else if (p1y == -1)
                        p1y = vSize - 1;
                    if (p2x == hSize)
                        p2x = 0;
                    else if (p2x == -1)
                        p2x = hSize - 1;
                    if (p2y == vSize)
                        p2y = 0;
                    else if (p2y == -1)
                        p2y = vSize - 1;
                    //if any of them has eaten an apple, grow them
                    if (p1x == apple1.x && p1y == apple1.y) {
                        length1++;
                        apple1 = createApple(player1);
                    }
                    if (p1x == sApple.x && p1y == sApple.y) {
                        switch (sApple.type) {
                            case "big":
                                length1 += 2;
                                break;
                            case "minimize":
                                length1 -= Math.round(length / 10);
                                break;
                            case "speed":
                                interval *= 0.955;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                                setTimeout(function () {
                                    interval *= 1 / 0.955;
                                    clearInterval(cycle);
                                    cycle = setInterval(game, interval);
                                }, 5000);
                                break;
                            case "slow":
                                interval *= 1.045;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                                setTimeout(function () {
                                    interval *= 1 / 1.045;
                                    clearInterval(cycle);
                                    cycle = setInterval(game, interval);
                                }, 5000);
                                break;
                        }
                        createSpecialApple2(player1, player2, function (a) {
                            sApple = a;
                        });
                    }
                    if (p2x == apple2.x && p2y == apple2.y) {
                        l0ength2++;
                        apple2 = createApple(player2);
                    }
                    if (p2x == sApple.x && p2y == sApple.y) {
                        switch (sApple.type) {
                            case "big":
                                length2 += 2;
                                break;
                            case "minimize":
                                length2 -= Math.round(length / 10);
                                break;
                            case "speed":
                                interval *= 0.945;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                                setTimeout(function () {
                                    interval *= 1 / 0.945;
                                    clearInterval(cycle);
                                    cycle = setInterval(game, interval);
                                }, 5000);
                                break;
                            case "slow":
                                interval *= 1.055;
                                clearInterval(cycle);
                                cycle = setInterval(game, interval);
                                setTimeout(function () {
                                    interval *= 1 / 1.055;
                                    clearInterval(cycle);
                                    cycle = setInterval(game, interval);
                                }, 5000);
                                break;
                        }
                        createSpecialApple2(player1, player2, function (a) {
                            sApple = a;
                        });
                    }
                    drawPlayer(ctx, player2, '#0000FF');
                    ctx.fillText("Player 1 - Length: " + length1, 15, 18);
                    drawPlayer(ctx, player2, '#FF0000');
                    ctx.fillText("Player 2 - Length: " + length2, 315, 18);
                }
                else {
                    getName(canvas, ctx, "Enter team name: ", function (name) {
                        add2playerHighScore(length1 + length2, name);
                        document.location.reload();
                        modern_ShowMenu(container);
                    });
                    clearInterval(cycle);
                }
            }
        }
        x_StartMultiPlayer();
    };
    return Menu;
}());
//# sourceMappingURL=menu.js.map