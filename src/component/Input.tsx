import React, { useState, ChangeEvent } from "react";
import { useTodos } from "../comtext/setComtext";

import { Button, Input, Center, useToast } from "@chakra-ui/react";

const InputTask: React.FC = () => {
  const [work, setWork] = useState<string>("");
  const [tasks, setTasks] = useTodos();

  const toast = useToast();

  const upDateList = () => {
    if (work === "") {
      showToast('Non Task!', 'error')
    } else {
      const newJobs = [...tasks, {
        id: Date.now(), task: work
      }];

      setTasks(newJobs);
      setWork("");
    }
  };

  const showToast = (message: string, status: 'info' | 'warning' | 'success' | 'error') => {
    toast({
      title: message,
      status: status,
      duration: 1000,
      isClosable: true,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWork(e.target.value);
  };

  return (
    <Center height="auto">
      <Input
        id="input"
        placeholder="add task..."
        type="text"
        onChange={handleInputChange}
        value={work}

        size='md'
        variant='filled'
        width='sm'
        _placeholder={{ color: 'teal' }}
      />
      <Button colorScheme="teal" onClick={upDateList}>
        add
      </Button>
    </Center>
  );
};

export default InputTask;