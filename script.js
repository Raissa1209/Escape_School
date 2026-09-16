/* =========================================
   ESCAPE SCHOOL
   CODING MYSTERY GAME
========================================= */


/* =========================================
   DATA LEVEL & QUESTIONS
========================================= */

const levels = {

    1: {
        location: "Ruang Kelas",
        emoji: "🏫",
        background: "classroom",

        clueTitle: "Petunjuk Kelas",
        clueText: "Papan tulis berisi tantangan HTML. Pecahkan untuk mendapatkan kunci!",

        puzzleSymbol: "🌐",
        puzzleLabel: "PUZZLE LEVEL 1",
        puzzleTitle: "HTML Challenge",
        puzzleDescription: "Jawab pertanyaan HTML untuk membuka jalan menuju perpustakaan.",

        hint: "HTML digunakan untuk membuat struktur atau kerangka halaman web.",

        objects: [
            {
                emoji: "✉️",
                left: "15%",
                top: "58%",
                name: "Surat"
            },
            {
                emoji: "📚",
                left: "75%",
                top: "48%",
                name: "Rak Buku"
            },
            {
                emoji: "🕒",
                left: "82%",
                top: "18%",
                name: "Jam Dinding"
            },
            {
                emoji: "💻",
                left: "25%",
                top: "70%",
                name: "Komputer HTML",
                puzzle: true
            }
        ],

        questions: [

            {
                question: "Tag HTML apa yang digunakan untuk membuat judul terbesar?",

                options: [
                    "<p>",
                    "<h1>",
                    "<br>",
                    "<img>"
                ],

                answer: 1,

                explanation: "Tag <h1> digunakan untuk membuat heading atau judul tingkat pertama dan terbesar."
            },

            {
                question: "Tag HTML apa yang digunakan untuk membuat tautan atau link?",

                options: [
                    "<a>",
                    "<link>",
                    "<url>",
                    "<href>"
                ],

                answer: 0,

                explanation: "Tag <a> atau anchor digunakan untuk membuat tautan ke halaman atau alamat lain."
            }

        ]

    },


    2: {
        location: "Perpustakaan",
        emoji: "📚",
        background: "library",

        clueTitle: "Petunjuk Perpustakaan",
        clueText: "Buku CSS menyimpan tantangan berikutnya. Jawab dengan benar untuk membuka pintu!",

        puzzleSymbol: "🎨",
        puzzleLabel: "PUZZLE LEVEL 2",
        puzzleTitle: "CSS Challenge",
        puzzleDescription: "Jawab pertanyaan CSS untuk menemukan petunjuk menuju koridor.",

        hint: "CSS digunakan untuk mengatur tampilan halaman web, seperti warna, ukuran, dan posisi.",

        objects: [
            {
                emoji: "📚",
                left: "12%",
                top: "42%",
                name: "Rak Buku"
            },
            {
                emoji: "🪑",
                left: "70%",
                top: "62%",
                name: "Meja Baca"
            },
            {
                emoji: "💻",
                left: "45%",
                top: "52%",
                name: "Buku CSS",
                puzzle: true
            },
            {
                emoji: "🔒",
                left: "84%",
                top: "45%",
                name: "Pintu Terkunci"
            }
        ],

        questions: [

            {
                question: "Properti CSS apa yang digunakan untuk mengubah warna teks?",

                options: [
                    "background-color",
                    "font-size",
                    "color",
                    "text-style"
                ],

                answer: 2,

                explanation: "Properti color digunakan untuk mengatur warna teks."
            },

            {
                question: "Apa hasil dari kode CSS berikut?",

                code: `p {
    color: red;
}`,

                options: [
                    "Background paragraf menjadi merah",
                    "Teks paragraf menjadi merah",
                    "Ukuran teks menjadi merah",
                    "Paragraf menghilang"
                ],

                answer: 1,

                explanation: "Properti color mengubah warna teks, sehingga teks paragraf menjadi merah."
            }

        ]

    },


    3: {
        location: "Koridor & Gerbang",
        emoji: "🌆",
        background: "hallway",

        clueTitle: "Petunjuk Terakhir",
        clueText: "Gerbang sekolah ada di ujung koridor. Selesaikan tantangan JavaScript terakhir!",

        puzzleSymbol: "⚡",
        puzzleLabel: "PUZZLE LEVEL 3",
        puzzleTitle: "JavaScript Challenge",
        puzzleDescription: "Jawab pertanyaan JavaScript untuk membuka gerbang sekolah.",

        hint: "JavaScript digunakan untuk membuat halaman web menjadi interaktif.",

        objects: [
            {
                emoji: "🚪",
                left: "80%",
                top: "38%",
                name: "Gerbang Sekolah",
                puzzle: true
            },
            {
                emoji: "🔔",
                left: "15%",
                top: "30%",
                name: "Bel Sekolah"
            },
            {
                emoji: "📜",
                left: "42%",
                top: "48%",
                name: "Catatan JavaScript"
            },
            {
                emoji: "🧭",
                left: "65%",
                top: "68%",
                name: "Petunjuk Arah"
            }
        ],

        questions: [

            {
                question: "Fungsi JavaScript apa yang digunakan untuk menampilkan pesan pop-up?",

                options: [
                    "print()",
                    "alert()",
                    "message()",
                    "popup()"
                ],

                answer: 1,

                explanation: "Fungsi alert() digunakan untuk menampilkan kotak pesan pop-up pada browser."
            },

            {
                question: "Apa output dari kode JavaScript berikut?",

                code: `let angka = 5;
angka = angka + 3;
console.log(angka);`,

                options: [
                    "2",
                    "5",
                    "8",
                    "15"
                ],

                answer: 2,

                explanation: "Nilai angka awalnya 5, kemudian ditambah 3, sehingga hasilnya adalah 8."
            }

        ]

    },
        4: {
        location: "Laboratorium Komputer",
        emoji: "💻",
        background: "computer-lab",

        clueTitle: "Petunjuk Laboratorium",
        clueText: "Komputer di laboratorium menyimpan tantangan berikutnya!",

        puzzleSymbol: "🖥️",
        puzzleLabel: "PUZZLE LEVEL 4",
        puzzleTitle: "Programming Challenge",
        puzzleDescription: "Jawab pertanyaan pemrograman untuk membuka pintu terakhir.",

        hint: "Variabel digunakan untuk menyimpan data yang dapat digunakan dalam program.",

        objects: [
            {
                emoji: "💻",
                left: "18%",
                top: "55%",
                name: "Komputer Pemrograman"
            },
            {
                emoji: "🖥️",
                left: "42%",
                top: "38%",
                name: "Monitor Komputer"
            },
            {
                emoji: "📘",
                left: "65%",
                top: "55%",
                name: "Buku Programming"
            },
            {
                emoji: "🚪",
                left: "85%",
                top: "35%",
                name: "Pintu Laboratorium",
                puzzle: true
            }
        ],

        questions: [

            {
                question: "Apa fungsi variabel dalam pemrograman?",

                options: [
                    "Untuk menyimpan data",
                    "Untuk menghapus komputer",
                    "Untuk membuat gambar saja",
                    "Untuk mematikan program"
                ],

                answer: 0,

                explanation: "Variabel digunakan untuk menyimpan nilai atau data yang dapat digunakan dalam program."
            },

            {
                question: "Apa output dari kode JavaScript berikut?",

                code: `let nama = "Raisa";
console.log(nama);`,

                options: [
                    "nama",
                    "Raisa",
                    "let",
                    "console"
                ],

                answer: 1,

                explanation: "Kode tersebut menampilkan isi variabel nama, yaitu Raisa."
            }

        ]

    },


    5: {
        location: "Halaman Sekolah",
        emoji: "🏫",
        background: "school-yard",

        clueTitle: "Gerbang Terakhir",
        clueText: "Ini adalah tantangan terakhir. Selesaikan semua soal untuk keluar dari sekolah!",

        puzzleSymbol: "🏆",
        puzzleLabel: "PUZZLE LEVEL 5",
        puzzleTitle: "Final Coding Challenge",
        puzzleDescription: "Jawab tantangan terakhir untuk menyelesaikan Escape School.",

        hint: "HTML mengatur struktur, CSS mengatur tampilan, dan JavaScript membuat halaman menjadi interaktif.",

        objects: [
            {
                emoji: "🌳",
                left: "15%",
                top: "40%",
                name: "Pohon Sekolah"
            },
            {
                emoji: "📜",
                left: "40%",
                top: "50%",
                name: "Catatan Final"
            },
            {
                emoji: "🔑",
                left: "65%",
                top: "45%",
                name: "Kunci Gerbang"
            },
            {
                emoji: "🚪",
                left: "85%",
                top: "35%",
                name: "Gerbang Keluar",
                puzzle: true
            }
        ],

        questions: [

            {
                question: "Bahasa apa yang digunakan untuk mengatur struktur halaman web?",

                options: [
                    "CSS",
                    "JavaScript",
                    "HTML",
                    "Python"
                ],

                answer: 2,

                explanation: "HTML digunakan untuk membuat struktur atau kerangka halaman web."
            },

            {
                question: "Bahasa apa yang digunakan untuk membuat halaman web menjadi interaktif?",

                options: [
                    "HTML",
                    "JavaScript",
                    "CSS",
                    "SQL"
                ],

                answer: 1,

                explanation: "JavaScript digunakan untuk menambahkan interaksi dan perilaku pada halaman web."
            }

        ]

    }

};


