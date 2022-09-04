import { Dispatch } from 'react';
import * as Types from './types'

export type State = {
  initialState: string[];
}

type Action = {
  type: string,
  payload?: string[]
}

export interface IContextProp {
  infoState: State,
  infoDispatch: Dispatch<Action>,
  payload?: string;
}

const filterArray = (state: any) => {
  const input: any = document.querySelector('.SearchInput') as HTMLInputElement;
  let search = state.filter((event: any) => {
    return input.value == Object.values(event);
  })

  console.log(search);
}

export const infoReducer = (state: State, action: Action) => {
  switch(action.type) {
    case Types.REQ_SUCESS: {
      //Pegar o valor do input e filtrar o array
      filterArray(state.initialState)
      return {...state, initialState: action.payload};
    }
    case Types.REQ_ERROR: {
      console.log('Requisição falhou!');
      return {...state};
    }
  }
  return {...state};
}