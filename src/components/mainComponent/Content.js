export const Content = () => {
  const handelNameChange = () => {
    const names = ['bob', 'aabid', 'mohammed']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }
  return (
    <main>
      <p>Hello {handelNameChange()}</p>
    </main>
  )
}
