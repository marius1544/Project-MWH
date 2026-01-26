const Users = {};

function user(){
    return{
        id: null
    }
}

export function generateID(){
    let id = null;
    do {
        id = (Math.random() * Number).toString(16);
    } while (Users[id])
        return id;
}

export default user;