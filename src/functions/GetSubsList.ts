import ExtractName from './ExtractName'

export default function GetSubsList(
  userId: string,
  subsType: string,
  users: any
) {
  const subs = users.byId[userId][subsType]
  const subsList = subs.map((id: string) => ({
    userId: id,
    name: ExtractName(id, users),
  }))
  return subsList
}
