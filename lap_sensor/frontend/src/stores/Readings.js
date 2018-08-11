import React from 'react'
import { observable, computed, action, decorate, autorun, get, toJS, set, runInAction } from "mobx";


class Readings{
    all = [];
    isLoading = false;

    constructor() {
        autorun(() => console.log(toJS(this.all)));
    }

fetchAll = async () =>{
    this.isLoading = false;
    const url = 'http://localhost:8000/sensor/reading/';
    await fetch(url, {headers:{
        Authorization: `JWT ${localStorage.getItem('token')}`
    }}).then((resp)=>{
        if(resp.status === 200)
        {
            return resp.json()
        }
        else{
            throw new Error("Unauthorized")
        }
    }).then((returned_json)=>{
        this.all = returned_json
    }).catch((error)=>{
        this.all = []
        console.log("NOT LOGGED IN")
    });

};


}
decorate(Readings,
{
all: observable,
isLoading: observable,
fetchAll: action
});


var readingStore = new Readings()
export default readingStore;
