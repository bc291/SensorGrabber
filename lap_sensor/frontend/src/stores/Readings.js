import React from 'react'
import { observable, computed, action, decorate, autorun, get, toJS, set, runInAction } from "mobx";
import Api from "../services/Api"

class Readings{
    all_users = [];
    is_loading = false;
    is_failure = false;

    constructor() {
        autorun(() => console.log(toJS(this.all_users)));
    }

fetchAll = async () =>{
    try{
        this.is_loading = true;
        let token = localStorage.getItem('token')
        const response = await Api.get_all_reading(token)
        const status = await response.status
        if (status === 200)
        {
            this.is_loading = false;
            this.all_users = response.body;
        }
        else {
            throw new Error("Something bad happened")
        }
    }
    catch(e)
    {
        this.is_failure = true;
        this.is_loading = false;
    }

};


}
decorate(Readings,
{
all_users: observable,
is_loading: observable,
is_failure: observable,
fetchAll: action
});


var readingStore = new Readings()
export default readingStore;
