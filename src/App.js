import './App.css'
import { Content } from './components/mainComponent/Content'
import { Footer } from './components/mainComponent/Footer'
import { Header } from './components/mainComponent/Header'

function App() {
  // const [isPending, startTransition] = useTransition()
  // const [query, setQuery] = useState('')
  // const [inputValue, setInputValue] = useState('')
  // const filteredName = NAMES.filter((item) => {
  //   return item.first_name.includes(query) || item.last_name.includes(query)
  // })

  // const changeHandler = (event) => {
  //   setInputValue(event.target.value)
  //   startTransition(() => setQuery(event.target.value))
  // }
  return (
    <div className="App">
      {/* <Greet name="Mohammed" />
      <Greet name="Aabid" />
      <Greet name="A">
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <Inline />
      <h1 className="error">error</h1> */}
      {/* <Form /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <input type="text" value={inputValue} onChange={changeHandler}></input>
      {isPending && <p>Updating List..</p>}
      {filteredName.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))} */}

      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
