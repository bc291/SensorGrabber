import React from 'react'
import { observable, computed, action, decorate, autorun, get, toJS, set, runInAction } from "mobx";
import Api from '../services/Api'


class Auth{

constructor() {
    autorun(()=>{
        console.log(this.logged_in)
    })
}

    logged_in = false
    is_loading = false
    is_failure = false
    username

    async login(params){
        try{
        const response = await Api.login(params);
        localStorage.setItem('token', response.token);
        runInAction(()=>{
            this.logged_in = true;
            this.is_failure = false;
            this.is_loading = false;
        })
    }
        catch(e){
            runInAction(()=>{
                this.logged_in = false;
                this.is_failure = true;
                this.is_loading = false;
            })

        }
    }


async check_if_logged()
{
    try{
        let token = localStorage.getItem('token')
        const response = await Api.check_log_state(token)
        const status = await response.status
        if (status === 200)
        {
            runInAction(()=>{
                this.logged_in = true;
                this.is_failure = false;
                this.is_loading = false;
                this.username = response.body.username
            })    
        }
        else{
            throw new Error("Not logged in")
        }
    }
    catch(e){
        runInAction(()=>{
        this.logged_in = false;
        this.is_failure = true;
        this.is_loading = false;
        this.username = null
    })}
}
}


decorate(Auth,
{
    logged_in: observable,
    is_loading: observable,
    is_failure: observable,
    username: observable,
    login: action
});

export default new Auth()
