
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(
    state= {
    restaurants: [], 
    reviews: []
    }, 
    action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            return {...state, restaurants: [...state.restaurants, {text: action.name, id: cuidFn()}]};
        case 'DELETE_RESTAURANT':
            let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return { ...state, restaurants: restaurants };
        case 'ADD_REVIEW':
            return {...state, reviews: [...state.reviews, {text: action.review.text, restaurantId: action.review.restaurantId, id:cuidFn()}]}
        case 'DELETE_REVIEW':
            let reviews = state.reviews.filter(review => review.id !== action.id)
            return { ...state, reviews: reviews }
        default:
        return state;
    }

}
