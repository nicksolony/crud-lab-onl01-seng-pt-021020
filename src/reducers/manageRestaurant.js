import cuid from 'cuid';


export default function manageRestaurants(state ={
    restaurants:[],
    reviews:[]}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            return {...state, restaurants: [...state.restaurants, {text: action.text, id: cuid()}]}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant=>restaurant.id !== action.id)}
        case 'ADD_REVIEW':
            return {...state, reviews: [...state.reviews, {text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId}]}
        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review=>review.id !== action.id)}
        default:
            return state;
    }    
}
