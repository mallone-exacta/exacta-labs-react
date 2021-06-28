import * as S from "./styles";

function Pagination({ page, firstPage, lastPage, onPrevious, onNext }) {
  return (
    <S.Wrapper>
      <S.Back disabled={firstPage} onClick={onPrevious} />

      <p>Página {page}</p>

      <S.Next disabled={lastPage} onClick={onNext} />
    </S.Wrapper>
  );
}

export default Pagination;
