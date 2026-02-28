const cStats = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.webp',
    attacked: function () {
        this.health = this.health - 20;
        if (this.health < 0){
            this.health = 0;
        }
    },
    levelUp: function () {
        this.level++;
    }
};

document.querySelector('img').setAttribute('src', cStats.image);
document.querySelector('img').setAttribute('alt', cStats.name);
document.querySelector('#characterName').innerHTML = cStats.name;
document.querySelector('#characterClass').innerHTML = '<strong>' + "Class: " + '</strong>' + cStats.class;
document.querySelector('#characterLevel').innerHTML = '<strong>' + "Level: " + '</strong>' + cStats.level;
document.querySelector('#characterHealth').innerHTML = '<strong>' + "Health: " + '</strong>' + cStats.health;

document.querySelector('#attackedButton').addEventListener("click", function () {
    cStats.attacked();
    document.querySelector('#characterHealth').innerHTML = '<strong>' + "Health: " + '</strong>' + cStats.health;
});

document.querySelector('#levelUpButton').addEventListener("click", function () {
    cStats.levelUp();
    document.querySelector('#characterLevel').innerHTML = '<strong>' + "Level: " + '</strong>' + cStats.level;
});