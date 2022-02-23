import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>url parameterページです</h1>
      <p>{id} がパラメータです</p>
      <p>{query.get("name")} がクエリです</p>
    </div>
  );
};
