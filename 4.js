function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged");
    this.isPlugged = false;
};

function Teapot(name, brand, power, kettleType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.kettleType = kettleType;
    this.isPlugged = true;
}

Teapot.prototype = new ElectricalAppliance();

function Computer(name, brand, power, type) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

const whistleKettle = new Teapot("whistle kettle", "Bohmann", 3, "whistle");
const stationaryСomputer = new Computer("PC", "Intel", 80, "stationary");

whistleKettle.unplug();
stationaryСomputer.plugIn();

console.log(stationaryСomputer)
console.log(whistleKettle)