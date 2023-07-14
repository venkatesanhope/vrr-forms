
function CheckBox(props:any) { 
  const {name, label, value} = props;
  return (
    <div>
    <input
      type="checkbox"
      id="{name}"
      name="{name}"
      value="{value}" />
    <label>{label}</label>
  </div>
  ); 

}; 


export default CheckBox;