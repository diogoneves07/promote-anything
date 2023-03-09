interface RemoveToDoProps {
  removeToDo: () => void;
}

export default function RemoveToDo({ removeToDo }: RemoveToDoProps) {
  return (
    <>
      <button type="button" onClick={removeToDo}>
        Remove
      </button>
    </>
  );
}
