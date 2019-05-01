import styled from "styled-components";
import theme from "../../components/theme";

export const AppContainer = styled.div`
  width: 100%;
  background: ${theme.bg};
`;

export const Card = styled.div`
  width: 55%;
  margin: 32px auto;
  background: ${theme.bg};
  border-radius: 6px;
  border: 1px solid ${theme.accent};
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const TitleBar = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 24px;
  background: ${theme.accent};
  color: ${theme.textInverse};
  border-radius: 6px 6px 0 0;
`;

export const TodoListContainer = styled.div`
  padding: 12px;
`;

export const TodoItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 80% auto;
  padding-bottom: 12px;
  margin-bottom: 12px;
  width: 100%;
  border-bottom: 1px solid ${theme.accent};
  &:last-of-type {
    border-bottom: none;
  }
`;

export const TodoTitle = styled.p<{ isDone?: boolean }>`
  font-size: 18px;
  padding-left: 8px;
  margin: auto 0;
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};
`;

export const NewItemArea = styled.div`
  width: 100%;
  padding: 12px;
  display: grid;
  grid-template-columns: 90% auto;
`;

// The following would usually be a /component component because its highly reusable but this is a SPA with one view.
export const Button = styled.button<{ isDanger?: boolean; radius?: string }>`
  width: 100%;
  padding: 12px;
  color: ${theme.textInverse};
  background: ${props => (props.isDanger ? theme.danger : theme.accent)};
  border-radius: ${props => (props.radius ? props.radius : 0)};
  border: 1px solid ${props => (props.isDanger ? theme.danger : theme.accent)};
  cursor: pointer;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${theme.bg};
    color: ${props => (props.isDanger ? theme.danger : theme.accent)};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${theme.accent};
  font-size: 16px;
  border-radius: 6px 0 0 6px;
  border-right: none;

  &:focus {
    outline: none;
  }
`;
