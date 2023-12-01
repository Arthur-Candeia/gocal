import {createContext, Dispatch, SetStateAction, useState, useContext} from 'react'

interface MainContextProps {
  name: string,
  gender: string,
  age: number,
  weight: number,
  height: number,
  setName: Dispatch<SetStateAction<string>>,
  setGender: Dispatch<SetStateAction<string>>,
  setAge: Dispatch<SetStateAction<number>>,
  setWeight: Dispatch<SetStateAction<number>>,
  setHeight: Dispatch<SetStateAction<number>>,
  resetProps: () => void
}

interface childrenElement {
  children: React.ReactNode
}

const MainContext = createContext<MainContextProps>({
  name: '',
  gender: '',
  age: 0,
  weight: 0,
  height: 0,
  setName: (): string => '',
  setGender: (): string => '',
  setAge: (): number => 0,
  setWeight: (): number => 0,
  setHeight: (): number => 0,
  resetProps: () => {}
})

export function MainContextProvider({children}: childrenElement) {
  const [name, setName] = useState<string>('')
  const [gender, setGender] = useState('X')
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  function resetProps() {
    setName('')
    setGender('X')
    setAge(0)
    setWeight(0)
    setHeight(0)
  }

  return (
    <MainContext.Provider value={{name, gender, age, weight, height, setName, setGender, setAge, setWeight, setHeight, resetProps}}>
      {children}
    </MainContext.Provider>
  )
}

export function useMainContext() {
  const mainContext = useContext(MainContext)
  return mainContext
}