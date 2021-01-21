class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }

  plugIn() {
    console.log(this.name + " is plugged");
    this.isPlugged = true;
  }
  
  unplug() {
    console.log(this.name + " is unplugged");
    this.isPlugged = false;
  }
}

class Teapot extends ElectricalAppliance {
  constructor (name, brand, power, kettleType) {
    super(name, power);
    this.brand = brand;
    this.kettleType = kettleType;
    this.isPlugged = true;
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
  }
}

const whistleKettle = new Teapot("whistle kettle", "Bohmann", 3, "whistle");
const stationaryСomputer = new Computer("PC", "Intel", 80, "stationary");

whistleKettle.unplug();
stationaryСomputer.plugIn();

console.log(whistleKettle)
console.log(stationaryСomputer)