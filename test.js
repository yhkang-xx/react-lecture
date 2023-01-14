var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, point, rank) {
        this.id = id;
        this.point = point;
        this.rank = rank;
        this.company = "ABC";
        console.log("User Class");
    }
    User.prototype.getRank = function () {
        return this.rank;
    };
    return User;
}());
var Silver = /** @class */ (function (_super) {
    __extends(Silver, _super);
    function Silver(_id, _point) {
        var _this = _super.call(this, _id, _point, "Silver") || this;
        _this._id = _id;
        _this._point = _point;
        console.log("Silver Class");
        return _this;
    }
    Silver.prototype.getCompany = function () {
        return this.company;
    };
    return Silver;
}(User));
var Gold = /** @class */ (function (_super) {
    __extends(Gold, _super);
    function Gold(_id, _point) {
        var _this = _super.call(this, _id, _point, "Gold") || this;
        _this._id = _id;
        _this._point = _point;
        console.log("Gold Class");
        return _this;
    }
    Gold.prototype.getCompany = function () {
        return this.company;
    };
    return Gold;
}(User));
var userA = new Silver("111403", 205);
console.log();
console.log(userA.getRank(), userA.getCompany());
// let userB = new Gold("111500", 664);
// console.log(userB.getRank());
// console.log(userB.getCompany());
