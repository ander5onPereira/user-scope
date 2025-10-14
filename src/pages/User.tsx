import { Button } from '@/components/Button';
import { useCharacter } from '@/hooks/useCharacter';
import { useNavigate } from 'react-router-dom';

export function UserDetail() {
  const navegate = useNavigate();
  const { currentCharacter, isLoading } = useCharacter();
  function handleBack() {
    navegate(-1);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Button onClick={() => handleBack()}>Voltar</Button>
      <pre>{JSON.stringify(currentCharacter, null, 2)}</pre>
    </>
  );
}
