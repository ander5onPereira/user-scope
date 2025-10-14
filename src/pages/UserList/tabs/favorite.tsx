import { Card } from '@/components/Card';
import DataTable from '@/components/dataTable';
import { Input } from '@/components/Input';
import { useFavorite } from '@/hooks/useFavorite';
import { IoIosStar } from 'react-icons/io';
import { IoStarOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export function ContentFavoriteTab() {
  const navigator = useNavigate();

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
          placeholder='Buscar nome'
          name='search'
          onChange={(e) => handleSetSearch(e.target.value)}
        />
      </div>
      <div>
        <DataTable
          key={`dataTable-favorites-${storage?.toString()}`}
          columns={[
            { key: 'id', title: 'ID' },
            { key: 'name', title: 'Nome' },
            { key: 'gender', title: 'Genero' },
            {
              key: 'image',
              title: '',
              render: (value) => (
                <img
                  src={String(value)}
                  alt='character'
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
              ),
            },
            {
              key: 'id',
              title: 'favorite',
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
