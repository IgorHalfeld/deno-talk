type User = {
  id: number,
  name: string,
  skils: string[]
}

const getRandomNumber = () => {
  return ~~(Math.random() * 10000).toFixed(0)
}

const users: User[] = [
  {id: getRandomNumber(), name: 'Igor', skils: ['JavaScript', 'Golang', 'Dart']},
  {id: getRandomNumber(), name: 'Letícia', skils: ['Python', 'Pandas', 'NLP']}
]

export const getUsers = () => users
export const getUserById = (id: number): User | undefined => users.find(user => user.id === id)
