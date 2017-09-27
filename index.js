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
  set currentCat() {
      model.currentCat = cat;
  },
  //increment counter then reader
  incrementCounter() {
      model.currentCat.clickCount++;
      catView.render();
  }
};

//Views

const catView = {
  init() {
      //store pointers
  }
};

const catListView = {
    init() {
        //store
    }
    render() {

    }
}
