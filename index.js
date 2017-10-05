const ViewModel = function() {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    // this returns whats in the variable currently
    return this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
};

const Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("img/cat.jpg");
  this.nickNames = ko.observableArray([
    "Tabtab",
    "T-Bone",
    "Mr. T",
    "Tabitha Tab Tabby Catty Cat"
  ]);

  this.level = ko.computed(function() {
    let level = "Newborn";

    //calculate level based on clickCount
    if (this.clickCount() > 10) {
      level = "Infant";
    }
    if (this.clickCount() > 20) {
      level = "Toddler";
    }
    if (this.clickCount() > 30) {
      level = "Pre-teen";
    }
    if (this.clickCount() > 40) {
      level = "Teen";
    }
    if (this.clickCount() > 50) {
      level = "Adult";
    }
    return level;
  }, this);
};

ko.applyBindings(new ViewModel());
