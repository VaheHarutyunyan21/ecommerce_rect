export default function Cart(props) {
   console.log(props);
   // const names = Array.isArray(props.name) ? props.name : [];
  
    return (
      <div>
        {props.name.map((name, index) => (
          <div key={index} style={{marginTop:"50vh"}}>{name.name}{name.price}</div>
        ))}
      </div>
    );
  }
  