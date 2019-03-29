// getters and Setters

const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location);
  }
};

// code that uses the date oject
data.location = "Barcelona";
data.location = "Dubrovnik";
console.log(data);
