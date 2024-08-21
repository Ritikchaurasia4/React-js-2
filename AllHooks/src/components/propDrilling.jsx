export const PropDrilling = () =>{
    return (
      <div className="container">
        
        <h1>Component A</h1>
        <ChildComponent data="React Js"/>
      </div>
)};

const ChildComponent = (props) =>{
     return(<>
           <h1> Hello , I am a component B </h1>
           <GrandChildComponent data={props.data}/>
     </>);
};

const GrandChildComponent = (props) =>{
  return(<>
        <h1> Hello , I am a component C </h1>
        <GrandGrandChildComponent data={props.data}/> []
  </>);
};

const GrandGrandChildComponent = (props) =>{
  return(<>
        <h1> Hello , I love {props.data}</h1>
        
  </>)
}