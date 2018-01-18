var obj = { name: '小米', age: 18 };
Object.defineProperty(obj, "name2", {
    enumerable: true,
    configurable: true,
    get: function () {
        return '你要获取';
    },
    set: function (val) {
        console.log(val);
    }
});
console.log(obj.name2 = 123);
