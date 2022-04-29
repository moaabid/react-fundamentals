export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('parent')}>Greet Parent</button>
    </div>
  )
}