/* =========================================
   GAME VARIABLES
========================================= */

let currentLevel = 1;
let currentQuestion = 0;
let currentPuzzle = null;
let answeredCorrectly = false;


/* =========================================
   GAME BACKGROUND MUSIC
========================================= */

const gameMusic = document.getElementById("gameMusic");

// Volume musik
gameMusic.volume = 0.35;


// Mulai musik
function playGameMusic() {

    gameMusic.currentTime = 0;

    gameMusic.play().catch((error) => {
        console.log("Musik belum bisa diputar:", error);
    });

}


// Hentikan musik
function stopGameMusic() {

    gameMusic.pause();
    gameMusic.currentTime = 0;

}

/* =========================================
   ELEMENTS
========================================= */

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const winScreen = document.getElementById("winScreen");

const gameArea = document.getElementById("gameArea");
const levelBadge = document.getElementById("levelBadge");

const locationEmoji = document.getElementById("locationEmoji");
const locationName = document.getElementById("locationName");

const clueTitle = document.getElementById("clueTitle");
const clueText = document.getElementById("clueText");

const objectsContainer = document.getElementById("objects");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const puzzleModal = document.getElementById("puzzleModal");

const puzzleSymbol = document.getElementById("puzzleSymbol");
const puzzleLabel = document.getElementById("puzzleLabel");
const puzzleTitle = document.getElementById("puzzleTitle");
const puzzleDescription = document.getElementById("puzzleDescription");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const codeQuestion = document.getElementById("codeQuestion");

