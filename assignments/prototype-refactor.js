

// Prototype Refactor

// function GameObject(attributes) {
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
//   this.dimensions = attributes.dimensions;
// }
// GameObject.prototype.destroy = function () {
//   return `${this.name} was removed from the game.`
// }

class GameObject {
    constructor (attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }

destroy () {
    return `${this.name} was removed from the game.`
}
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(characterattrs) {
//     GameObject.call(this, characterattrs);
//     this.healthPoints = characterattrs.healthPoints;
//   };
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function (){
//     return `${this.name} took damage`
//   }
  
  class CharacterStats extends GameObject {
      constructor (characterattrs) {
          super(characterattrs);
          this.healthPoints = characterattrs.healthPoints
      }

      takeDamage () {
        return `${this.name} took damage`
      }
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
//   function Humanoid(humanattrs) {
//     CharacterStats.call(this, humanattrs);
//     this.team = humanattrs.team;
//     this.weapons = humanattrs.weapons;
//     this.language = humanattrs.language;
//   };
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   GameObject.prototype = Object.create(Humanoid.
//     prototype);
  
//   Humanoid.prototype.greet = function (){
//     return `${this.name} offers a greeting in ${this.language}`
//   }

  class Humanoid extends CharacterStats {
      constructor (humanattrs) {
          super(humanattrs);
          this.team = humanattrs.team;
        this.weapons = humanattrs.weapons;
        this.language = humanattrs.language;
      }

      greet() {
        return `${this.name} offers a greeting in ${this.language}`
      }
  }

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

