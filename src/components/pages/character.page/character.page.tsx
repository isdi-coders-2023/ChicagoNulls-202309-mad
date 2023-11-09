import { CardList } from '../../card.list/card.list';
import { Characters } from '../../characters/characters';
/* import { DetailButton } from '../../detail.buttton/detail.button'; */
import { FilterButton } from '../../filter.button/filter.button';
import { PageButton } from '../../page.button/page.button';

export default function CharacterPage() {
  return (
    <Characters>
      <>
        <FilterButton></FilterButton>
        <CardList></CardList>
        <PageButton></PageButton>
        {/* 
        <DetailButton></DetailButton> */}
      </>
    </Characters>
  );
}
