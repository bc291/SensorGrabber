import React from 'react'
import { observable, computed, action, decorate, autorun, get, toJS, set, runInAction } from "mobx";
import TextField from "material-ui/TextField";
import Button from '@material-ui/core/Button';


class Todo extends React.Component {
    todos = [];
    pendingRequests = 0;
    measurements = [];

    constructor() {
        super();
        autorun(() => console.log(this.report));
    }

	get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
        
	}

	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
    }

    async fetchFromGithub(endpoint) {
        const url = `http://localhost:8000/sensor/` + endpoint;
        const response = await fetch(url);
        return await response.json();
      }

   get viewAllTodos() {
		console.log(toJS(this.todos))
    }

    get testChangeData()
    {
        this.todos[0].completed = true;
    }

    getAllValues = async () => {
        const [measurements] = await Promise.all([
          this.fetchFromGithub(`reading/`),
        ]);
        runInAction("Update State after fetching Github's Data", () => {
          this.measurements = measurements;
          console.log(toJS(this.measurements))
        });
      };

}

decorate(Todo, {
    todos: observable,
    pendingRequests: observable,
    measurements: observable,
    completedTodosCount: computed,
    report: computed,
    getAllValues: action
  });

  var observableTodoStore = new Todo();
  export default observableTodoStore;
