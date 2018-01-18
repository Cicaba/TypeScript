var Name = (function () {
    function Name(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 18;
    }
    return Name;
}());
function allname(str) {
    console.log(str);
}
allname(new Name('', ''));
