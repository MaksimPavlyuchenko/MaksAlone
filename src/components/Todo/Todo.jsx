import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const Todo = ({ text, counter, deleteButton, id }) => {
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{counter}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => deleteButton(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
