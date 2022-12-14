export default (posts=[], action) => {
    switch(action.type) {
        case 'DELETE':
            return posts.filter((posts)=> posts._id!==action.payload)
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
             return [...posts, action.payload];
        default:
            return posts;
    }
}