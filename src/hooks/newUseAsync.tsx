import React, { useReducer, Reducer, useEffect } from 'react'

enum ActionType {
  SUCCESS,
  LOADING,
  ERROR,
}

interface IAction {
  type: ActionType
  payload?: {
    data?: any
    error?: any
  }
}

interface IState {
  loading: boolean
  data: any
  error: any
}

const initialState: IState = {
  loading: false,
  data: null,
  error: null,
}

const reducer: Reducer<IState, IAction> = (state, action): IState => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case ActionType.SUCCESS:
      return {
        loading: false,
        data: action.payload?.data,
        error: null,
      }
    case ActionType.ERROR:
      return {
        loading: false,
        data: null,
        error: action.payload?.error,
      }
    default:
      throw new Error(`Unhandled Type ${action.type}`)
  }
}

function useAsyncNew(callback: () => void, deps = []): [IState, Function] {
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
    reducer,
    initialState,
  )
  const fetchData = async () => {
    dispatch({ type: ActionType.LOADING })
    try {
      const result = await callback()
      dispatch({
        type: ActionType.SUCCESS,
        payload: {
          data: result,
        },
      })
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: {
          error,
        },
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, deps)

  return [state, dispatch]
}

export default useAsyncNew
