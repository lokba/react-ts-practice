import Counter from "./component/Counter";
import MyForm from "./component/MyForm";
import CounterContainer from "./container/CounterContainer";

const App = () => {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;

  return <CounterContainer />;
};

export default App;
