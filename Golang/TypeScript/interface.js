var Message = (function () {
    function Message(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 18;
    }
    return Message;
}());
function allname(str) {
    console.log(str);
}
allname(new Message('小', '米'));
