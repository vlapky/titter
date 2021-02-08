export const saveToLocalStorage: any = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('titter', serializedState)
  } catch (e) {
    throw new Error(e)
  }
}
