import { atom } from 'jotai/vanilla'

export const countAtom = atom(0)

const urlAtom = atom('https://jsonplaceholder.typicode.com/todos/1')
export const fetchUrlAtom = atom(
  async(get) => {
    const response = await fetch(get(urlAtom))
    return await response.json() as { id: number }
  },
)
