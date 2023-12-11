
export default function Squeres({ mapSqueres}) {
  return (
    <>
      <div className="container">
        {mapSqueres && mapSqueres.map( squeres => squeres.map( (squere,index) => <div key={index} className="squeres"></div>))}
        </div>
    </>
  );
}
