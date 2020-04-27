/* Reducer structure
 *   action & oldState > Reducer(pure Function(Action) define newState) > oldState = newState
 */
type typeOptions = "INCREMENT" | "PLUS" | "DECREMENT" | "MULTIPLY" | "DIVIDE";

interface Action {
  // El state nunca se modifica directamente
  // funcion pura para modificar el state
  type: typeOptions;
  payLoad?: any;
}

interface Reducer<T> {
  // receive action and oldState
  (oldState: T, action?: Action): T;
  /* T no es de type any, is the same type entered */
}

let countReducer: Reducer<number> = (state: number = 0, action?: Action) => {
  // logica para el new state
  // por defecto siempre retorna el state
  if (!action) {
    return state;
  }
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "PLUS":
      return state + action.payLoad;

    case "MULTIPLY":
	  return state * action.payLoad;
	  
	case "DIVIDE":
      return state / action.payLoad;

    default:
      return state;
  }
};

const actionReducer: Action = {
  type: "INCREMENT",
};
const actionDecrement: Action = {
  type: "DECREMENT",
};
const actionPlus: Action = {
  type: "PLUS",
  payLoad: 10 /** Uso de payload */,
};
const actionMultiply: Action = {
	type: "MULTIPLY",
	payLoad: 2
  };
const actionDivide: Action = {
	type: "DIVIDE",
	payLoad: 2
  };
console.log(countReducer(10)); /** 10 Al no encontrar el type retorna state por defecto */
console.log(countReducer(10, actionReducer)); /** 11 */
console.log(countReducer(10, actionDecrement));
console.log(countReducer(10, actionPlus)); /** 20 usando el payLoad*/
console.log(countReducer(10, actionMultiply)); /** 20 */
console.log(countReducer(10, actionDivide)); /** 5 */