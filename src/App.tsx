
import Title from "./component/Title";
import InputTask from "./component/Input";
import RmTask from "./component/RemoveTask";
import { TaskProvider } from "./comtext/setComtext";

const App: React.FC = () => {

  return (
    <>
    <TaskProvider>
    <Title/>
    <InputTask/>
    <RmTask/>
    </TaskProvider>
    </>
  )
}

export default App
