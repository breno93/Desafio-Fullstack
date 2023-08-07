import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardContatoWrapper = styled.div`
  width: 300px;

  margin: 7rem auto;

  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  background: var(--color-gray-800);

  display: flex;
`;

export const ContatoListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContatoListLi = styled.li`
  padding: 4px 0;
  font-size: 20px;
`;

export const AllButtons = styled.div`
  gap: 5px;
`;

export const EditButton = styled.button`
  background: var(--color-gray-700);
  color: var(--color-gray-100);
  border: none;
  border-radius: 0.5rem;
  font-size: 20px;

  margin-right: 8px;
  padding: 0.5rem 1rem;

  transition: background-color 0.3s ease;
  &:hover {
    background: var(--color-gray-900);
  }
`;

export const DeleteButton = styled.button`
  background: var(--color-gray-700);
  color: var(--color-gray-100);
  border: none;
  border-radius: 0.5rem;
  font-size: 20px;

  padding: 0.5rem 1rem;

  transition: background-color 0.3s ease;
  &:hover {
    background: var(--color-gray-900);
  }
`;

export const ButtonCard = styled.button``;