const answerOptions = document.getElementById("answerOptions");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");


/* =========================================
   START GAME
========================================= */

function startGame() {

    currentLevel = 1;
    currentQuestion = 0;

    // Nyalakan backsound
    playGameMusic();

    startScreen.classList.remove("active");
    winScreen.classList.remove("active");

    showLoading(() => {

        gameScreen.classList.add("active");
        loadLevel(currentLevel);

    }, "Memasuki sekolah...");
}

/* =========================================
   LOADING SCREEN
========================================= */

const loadingScreen = document.getElementById("loadingScreen");
const loadingFill = document.getElementById("loadingFill");
const loadingPercent = document.getElementById("loadingPercent");
const loadingText = document.getElementById("loadingText");

function showLoading(callback, message = "Menyiapkan permainan...") {

    loadingText.textContent = message;
    loadingScreen.classList.add("show");

    let progress = 0;

    loadingFill.style.width = "0%";
    loadingPercent.textContent = "0%";

    const loadingInterval = setInterval(() => {

        progress += Math.floor(Math.random() * 12) + 5;

        if (progress >= 100) {
            progress = 100;
        }

        loadingFill.style.width = `${progress}%`;
        loadingPercent.textContent = `${progress}%`;

        if (progress >= 100) {

            clearInterval(loadingInterval);

            setTimeout(() => {

                loadingScreen.classList.remove("show");

                if (callback) {
                    callback();
                }

            }, 400);

        }

    }, 100);

}

/* =========================================
   INITIAL LOADING
========================================= */

window.addEventListener("load", () => {

    showLoading(() => {

        startScreen.classList.add("active");

    }, "Memuat Escape School...");

});

/* =========================================
   CHARACTER MOVEMENT
========================================= */

const character = document.getElementById("character");
const characterImage = document.getElementById("characterImage");

let playerX = 50;
let playerY = 55;

const playerSpeed = 3;

let movingDirection = null;

const characterSprites = {
    idle: "images/character-standing.png",
    up: "images/character-walk-up.png",
    down: "images/character-walk-down.png",
    left: "images/character-walk-left.png",
    right: "images/character-walk-right.png"
};


/* =========================================
   UPDATE CHARACTER POSITION
========================================= */

function updateCharacterPosition() {

    character.style.left = `${playerX}%`;
    character.style.top = `${playerY}%`;

}


