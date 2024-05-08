const personPrototype = {
    greet: function() {
        console.log(`olá, meu nome é ${this.name}`);
    }
};

const objWanderson = object.create(personPrototype);
objWanderson.name = "Wanderson";
objWanderson.greet();
