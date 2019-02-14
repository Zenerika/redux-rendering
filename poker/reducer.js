const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    const newState = [...state]

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "RANDOM_CARD") {

      newState[action.index] = {
        value: action.value,
        suit: action.suit,
      }
      return newState
    }
    return state;
}