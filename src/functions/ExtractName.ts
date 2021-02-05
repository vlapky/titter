export default function ExtractName(id: string, users: any) {
  let name: string = users.byId[id].name
  return name
}
