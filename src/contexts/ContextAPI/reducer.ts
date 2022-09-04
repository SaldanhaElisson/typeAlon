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

const filteredArray = (array: any) => {
  const input = document.querySelector('.SearchInput');

  const filtered = array.filter((e) => {
    Object.values(e).filter((itemArray) => {
      if(itemArray == input.value) {
        return console.log(e);
      }
    })
  })
}

export const infoReducer = (state: State, action: Action) => {
  switch(action.type) {
    case Types.REQ_SUCESS: {
      //Pegar o valor do input e filtrar o array
      
      filteredArray(action.payload.alunos);
      return {...state, initialState: action.payload};
    }
    case Types.REQ_ERROR: {
      console.log('Requisição falhou!');
      return {...state};
    }
  }
  return {...state};
}