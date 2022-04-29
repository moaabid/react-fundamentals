export const UserGreeting = () => {
  const isLoggedIn = false
  return <div>Welcome {isLoggedIn ? 'Aabid' : 'Guest'}</div>
}
