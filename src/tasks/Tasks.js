"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
var Tasks = /** @class */ (function () {
    function Tasks(name, completed) {
        if (completed === void 0) { completed = false; }
        this.name = name;
        this.completed = completed;
    }
    Tasks.prototype.getDescription = function () {
        return this.name;
    };
    Tasks.prototype.getStatus = function () {
        return this.completed ? 'Terminée' : 'En cours';
    };
    return Tasks;
}());
exports.Tasks = Tasks;
