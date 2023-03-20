const button = document.querySelector(".button");
const imgContainer = document.querySelector(".container");
const img = document.querySelector(".img");
const naam = document.querySelector(".name");
const apiURL = "https://api.catboys.com";

const data = [
    {
    "img": "https://staticg.sportskeeda.com/editor/2022/01/9441c-16419200856280-1920.jpg",
    "name": "Zenitsu"
    },

    {"img": "https://i.pinimg.com/736x/63/79/13/637913b3420060699e85c0a908a377e0.jpg",
    "name": "kakashi"
    },

    {
    "img":"https://cdnb.artstation.com/p/assets/images/images/038/479/419/large/yamil-yaluk-1-dibujo.jpg?1623202604",
    "name":"Itachi uchiha"
    },
    {
    "img":"https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg",
    "name":"Sasuke Uchiha"
    },
    {
        "img":"https://thicc.mywaifulist.moe/waifus/38567/86122f43b5850e8dfe51be0389ef489e2cac97a59d2d05df03560395c91e675e_thumb.jpg",
        "name":"Chifuyu Matsuno"
    },
    {
        "img":"https://wallpaperaccess.com/full/6767982.jpg",
        "name":"Takemitchi"
    },
    {
        "img":"https://moewalls.com/wp-content/uploads/2022/08/mikey-and-draken-tokyo-revengers.jpg",
        "name":"Mikey & Draken"
    },
    {
        "img":"https://static.fandomspot.com/images/07/7615/12-kiyotaka-ayanokoji-classroom-of-the-elite.jpg",
        "name":"Chifuyu Matsuno"
    },
    {
        "img":"https://static.fandomspot.com/images/08/18749/25-tanjiro-kamado-demon-slayer-anime.jpg",
        "name":"Tanjiro Kamado"
    },
    {
        "img":"https://cdn.anisearch.com/images/character/cover/87/87111_300.webp",
        "name":"Tsukasa"
    },
    {
        "img":"https://devdiscourse.blob.core.windows.net/devnews/21_07_2021_16_16_31_0860704.jpg",
        "name":"Jujutsu kaisen"
    },
    {
        "img":"https://1.bp.blogspot.com/-J8ijK6EEmGI/YRpzfdG11dI/AAAAAAAACXE/Cs86Yb9V-ogYnpf9CeFHWrBkDuglbw2mQCNcBGAsYHQ/s500/Draken%2BTokyo%2BRevengers.jpg",
        "name":"Draken"
    },
    {
        "img":"https://i.pinimg.com/736x/42/ec/24/42ec24b0b90215958d80c4c054ce34d3.jpg",
        "name":"Mikey & Draken"
    }


]

let number = 0;

const getAnimeImage = async () => {
    // console.log("clicked")
    const randomNumber = Math.floor(Math.random() * data.length)
    if (randomNumber == number) {
         number = randomNumber + 1;
    }
    else {
        number = randomNumber;
    }
    const image = data[number].img;
    const artist =data[number].name;
    img.src =  image;
    naam.innerText = artist;
    // const data = await response.json();
    
    // const artist = data.artist;
    // img.src = image;
    // if (artist == "unknown") {
    //     naam.innerText = "Name not found";
    // }
    // else {
    //     naam.innerText = artist;
    // }
    
}

button.addEventListener("click", getAnimeImage)
