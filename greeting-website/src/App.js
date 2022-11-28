import logo from './logo.svg';
import './App.css';

function App() {
  let CurrentHour= new Date();
  CurrentHour=CurrentHour.getHours();
  let greeting='';
  const cssStyle={  };

if(CurrentHour>=1 && CurrentHour<12)
{
  greeting= "Good Morning, Rise & Shine :)";
  cssStyle.color="deeppink";
}

else if(CurrentHour>=12 && CurrentHour<18)
{
  greeting= "Good AfterNoon to shooting Moon :)" ;
  cssStyle.color="Orange";
}
else if(CurrentHour>=18 && CurrentHour<=19)
{
  greeting= "Good Evening & Hopes :)";
  cssStyle.color="purple";
}
else
{
  greeting= "Good Night Mosquito Bite ;)";
  cssStyle.color="yellow";
}
  return (
    <h1 className="App">
 Hello Family,<span style={cssStyle}> { greeting}</span>

    </h1>
  );
}

export default App;
