import Button from "./components/Button";

const App = () => {
  return (
    <div className="bg-gray-200 grid grid-cols-3 gap-10  p-10">
      <Button title={"Click Me"} className="bg-green-400  border-none" />
      <Button title={"Alert"} className="bg-amber-400  border-none" 
      
      onClick={()=> alert('Welcome to buttons gallery')}/>
      <Button title={"Click Me"} className="bg-violet-400  border-none" />
      <Button title={"Red btn"} className="bg-red-400  border-none" />
      <Button title={"Blue Btn"} className="bg-blue-400  border-none" />
    </div>
  );
};

export default App;