/* =========================================
   UPDATE CHARACTER IMAGE
========================================= */

function updateCharacterSprite(direction = null) {

    if (!characterImage) return;

    if (direction && characterSprites[direction]) {
        characterImage.src = characterSprites[direction];
    } else {
        characterImage.src = characterSprites.idle;
    }
}


/* =========================================
   MOVE PLAYER
========================================= */

function movePlayer(direction) {

    if (direction === "up") {
        playerY -= playerSpeed;
    }

    if (direction === "down") {
        playerY += playerSpeed;
    }

    if (direction === "left") {
        playerX -= playerSpeed;
    }

    if (direction === "right") {
        playerX += playerSpeed;
    }

    // Membatasi karakter agar tidak keluar dari area game
    playerX = Math.max(7, Math.min(93, playerX));
    playerY = Math.max(18, Math.min(88, playerY));

    updateCharacterPosition();

    // Ganti gambar sesuai arah gerakan
    updateCharacterSprite(direction);

    character.classList.add("walking");

    clearTimeout(character.walkTimeout);

    character.walkTimeout = setTimeout(() => {

        updateCharacterSprite("idle");
        character.classList.remove("walking");

    }, 250);
}


/* =========================================
   KEYBOARD MOVEMENT
========================================= */

document.addEventListener("keydown", (event) => {

    const key = event.key.toLowerCase();

    if (
        key === "arrowup" ||
        key === "arrowdown" ||
        key === "arrowleft" ||
        key === "arrowright" ||
        key === "w" ||
        key === "a" ||
        key === "s" ||
        key === "d"
    ) {
        event.preventDefault();
    }

    if (key === "arrowup" || key === "w") {
        movePlayer("up");
    }

    if (key === "arrowdown" || key === "s") {
        movePlayer("down");
    }

    if (key === "arrowleft" || key === "a") {
        movePlayer("left");
    }

    if (key === "arrowright" || key === "d") {
        movePlayer("right");
    }

});

/* =========================================
   LOAD LEVEL
========================================= */

function loadLevel(levelNumber) {

    const level = levels[levelNumber];

    if (!level) return;

    currentLevel = levelNumber;
    currentQuestion = 0;

    // Header
    levelBadge.textContent = `LEVEL ${levelNumber}`;

    // Location
    locationEmoji.textContent = level.emoji;
    locationName.textContent = level.location;

    // Clue
    clueTitle.textContent = level.clueTitle;
    clueText.textContent = level.clueText;

    // Background
    gameArea.className = "game-area";
    gameArea.classList.add(level.background);

    // Progress
progressText.textContent = `Level ${levelNumber} / 5`;
progressFill.style.width = `${(levelNumber / 5) * 100}%`;

    // Character

playerX = 50;
playerY = 55;

updateCharacterPosition();
updateCharacterSprite(false);

    // Render objects
    renderObjects(level.objects);

}


/* =========================================
   RENDER OBJECTS
========================================= */

function renderObjects(objects) {

    objectsContainer.innerHTML = "";

    objects.forEach((object) => {

        const objectElement = document.createElement("div");

        objectElement.className = "object";
        objectElement.textContent = object.emoji;

        objectElement.style.left = object.left;
        objectElement.style.top = object.top;

        objectElement.title = object.name;

        objectElement.addEventListener("click", () => {

            if (object.puzzle) {
                openPuzzle();
            } else {
                showObjectMessage(object.name);
            }

        });

        objectsContainer.appendChild(objectElement);

    });

}


/* =========================================
   OBJECT MESSAGE
========================================= */

function showObjectMessage(objectName) {

    const level = levels[currentLevel];

    clueTitle.textContent = objectName;
    clueText.textContent = "Hmm... sepertinya bukan petunjuk yang kamu cari.";

    setTimeout(() => {

        clueTitle.textContent = level.clueTitle;
        clueText.textContent = level.clueText;

    }, 2500);

}


/* =========================================
   OPEN PUZZLE
========================================= */

