import React, { useEffect, useState } from 'react'
import BaseTemplate from '../../components/templates/Base'
import Title from '../../components/atoms/Title'
import axios from 'axios'
import useAsync from '../../hooks/useAsync'
import useAsyncNew from '../../hooks/newUseAsync'

async function getUsers() {
  const response = await axios.get(
    'http://dummy.restapiexample.com/api/v1/employees',
  )
  return response.data
}

const Home: React.FC = () => {
  const [state, refetch] = useAsyncNew(getUsers, [])
  const { loading, error, data } = state

  return (
    <BaseTemplate>
      <Title>홈</Title>
      {loading ? (
        '불러오는중'
      ) : error || !data ? (
        '불러오지 못했습니다.'
      ) : (
        <ul>
          {data.data.map((user: any, index: number) => {
            return <li key={`user-${index}`}>{user.employee_name}</li>
          })}
        </ul>
      )}
    </BaseTemplate>
  )
}

export default Home
