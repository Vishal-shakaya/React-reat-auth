import AuthReducer from './store/reducers/authReducer';
import { createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
const logger = state => {
	return next => {
		return action => {
			// console.log('middleware' , action);
			const result = next(action);
			// console.log('middleware' ,state.getState());
			return result ; 
		}
	}
}

const rootReducer = combineReducers({
auth : AuthReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

export default store ;
