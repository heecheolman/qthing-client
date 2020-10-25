import React, { useEffect, useReducer } from 'react'

interface IState {
  loading: boolean
  data: any
  error: any
}

const iniitalState: IState = {
  loading: false,
  data: null,
  error: null,
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      }
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      }
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function useAsync(callback: () => void, deps = []): [IState, any] {
  const [state, dispatch] = useReducer(reducer, iniitalState)

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const data = await callback()
      dispatch({ type: 'SUCCESS', data })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  useEffect(() => {
    fetchData()
  }, deps)

  return [state, fetchData]
}

export default useAsync
