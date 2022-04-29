export const NameList = () => {
  const names = ['Aabid', 'Mohammed', 'Mohammed Aabid']
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>
      })}
    </div> 
  )
}
