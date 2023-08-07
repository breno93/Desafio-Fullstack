import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;

  padding: 1rem;
  height: 7rem;
  gap: 10rem;
  justify-content: center;

  background: var(--color-gray-800);
`;

export const Button = styled.button`
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
