import * as Types from './types'

export const loadSearchedInfos = async (dispatch: any) => {
                            /***** Usar a URL da API *****/
  const infos = await fetch('http://localhost:5173/src/api/mock.json');
  const infosResult = await infos.json();

  dispatch({type: Types.REQ_SUCESS, payload: infosResult});
}