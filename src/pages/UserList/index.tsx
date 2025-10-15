import { Container } from '@/components/Conteiner';

import { Tabs } from '@/components/Tabs';
import { ContentFavoriteTab } from './tabs/favorite';
import { ContentUsersTab } from './tabs/users';
import { useTranslation } from 'react-i18next';

export function UserList() {
  const { t } = useTranslation();
  const tabs = [
    {
      id: 'tab1',
      label: t('general'),
      content: () => <ContentUsersTab />,
    },
    {
      id: 'tab2',
      label: t('favorites'),
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
