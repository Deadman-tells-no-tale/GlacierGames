export class MonsterCards{
    constructor(Name,Type,Evolution,HitPoints,Weakness,Resistance,Retreat,Attack){
        this.Name = Name;
        this.Type = Type;
        this.Evolution = Evolution;
        this.HitPoints = HitPoints;
        this.Weakness = Weakness;
        this.Resistance = Resistance;
        this.Retreat = Retreat;             
        this.Attack = Attack;

}}


const Ninetales = {
    Name:"Ninetales",
    Type:"Fire",
    Evolution:"NULL",
    HitPoints:80,
    Weakness:"Water",
    Resistance:"NULL",
    Retreat : 1 ,
    Attack:["Lure","Fire_Blast"]
/*function options(){
        switch (Name) {
            case "Lure":
                break;
        
            case "Fire_Blast":
                break;
        }
    }*/
}

const Vulpix = {
    Name:"Vulpix",
    Type:"Fire",
    Evolution:"Ninetales",
    HitPoints:50,
    Weakness:"Water",
    Resistance:0,
    Retreat:1,
    Attack:"Confuse_Ray"

}

const Arcanine ={
    Name:"Arcanine",
    Type:"Fire",
    Evolution:"NULL",
    HitPoints:100,
    Weakness:"Water",
    Resistance:"NULL",
    Retreat:3,
    Attack:["Flamethrower","Take_Down"]
}

const Growlithe={
    Name:"Growlithe",
    Type:"Fire",
    Evolution:"Arcanine",
    HitPoints: 60,
    Weakness:"Water",
    Resistance:"NULL",
    Retreat:1,
    Attack:"Flare"
}
const Charmander ={
    Name:"Charmander",
    Type:"Fire",
    Evolution:"Charmeleon",
    HitPoints: 50,
    Weakness:"Water",
    Resistance:"NULL",
    Retreat:1,
    Attack:["Scratch","Ember"]
}
const Charmeleon ={
    Name:"Charmeleon",
    Type:"Fire",
    Evolution:"Charizard",
    HitPoints: 80,
    Weakness:"Water",
    Resistance:"NULL",
    Retreat:1,
    Attack:["Slash","Flamethrower"]
}
const Charizard={
    Name:"Charizard",
    Type:"Fire",
    Evolution:"NULL",
    HitPoints: 120,
    Weakness:"Water",
    Resistance:"Fighting",
    Retreat:3,
    Attack:"Fire_Spin",
    PokemonPower:"Energy_Burn"
}
const Weedle ={
    Name:"Weedle",
    Type:"Grass",
    Evolution:"Kakuna",
    HitPoints: 40,
    Weakness:"Fire",
    Resistance:"NULL",
    Retreat:1,
    Attack:"Poison_Sting"
}

const Tangela={
    Name:"Tangela",
    Type:"Grass",
    Evolution:"Tangrowth",
    HitPoints: 50,
    Weakness:"Fire",
    Resistance:"NULL",
    Retreat:2,
    Attack:["Bind","PoisonPowder"],
    PokemonPower:"NULL"
}

const Nidoran={
    Name:"Nidoran",
    Type:"Grass",
    Evolution:"Nidorino",
    HitPoints: 40,
    Weakness:"Psychic",
    Resistance:"NULL",
    Retreat:1,
    Attack:"Horn_Hazzard",
    PokemonPower:"NULL"
}


const Hitmonchan={
    Name:"Hitmonchan",
    Type:"Fighting",
    Evolution:"NULL",
    HitPoints: 70,
    Weakness:"Psychic",
    Resistance:"NULL",
    Retreat:2,
    Attack:["Jab","Special_Punch"],
    PokemonPower:"NULL"
}

const Farfetchd={
    Name:"Farfetch\'d",
    Type:"Normal",
    Evolution:"NULL",
    HitPoints: 50,
    Weakness:"Electric",
    Resistance:"Fighting",
    Retreat:1,
    Attack:["Leek Slap","Pot Smash"],
    PokemonPower:"NULL"
}

const Wartortle={
    Name:"Wartortle",
    Type:"Water",
    Evolution:"Blastoise",
    HitPoints: 70,
    Weakness:"Electric",
    Resistance:"NULL",
    Retreat:1,
    Attack:["Withdraw","Bite"],
    PokemonPower:"NULL"
}

const Squirtle = {
    Name:"Squirtle",
    Type:"Water",
    Evolution:"Wartortle",
    HitPoints: 40,
    Weakness:"Electric",
    Resistance:"NULL",
    Retreat: 1,
    Attack:["Bubble","Withdraw"],
    PokemonPower:"NULL"
}

const Staryu = {
    Name:"Staryu",
    Type:"Water",
    Evolution:"Starmie",
    HitPoints: 40,
    Weakness:"Electric",
    Resistance:"NULL",
    Retreat: 1,
    Attack:"Slap",
    PokemonPower:"NULL"
}

const  Onix= {
    Name:"Onix",
    Type:"Fighting",
    Evolution:"NULL",
    HitPoints: 90,
    Weakness:"Grass",
    Resistance:"Null",
    Retreat: 3,
    Attack:["Rock Throw","Harden"],
    PokemonPower:"NULL"
}

const Sandshrew = {
    Name:"Sandshrew",
    Type:"Fighting",
    Evolution:"Sandslash",
    HitPoints: 40,
    Weakness:"Grass",
    Resistance:"Electric",
    Retreat: 1,
    Attack:"Sand-attack",
    PokemonPower:"Null"
}

const Machoke = {
    Name:"Machoke",
    Type:"Fighting",
    Evolution:"Machamp",
    HitPoints: 80,
    Weakness:"Psychic",
    Resistance:"NULL",
    Retreat: 3,
    Attack:["Karate Chop","Submission"],
    PokemonPower:"NUll"
}

const Machop = {
    Name:"Machop",
    Type:"Fighting",
    Evolution:"Machoke",
    HitPoints: 50,
    Weakness:"Psychic",
    Resistance:"NULL",
    Retreat: 1,
    Attack:"Low Kick",
    PokemonPower:"NULL"
}



