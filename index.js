//Model
const model = {
  currentCat: null,
  cats: [
    { name: "cat", imgSrc: "img/cat.jpg", clickCount: 0 },
    { name: "cat2", imgSrc: "img/cat2.jpg", clickCount: 0 },
    { name: "cat3", imgSrc: "img/cat3.jpg", clickCount: 0 }
  ]
};

//Octopus
const octopus = {
  init() {
    //Set current cat to the first one in the list
    model.currentCat = model.cats[0];

    //initialize views
    catView.init();
    catListView.init();
  },
  //getter for model.cats
  get cats() {
    return model.cats;
  },
  //getter for model.currentCat
  get currentCat() {
    return model.currentCat;
  },
  //setter for currentCat
  set currentCat(cat) {
    model.currentCat = cat;
  },
  //increment counter then render
  incrementCounter() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

//Views

const catView = {
  init() {
    //store pointers to DOM elements for later access
    this.catEl = document.querySelector(".cat");
    this.catNameEl = document.querySelector(".cat-name");
    this.catImgEl = document.querySelector(".cat-img");
    this.countEl = document.querySelector(".cat-count");

    //on click, incremenet cat's counter
    this.catImgEl.addEventListener("click", () => octopus.incrementCounter());

    //render this view (update DOM elements)
    this.render();
  },
  render() {
    //update DOM elements with values from current cat
    console.log("hello");
    const currentCat = octopus.currentCat;
    this.catNameEl.innerText = currentCat.name;
    this.catImgEl.src = currentCat.imgSrc;
    this.countEl.innerText = currentCat.clickCount;
  }
};

const catListView = {
  init() {
    //store DOM elements for later access
    this.catListEl = document.getElementById("cat-list");
    const cats = octopus.cats;

    //loops over cats
    for (const cat of cats) {
      const option = document.createElement("option");
      option.value = cat.name;
      option.innerText = cat.name;
      this.catListEl.appendChild(option);
    }

    //add listener on select to change current cat and render
    this.catListEl.addEventListener("change", e => {
      const cat = cats.find(cat => cat.name === e.target.value);

      octopus.currentCat = cat;
      catView.render();
    });

    //render this view (update DOM elements)
    this.render();
  },
  render() {
    //get the cats from the octopus
  }
};

octopus.init();