function openPuzzle() {

    const level = levels[currentLevel];

    currentPuzzle = level;
    currentQuestion = 0;

    puzzleSymbol.textContent = level.puzzleSymbol;
    puzzleLabel.textContent = level.puzzleLabel;
    puzzleTitle.textContent = level.puzzleTitle;
    puzzleDescription.textContent = level.puzzleDescription;

    puzzleModal.classList.add("show");

    loadQuestion();

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    const question = currentPuzzle.questions[currentQuestion];

    answeredCorrectly = false;

    questionNumber.textContent =
        `Pertanyaan ${currentQuestion + 1} dari ${currentPuzzle.questions.length}`;

    questionText.textContent = question.question;

    // Tampilkan kode jika soal memiliki kode
    if (question.code) {

        codeQuestion.style.display = "block";
        codeQuestion.textContent = question.code;

    } else {

        codeQuestion.style.display = "none";
        codeQuestion.textContent = "";

    }

    // Reset feedback dan tombol
    feedback.textContent = "";
    feedback.className = "feedback";

    nextButton.style.display = "none";

    // Kosongkan pilihan jawaban
    answerOptions.innerHTML = "";

    // Buat tombol pilihan A-D
    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.innerHTML = `
            <strong>${String.fromCharCode(65 + index)}.</strong>
            ${escapeHTML(option)}
        `;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answerOptions.appendChild(button);

    });

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, selectedButton) {

    // Kalau sudah benar, jangan bisa klik pilihan lain
    if (answeredCorrectly) return;

    const question = currentPuzzle.questions[currentQuestion];
    const allButtons = document.querySelectorAll(".answer-button");

    if (selectedIndex === question.answer) {

        answeredCorrectly = true;

        selectedButton.classList.add("correct");

        feedback.textContent = `✓ Benar! ${question.explanation}`;
        feedback.className = "feedback success";

        // Matikan semua pilihan setelah benar
        allButtons.forEach(button => {
            button.disabled = true;
        });

        nextButton.style.display = "block";

if (currentQuestion === currentPuzzle.questions.length - 1) {

    nextButton.textContent =
        currentLevel === 5
            ? "Selesaikan Game 🎉"
            : "Lanjut Level →";

} else {

    nextButton.textContent = "Pertanyaan Berikutnya →";

}

    } else {

        selectedButton.classList.add("wrong");

        feedback.textContent =
            "✗ Jawaban belum tepat. Coba periksa lagi!";

        feedback.className = "feedback error";

        // Tombol yang salah tidak bisa diklik lagi
        selectedButton.disabled = true;

    }

}


/* =========================================
   NEXT QUESTION / NEXT LEVEL
========================================= */

function nextQuestion() {

    if (!answeredCorrectly) return;

    // Kalau masih ada pertanyaan dalam level ini
    if (currentQuestion < currentPuzzle.questions.length - 1) {

        currentQuestion++;
        loadQuestion();

    } else {

        closePuzzle();

        // Kalau belum level 3, lanjut level
       if (currentLevel < 5) {

    currentLevel++;

    showLoading(() => {

        loadLevel(currentLevel);

        clueTitle.textContent = "Level Berhasil! 🎉";
        clueText.textContent =
            `Kamu berhasil masuk ke ${levels[currentLevel].location}!`;

    }, `Memuat Level ${currentLevel}...`);

} else {

    finishGame();

}

    }

}


/* =========================================
   CLOSE PUZZLE
========================================= */

function closePuzzle() {

    puzzleModal.classList.remove("show");

    feedback.textContent = "";
    answerOptions.innerHTML = "";

}


/* =========================================
   SHOW HINT
========================================= */

function showHint() {

    const level = levels[currentLevel];

    clueTitle.textContent = "💡 Petunjuk Tambahan";
    clueText.textContent = level.hint;

    setTimeout(() => {

        clueTitle.textContent = level.clueTitle;
        clueText.textContent = level.clueText;

    }, 5000);

}


/* =========================================
   FINISH GAME
========================================= */

function finishGame() {

    gameScreen.classList.remove("active");
    winScreen.classList.add("active");

}


/* =========================================
   RESTART GAME
========================================= */

function restartGame() {

    currentLevel = 1;
    currentQuestion = 0;

    puzzleModal.classList.remove("show");
    winScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    startScreen.classList.add("active");

}


/* =========================================
   ESCAPE HTML SPECIAL CHARACTERS
========================================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
/* =========================================
   MUSIC ON / OFF
========================================= */

let musicEnabled = true;

function toggleMusic() {

    if (musicEnabled) {

        gameMusic.pause();
        musicEnabled = false;

        document.getElementById("musicButton").textContent = "🔇";

    } else {

        gameMusic.play().catch((error) => {
            console.log("Musik belum bisa diputar:", error);
        });

        musicEnabled = true;

        document.getElementById("musicButton").textContent = "🔊";

    }

}