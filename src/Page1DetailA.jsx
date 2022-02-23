import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
