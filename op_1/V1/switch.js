var datum = new Date();
var vandaag = datum.getDay();
var uur = datum.getHours();
console.log("Het is vandaag:" + datum);
switch (vandaag) {
    case 1:
        console.log("Maandag en het is mijn eerste stage dag");
        break;
    case 2:
        console.log("Dinsdag en het is mijn tweede stage dag");
        break;
    case 3:
        console.log("Woensdag en het is mijn derde stage dag");
        break;
    case 4:
        console.log("Donderdag en het is mijn vierde stage dag");
        breakl;
    case 5:
        console.log("Vrijdag en het is mijn roostervrije dag");
        break;
    case 6:
        console.log("Zaterdag en het is weekend");
        break;
    default:
        console.log("het is Zondag en het is weekend")
}