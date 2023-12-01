"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
var Tasks_1 = require("./Tasks");
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.users = [];
    }
    TaskManager.prototype.addUser = function (username, email) {
        var existingUser = this.users.find(function (user) { return user.username === username; });
        if (existingUser) {
            console.log("L'utilisateur avec le nom d'utilisateur ".concat(username, " existe d\u00E9j\u00E0."));
            return;
        }
        var newUser = {
            id: this.users.length + 1,
            username: username,
            email: email,
        };
        this.users.push(newUser);
        console.log("Nouvel utilisateur cr\u00E9\u00E9 : ".concat(username, " (ID ").concat(newUser.id, ")"));
    };
    TaskManager.prototype.listUsers = function () {
        console.log('Utilisateurs:');
        this.users.forEach(function (user) {
            console.log("".concat(user.id, ". ").concat(user.username, "(").concat(user.email, ")"));
        });
    };
    TaskManager.prototype.deleteUser = function (username) {
        var deletedUser = this.users.find(function (user) { return user.username === username; });
        if (deletedUser) {
            this.users = this.users.filter(function (user) { return user.username !== username; });
            console.log("L'utilisateur ".concat(username, " a \u00E9t\u00E9 supprim\u00E9."));
            console.log('Liste des utilisateurs après la suppression :');
            this.listUsers();
        }
        else {
            console.log("L'utilisateur ".concat(username, " n'existe pas."));
        }
    };
    TaskManager.prototype.addTask = function (description) {
        var newTask = new Tasks_1.Tasks(description);
        this.tasks.push(newTask);
    };
    TaskManager.prototype.getTasks = function () {
        return this.tasks;
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
