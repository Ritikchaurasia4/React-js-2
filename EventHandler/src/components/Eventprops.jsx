export const EventProps = ()=>{
    const HandleWelcomeUser = (user)=>{
        alert(`Hey ${user} , how are you `);
    }
    const HandleHover = ()=>{
        alert(`Hey thanks for watching me . `);
    }
    return(
        <>
        <h2>Hey , These are buttons to understand about Event handler as a props in React js</h2>
          <WelcomeUser onClick={() => HandleWelcomeUser("RitikChaurasia")} onMouseEnter={HandleHover} />
        </>
    )
}
const WelcomeUser = (props)=>{
    const HandGreeting = (user)=>{
        alert(`Hey ${user} , how are you `);
    }
    return(
        <>
          <button onClick={props.onClick}> ClickMe</button>
          <button onMouseEnter={props.onMouseEnter}> Hover me</button>
          <button onClick={()=>HandGreeting("friend")}>Greeting</button>
        </>
    )
}
export default EventProps;