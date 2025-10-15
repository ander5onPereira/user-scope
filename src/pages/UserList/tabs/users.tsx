import { Card } from '@/components/Card';
import DataTable from '@/components/DataTable';
import { Indication } from '@/components/Indicator';
import { Input } from '@/components/Input';
import { useCharacter } from '@/hooks/useCharacter';
import { useFavorite } from '@/hooks/useFavorite';
import { IoIosStar } from 'react-icons/io';
import { IoStarOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Imagem } from './style';

export function ContentUsersTab() {
  const navigator = useNavigate();
  const { character, handlerNextPage, handlerPrevPage, page, handleSetSearch } =
    useCharacter();
  const { addItemFavorite, removeItemFavorite, storage } = useFavorite();
  return (
    <Card>
      <div style={{ padding: 10, maxWidth: 300 }}>
        <Input
          type='text'
          name='search'
          placeholder='Buscar nome'
          onChange={(e) => handleSetSearch(e.target.value)}
        />
      </div>
      <div>
        <DataTable
          key={`dataTable-users-${storage?.toString()}`}
          columns={[
            {
              key: 'image',
              title: '',
              width: '80',
              render: (value) => <Imagem src={String(value)} alt='character' />,
            },
            { key: 'id', title: 'ID', width: '60' },
            { key: 'name', title: 'Nome' },
            { key: 'gender', title: 'Genero' },
            {
              key: 'status',
              title: 'Status',
              render: (value) => <Indication $color={value.toString()} />,
            },
            {
              key: 'id',
              title: 'Favoritar',
              isAction: true,
              width: '100',
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
          data={character?.results || []}
          nextPage={handlerNextPage}
          prevPage={handlerPrevPage}
          pageSize={character?.info.pages}
          page={Number(page)}
          totalPages={character?.info.pages}
          count={character?.info.count}
          onRowClick={(e) => navigator(`/${e.id}`)}
        />
      </div>
    </Card>
  );
}
