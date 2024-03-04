import Tabs from "./components/Tabs";

const App = () => {
  const tabLabels = ["Tab 1", "Tab 2", "Tab 3"];
  const tabContents = [
    <div>Contenido de la pestaña 1</div>,
    <div>Contenido de la pestaña 2</div>,
    <div>Contenido de la pestaña 3</div>
  ];

  const tabCallbacks = [
    () => { console.log("Callback de la pestaña 1"); },
    () => { console.log("Callback de la pestaña 2"); },
    () => { console.log("Callback de la pestaña 3"); }
  ];

  return (
    <div>
      <h1>Componente de pestañas</h1>
      <Tabs tabLabels={tabLabels} tabContents={tabContents} tabCallbacks={tabCallbacks} />
    </div>
  );
};

export default App;
