export const todoRedurer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            console.log(action.payload);
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toogle-old':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })
        case 'toogle':
            return state.map(todo => 
                (todo.id === action.payload)
                    ? {...todo, done: !todo.done}
                    : todo
                );
        default:
            return state;
    }
}