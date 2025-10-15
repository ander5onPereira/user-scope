import { Card } from '@/components/Card';
import DataTable from '@/components/DataTable';
import { Input } from '@/components/Input';
import { useFavorite } from '@/hooks/useFavorite';
import { useTranslation } from 'react-i18next';
import { IoIosStar } from 'react-icons/io';
import { IoStarOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Imagem } from './style';

export function ContentFavoriteTab() {
  const navigator = useNavigate();
  const { t } = useTranslation();

  const {
    favorites,
    storage,
    removeItemFavorite,
    addItemFavorite,
    handleSetSearch,
  } = useFavorite();

  return (
    <Card>
      <div style={{ padding: 10, maxWidth: 300 }}>
        <Input
          type='text'
          placeholder={t('searchName')}
          name='search'
          onChange={(e) => handleSetSearch(e.target.value)}
        />
      </div>
      <div>
        <DataTable
          key={`dataTable-favorites-${storage?.toString()}`}
          columns={[
            {
              key: 'image',
              title: '',
              render: (value) => <Imagem src={String(value)} alt='avatar' />,
            },
            { key: 'id', title: 'ID' },
            { key: 'name', title: t('name') },
            { key: 'gender', title: t('gender') },
            {
              key: 'id',
              title: t('favorite'),
              isAction: true,
              render: (value) =>
                storage?.find((st: number) => st === value) ? (
                  <IoIosStar
                    size={28}
                    onClick={() => removeItemFavorite(Number(value))}
                  />
                ) : (
                  <IoStarOutline
                    size={28}
                    onClick={() => addItemFavorite(Number(value))}
                  />
                ),
            },
          ]}
          data={favorites || []}
          onRowClick={(e) => navigator(`/${e.id}`)}
        />
      </div>
    </Card>
  );
}
