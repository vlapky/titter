export default function GetProfileState(userId: string, users: any) {
  if (userId === users.currentUser) {
    return 'YOUR'
  } else if (users.byId[users.currentUser].subsYou.includes(userId)) {
    return 'SUB'
  } else return 'NONE'
}
