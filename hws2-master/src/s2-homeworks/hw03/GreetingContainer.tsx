import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: UserType['name']) => void
}

export const pureAddUser = (
  name: UserType["name"],
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: UserType["name"]) => void,
) => {
  if (name.trim() === "") {
    setError('name not be empty');
  } else {
    addUserCallback(name);
    setName("");
    setError('');
  }
};

export const pureOnBlur = (name: UserType["name"], setError: (error: string) => void) => {
  if (name.trim() === "") {
    setError('Ошибка! Введите имя!');
  }
};

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
   if (e.key === 'Enter') {
        addUser()
    }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    const [name, setName] = useState<UserType['name']>('')
    const [error, setError] = useState<string>('') 
    console.log(users)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value) 
        error && setError('')//тут если ошибка есть оператор && вернет вторую правду, то есть setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length 
    const lastUserName = users[users.length-1]?.name || ''

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
