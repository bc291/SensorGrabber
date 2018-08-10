import React from 'react'
import {observer} from 'mobx-react'

class TodoLister extends React.Component{

    render()
    {
        return <h1>MobX</h1>
    }
}

var todoLister = new TodoLister();
export default observer(todoLister);
