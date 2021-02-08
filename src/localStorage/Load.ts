export const loadFromLocalStorage: any = () => {
  try {
    const serializedState: any = localStorage.getItem('titter')
    return JSON.parse(serializedState)
  } catch (e) {
    throw new Error(e)
  }
}
