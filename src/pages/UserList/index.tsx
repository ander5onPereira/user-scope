import { Container } from '@/components/Conteiner';

import { Tabs } from '@/components/Tabs';
import { ContentFavoriteTab } from './tabs/favorite';
import { ContentUsersTab } from './tabs/users';

export function UserList() {
  const tabs = [
    {
      id: 'tab1',
      label: 'Geral',
      content: () => <ContentUsersTab />,
    },
    {
      id: 'tab2',
      label: 'Favoritos',
      content: () => <ContentFavoriteTab />,
    },
  ];
  return (
    <>
      <Container>
        <Tabs tabs={tabs} defaultActive='tab1' />
      </Container>
    </>
  );
}
