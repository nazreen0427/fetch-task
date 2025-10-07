function counterReducer(state={count:0},action){
    switch(action.type){
        case "increment":
            return{count:state.count +1};
        case "decrement" :
            return{count:state.count -1};
        case "reset":
            return {count:0};
        default:
            return state;    
    }
}

function createStore(reducer){    // create a store that takes reducer function
    let state;   //holds the current state inside the store 
    let listeners=[];    // array of function that will run whenever state changed


function getState(){    //a simpple function that holds the current state outside the store
    return state;
}

function dispatch(action){ // the way to update state
    state=reducer(state,action); // calls the reducer function with current state and action to return new state
    listeners.forEach((listener) => listener() // calls the subscribed listener 
        
    );
}


function subscribe(listener){   //register function that should run whenever the state changes
    listeners.push(listener);
    return()=>{
        listeners=listeners.filter((l) =>l !==listener);
    };
} 
 dispatch({type :"@@INIT"});
  
 return {getState,dispatch,subscribe};
}

const store= createStore(counterReducer);

const unsubscribe = store.subscribe(()=>{
    console.log("state changed:",store.getState());
    
});

store.dispatch({type:"increment"});
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});
store.dispatch({type:"reset"});
  unsubscribe();