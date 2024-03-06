import React from "react";
import { useTodos } from "../comtext/setComtext";
import { HStack,VStack,IconButton,Text } from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";

const RmTask: React.FC = () => {
  const [tasks, setTasks] = useTodos();

  type Task = { id: number; task: string };

  const killTask = (id: number) => {
    const newChores = tasks.filter((task: Task) => task.id !== id);
    setTasks(newChores);
  };

  return (
    <VStack align="center" p="5">
      {tasks.map((task: Task) => (
        <HStack key={task.id + 1} alignItems="center">
          <IconButton key={task.id + 2} 
          id={task.id.toString()} 
          onClick={() => killTask(task.id)}

          colorScheme='teal'
          aria-label='Done'
          borderRadius='100'
          icon={<MdCheck/>}
          >
          </IconButton>
          <Text key={task.id + 3} fontSize="xl">{task.task}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default RmTask;